<template>
  <div :class="classGlass">
    <h1 class="main-heading">{{ event.name }}</h1>

    <article class="container">
      <img :src="event.imageUrl" :alt="event.name" />
    </article>

    <article class="container">
      <h3 class="description">{{ event.desc }}</h3>
      <p class="block">
        <i class="fas fa-map-marker-alt"></i> Location: {{ event.location }}
      </p>
      <time class="block">
        <i class="far fa-calendar"></i> Date: {{ event.date | date }}
      </time>

      <div class="btns">
        <!-- Edit and delete private event -->
        <template v-if="isOwner && $route.params.uid">
          <button
            class="event-btn"
            @click.prevent="editEvent($route.params.id)">
              Edit
          </button>

          <button
            class="event-btn"
            @click.prevent="confirmDelete($route.params.id)">
              Delete
          </button>
        </template>

        <!-- Edit and delete public event -->
        <template v-else-if="isOwner && !$route.params.uid">
          <button
            class="event-btn"
            @click.prevent="editEvent($route.params.id, true)">
              Edit
          </button>

          <button
            class="event-btn"
            @click.prevent="confirmDelete($route.params.id, true)">
              Delete
          </button>
        </template>

        <!-- Join and leave event -->
        <template v-else-if="event.isPublic">
          <button
            v-if="!isMember"
            class="event-btn"
            @click.prevent="applyEvent()">
              Join
          </button>

          <template v-else-if="isMember">
            <button
              class="event-btn"
              @click.prevent="leaveEvent()">
                Leave
            </button>
          
            <router-link tag="button" :to="`/events/organise/${$route.params.id}`"
              class="event-btn"
              @click.prevent="leaveEvent()">
                Organise
            </router-link>
          </template>
        </template>
      </div>
    </article>
  </div>
</template>

<script>
import eventsService from "../../mixins/eventsService";
import animations from "../../mixins/animations";

export default {
  name: "EventDetails",

  created() {
    if (this.$route.params.uid) {
      this.getEventById(this.$route.params.id, true)
        .then((event) => {
          const uid = localStorage.getItem("uid");
          this.event = event;
          this.isOwner = event.creator == uid ? true : false;
          this.isMember = event.members?.includes(uid);
        })
        .catch((err) => this.$root.$emit("notify", [err.message, "error"]));

    } else {
      this.getEventById(this.$route.params.id)
        .then((event) => {
          const uid = localStorage.getItem("uid");
          this.event = event;
          this.isOwner = event.creator == uid ? true : false;
          this.isMember = event.members?.includes(uid);
        })
        .catch((err) => this.$root.$emit("notify", [err.message, "error"]));
    }

    if (this.event.members && this.event.members.length > 0) {
      let uid = localStorage.getItem("uid");

      if (this.event.members.includes(uid)) {
        this.isMember = true;
      }
    }
  },

  data() {
    return {
      event: {},
      isOwner: false,
      isOnEvent: false,
      isMember: false,
    };
  },

  methods: {
    confirmDelete(id, isPublic) {
      if (confirm("You are about to delete this event. Are you sure?")) {
        this.deleteEvent(id, isPublic);
      }
    },
  },

  mixins: [eventsService, animations],
};
</script>

<style scoped>
.container {
  width: 50%;
  display: inline-block;
  padding: 75px 10px;
  text-align: center;
  text-anchor: start;
  vertical-align: top;
}

img {
  width: 100%;
  height: auto;
}

.description {
  min-height: 100px;
  margin-bottom: 25px;
  margin-top: 0;
}

.block {
  display: block;
  margin-top: 10px;
}

.container .btns {
  min-height: 10em;
}

.container .btns .event-btn {
  position: static;
  margin: 25px 5px 0;
  width: 45%;
}
</style>