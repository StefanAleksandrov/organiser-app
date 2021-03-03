<template>
  <div>
    <div class="glass event" v-for="event in events" :key="event.id">
      <h3>Event Name</h3>
      <img :src="event.imgUrl" :alt="event.name"/>
      <router-link tag="button" class="event-btn" :to="`/events/${event.id}/details`">Details</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "event",

  props: ['events'],

  data() {
    return {};
  },
};
</script>

<style scoped>
div.event {
  display: inline-block;
  width: 22.5%;
  height: 400px;
  padding: 0 10px;
  margin: 25px 7.5px 12.5px;
  border-radius: 10px;
  position: relative;
}

div.event h3 {
  margin: 15px 0;
  text-align: center;
  font-size: 20px;
}

div.event p {
  text-align: center;
  margin-bottom: 15px;
}

div.event img {
  width: 100%;
  height: 200px;
  margin: 0 auto;
  border-radius: 5px;
}

div.event button.event-btn {
  width: 90%;
  height: 30px;
  margin: auto;
  background-color: #aa6f8d;
  border-radius: 15px;
  border: none;
  outline: none;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
}

div.event button.event-btn:hover {
  background-color: #553631;
  color: #ecdde3;
  cursor: pointer;
}
</style>
