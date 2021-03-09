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
        <template v-if="isOwner">
          <button class="event-btn" @click="editEvent($route.params.id)" >Edit</button>

          <button class="event-btn" @click="deleteEvent($route.params.id)" >Delete</button>
        </template>

        <template v-else-if="event.isPublic">
          <button class="event-btn" @click="joinEvent($route.params.id)" >Join</button>

          <button class="event-btn" @click="leaveEvent($route.params.id)" >Leave</button>
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
      this.getEventById(this.$route.params.id);
  },

  data() {
    return {
        event: {},
        isOwner: false,
        isOnEvent: false,
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
