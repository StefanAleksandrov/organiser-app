<template>
  <div class="home">
    <h1 class="main-heading">Upcoming Events</h1>
    <event v-for="event in events" :key="event.id" :event="event"></event>
  </div>
</template>

<script>
import Event from "../events/Event";
import eventsService from "../../mixins/eventsService";

export default {
  name: "page-home",

  created() {
    this.getAllEvents();
  },

  data() {
    return {
      events: [],
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
