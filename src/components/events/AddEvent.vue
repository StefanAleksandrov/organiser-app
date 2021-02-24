<template>
  <div class="glass add-event">
    <form autocomplete="off" @submit.prevent="createNewEvent">
      <h1 class="main-heading">Create New Event</h1>

      <label for="name" class="form">Event Name:</label>
      <input type="text" class="form" id="name" v-model="eventName" />

      <label for="desc" class="form">Event Description:</label>
      <textarea class="form" id="desc" v-model="eventDesc" ></textarea>

      <label for="imageUrl" class="form">Event Image URL:</label>
      <input type="text" class="form" id="imageUrl" v-model="eventImgUrl" />

      <label for="type" class="form" title="Select 'Open event' to let people join the team.">Open Event:</label>
      <input type="checkbox" class="form-checkbox" id="type" v-model="eventIsOpen" />

      <input type="submit" class="form" value="Create" :disabled="disabled" />
    </form>

    <div class="bottom"></div>
  </div>
</template>

<script>
import eventsService from '../../mixins/eventsService';
import eventsValidate from '../../mixins/eventsValidate';

export default {
  name: "add-event",

  data () {
    return {
      eventName: "",
      eventImgUrl: '',
      eventDesc: "",
      eventCreator: "",
      eventModerators: [],
      eventMembers: [],
      eventIsOpen: "",
      eventDate: "",
      disabled: true,
    };
  },

  mixins: [eventsService, eventsValidate],
};
</script>

<style scoped>
.add-event {
  margin: 50px auto;
  width: 50%;
  border-radius: 15px;
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
