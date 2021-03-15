<template>
  <div class="home">
    <h1 class="main-heading" v-if="eventsPublic.length > 0 || eventsPrivate.length > 0" >Upcoming Events</h1>
    <h1 class="main-heading" v-else >No Upcoming Events. You can <router-link to="add-event">add a new event</router-link> and start organising right away!</h1>

    <template v-if="eventsPublic.length > 0">
      <h2>Public Events:</h2>
      <event v-for="event in eventsPublic" :key="event.id" :event="event"></event>
    </template>

    <template v-if="eventsPrivate.length > 0">
      <h2>Private Events:</h2>
      <event v-for="event in eventsPrivate" :key="event.id" :event="event"></event>
    </template>
  </div>
</template>

<script>
import Event from "../events/Event";
import eventsService from "../../mixins/eventsService";

export default {
  name: "page-home",

  created() {
    this.getAllPublicEvents();
    this.getAllPrivateEvents();
  },

  data() {
    return {
      eventsPublic: [],
      eventsPrivate: [],
    };
  },

  components: {
    Event,
  },

  mixins: [eventsService],
};
</script>

<style scoped>
</style>
