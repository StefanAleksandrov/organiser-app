<template>
  <div :class="classGlass">
    <h1 class="main-heading">{{event.eventName}}</h1>

    <article class="container">
        <img :src="event.imageUrl" alt="event.eventName">
    </article>

    <article class="container">
      <h3 class="description">{{event.eventDesc}}</h3>
      <p class="block" ><i class="fas fa-map-marker-alt"></i> Location: {{event.eventLocation}} </p>
      <time class="block" ><i class="far fa-calendar"></i> Date: {{event.eventDate}} </time>

      <div class="btns">
        <template v-if="isOwner">
          <button class="event-btn" @click="editEvent" >Edit</button>

          <button class="event-btn" @click="deleteEvent($route.params.id)" >Delete</button>
        </template>

        <template v-else-if="!event.isPrivate">
          <button class="event-btn" @click="applyEvent" >Apply</button>

          <button class="event-btn" @click="leaveEvent" >Leave</button>
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
    vertical-align: middle;
}

img {
    width: 100%;
    height: auto;
}

.description {
    min-height: 100px;
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
