<template>
  <div :class="classGlass">
    <h1 class="main-heading">{{event.name}}</h1>

    <article class="container">
        <img :src="event.imageUrl" :alt="event.name">
    </article>

    <article class="container">
      <h3 class="description">{{event.desc}}</h3>
      <p class="block" ><i class="fas fa-map-marker-alt"></i> Location: {{event.location}} </p>
      <time class="block" ><i class="far fa-calendar"></i> Date: {{eventDate}} </time>

      <div class="btns">
        <template v-if="isOwner && $route.params.uid">
          <button class="event-btn" @click="editEvent($route.params.id)" >Edit</button>

          <button class="event-btn" @click="deleteEvent($route.params.id)" >Delete</button>
        </template>

        <template v-else-if="isOwner && !$route.params.uid">
          <button class="event-btn" @click="editEvent($route.params.id, true)" >Edit</button>

          <button class="event-btn" @click="deleteEvent($route.params.id, true)" >Delete</button>
        </template>

        <template v-else-if="event.isPublic && $parent.isLoggedIn">
          <button v-if="isMember" class="event-btn" @click="leaveEvent($route.params.id)" >Leave</button>

          <button v-else class="event-btn" @click="applyEvent($route.params.id)" >Join</button>
        </template>
      </div>

    </article>
  </div>
</template>

<script>
import eventsService from '../../mixins/eventsService';
import animations from '../../mixins/animations';

export default {
  name: "event-details",

  created() {
    if (this.$route.params.uid) {
      this.getEventById(this.$route.params.id, true);

    } else {
      this.getEventById(this.$route.params.id);
    }

    if (this.event.members && this.event.members.length > 0) {
      let uid = localStorage.getItem('uid');

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

  computed: {
    eventDate() {
      if (this.event.date) {
        return this.event.date.split("T")[0];
      }

      return "";
    }
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

.container .btns{
  min-height: 10em;
}

.container .btns .event-btn {
  position: static;
  margin: 25px 5px 0;
  width: 45%;
}
</style>