<template>
  <div :class="classGlass">
    <form autocomplete="off" @submit.prevent="createNewEvent">
      <h1 class="main-heading">Create New Event</h1>

      <label for="name" class="form">Event Name:</label>
      <input type="text" class="form" id="name" v-model="eventName" />

      <label for="desc" class="form">Event Description:</label>
      <textarea class="form" id="desc" v-model="eventDesc" ></textarea>

      <label for="imageUrl" class="form">Event Image URL:</label>
      <input type="text" class="form" id="imageUrl" v-model="eventImgUrl" />

      <label for="" class="form">Pick a Date</label>
      <vuejs-datepicker
        input-class="form"
        calendar-class="calendar"
        v-model="eventDate"
        :monday-first="true"
        :typeable="true"
        :open-date="today"
        :disabled-dates="disabledDates"
        placeholder="DD MM YYYY" >
      </vuejs-datepicker>

      <label for="type" class="form" title="Select 'Open event' to let people join the team.">Private Event:</label>
      <input type="checkbox" class="form-checkbox" id="type" v-model="eventIsPrivate" />

      <input type="submit" class="form" value="Create" :disabled="disabled" />
    </form>

    <div class="bottom"></div>
  </div>
</template>

<script>
import eventsService from '../../mixins/eventsService';
import eventsValidate from '../../mixins/eventsValidate';
import Datepicker from 'vuejs-datepicker';

export default {
  name: "add-event",

  mounted() {
    setTimeout(function () {
      this.classGlass += ' animate';
    }.bind(this), 1)
  },

  data () {
    return {
      eventName: "",
      eventDesc: "",
      eventImgUrl: '',
      eventDate: "",
      eventIsPrivate: false,
      eventCreator: "",
      eventModerators: [],
      eventMembers: [],
      disabled: true,

      classGlass: 'glass add-event',

      today: new Date(),
      disabledDates: {
        to: new Date(),
      }
    };
  },

  components: { 'vuejs-datepicker': Datepicker },

  mixins: [eventsService, eventsValidate],
};
</script>

<style scoped>
.add-event {
  margin: 500px auto;
  width: 50%;
  border-radius: 15px;
  transition: all .6s ease-out;
}

.form-checkbox {
  display: block;
  margin: 0 auto;
}

.add-event form textarea {
  display: block;
  padding: 20px;
  height: 150px;
  resize: none;
  border-radius: 20px;
}
</style>
