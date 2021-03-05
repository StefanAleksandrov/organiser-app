<template>
  <div :class="classGlass">
    <form autocomplete="off" @submit.prevent="createNewEvent">
      <h1 class="main-heading">Create New Event</h1>

      <label
        for="name"
        :class="['form', nameErr ? 'error' : '']"
        title="Event name should be between 5 and 25 symbols!"
        >Event Name:</label
      >
      <input
        type="text"
        :class="['form', nameErr ? 'error error-border' : '']"
        id="name"
        v-model="eventName"
        @change="validateEventName"
      />

      <label
        for="desc"
        :class="['form', descErr ? 'error' : '']"
        title="Event name should be between 10 and 100 symbols!"
        >Event Description:</label
      >
      <textarea
        :class="['form', descErr ? 'error error-border' : '']"
        id="desc"
        v-model="eventDesc"
        @change="validateEventDesc"
      ></textarea>

      <label
        for="imageUrl"
        :class="['form', imgErr ? 'error' : '']"
        title="Please provide a valid URL!"
        >Event Image URL:</label
      >
      <input
        type="text"
        :class="['form', imgErr ? 'error error-border' : '']"
        id="imageUrl"
        v-model="eventImgUrl"
        @change="validateEventImgUrl"
      />

      <label
        :class="['form', dateErr ? 'error' : '']"
        title="Please pick a date!"
        >Pick a Date</label
      >
      <vuejs-datepicker
        :input-class="['form', dateErr ? 'error error-border' : '']"
        calendar-class="calendar"
        v-model="eventDate"
        :monday-first="true"
        :typeable="true"
        :open-date="today"
        :disabled-dates="disabledDates"
        placeholder="DD MM YYYY"
        @input="validateEventDate"
      >
      </vuejs-datepicker>

      <label
        for="location"
        :class="['form', locationErr ? 'error' : '']"
        title="Location should be between 5 and 50 symbols!"
        >Event Location:</label
      >
      <input
        type="text"
        :class="['form', locationErr ? 'error error-border' : '']"
        id="location"
        v-model="eventLocation"
        @change="validateEventLocation"
      />

      <label
        for="type"
        class="form"
        title="Select 'Open event' to let people join the team."
        >Private Event:</label
      >
      <input
        type="checkbox"
        class="form-checkbox"
        id="type"
        v-model="eventIsPrivate"
      />

      <input type="submit" class="form" value="Create" :disabled="disabled" />
    </form>

    <div class="bottom"></div>
  </div>
</template>

<script>
import eventsService from "../../mixins/eventsService";
import eventsValidate from "../../mixins/eventsValidate";
import animations from "../../mixins/animations";
import Datepicker from "vuejs-datepicker";

export default {
  name: "add-event",

  mounted() {
    this.getEventById();
  },

  data() {
    return {
      eventName: "",
      eventDesc: "",
      eventImgUrl: "",
      eventDate: "",
      eventIsPrivate: false,
      eventCreator: "",
      eventModerators: [],
      eventMembers: [],
      eventLocation: '',
      disabled: true,

      today: new Date(),
      disabledDates: {
        to: new Date(),
      },
    };
  },

  components: { "vuejs-datepicker": Datepicker },

  mixins: [eventsService, eventsValidate, animations],
};
</script>

<style scoped>
.add-event {
  margin: 500px auto;
  width: 50%;
  border-radius: 15px;
  transition: all 0.6s ease-out;
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
