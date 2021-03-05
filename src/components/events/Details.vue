<template>
  <div :class="classGlass">
    <h1 class="main-heading">{{event.eventName}}</h1>

    <article class="container">
        <img :src="event.imageUrl" alt="event.eventName">
    </article>

    <article class="container">
        <h3 class="description">{{event.eventDesc}}</h3>
        <p class="block" >Location: {{event.eventLocation}} </p>
        <time class="block" > Date: {{event.eventDate}} </time>
    </article>
  </div>
</template>

<script>
import eventsService from '../../mixins/eventsService';
import animations from '../../mixins/animations';

export default {
  name: "event-details",

  created() {
      this.getEventById(this.$route.params.id)
  },

  data() {
    return {
        event: {},
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
</style>
