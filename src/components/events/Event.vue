<template>
  <div class="glass event">
    <h3>{{event.name}}</h3>
    <img :src="event.imageUrl" :alt="event.name"/>
    <p><i class="far fa-calendar"></i>{{date}}</p>
    <p><i class="fas fa-map-marker-alt"></i>{{event.eventlocation}}</p>
    <router-link tag="button" class="event-btn" :to="`/events/${event.id}/details`">Details</router-link>
  </div>
</template>

<script>
export default {
  name: "event",

  props: ['event'],

  data() {
    return {
      months: {
        '01': ' Jan ',
        '02': ' Feb ',
        '03': ' Mar ',
        '04': ' Apr ',
        '05': ' May ',
        '06': ' Jun ',
        '07': ' Jul ',
        '08': ' Aug ',
        '09': ' Sep ',
        '10': ' Oct ',
        '11': ' Nov ',
        '12': ' Dec ',
      }
    };
  },

  computed: {
    date: function () {
      let initialDate = this.event.eventDate.split("T")[0];
      let [year, month, day] = initialDate.split("-");

      return day + this.months[month] + year;
    },
  }
};
</script>

<style scoped>
.event {
  display: inline-block;
  width: 22.5%;
  height: 400px;
  padding: 0 10px;
  margin: 25px 7.5px 12.5px;
  border-radius: 10px;
  position: relative;
}

.event h3 {
  margin: 25px 0;
  text-align: center;
  font-size: 20px;
}

.event p {
  text-align: center;
}

.event p i {
  margin-right: 10px;
}

.event img {
  width: 100%;
  height: 200px;
  margin: 0 auto;
  border-radius: 5px;
}
</style>
