<template>
  <div :class="classGlass">
    <form autocomplete="off" >
      <h1 v-if="$route.params.id" class="main-heading">Update Event</h1>
      <h1 v-else class="main-heading">Create New Event</h1>

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
        >Public Event:</label
      >
      
      <input
        type="checkbox"
        class="form-checkbox"
        id="type"
        v-model="eventIsPublic"
      />

      <input v-if="$route.params.id" type="submit" class="form" value="Update" @click.prevent="updateEvent($route.params.id)" />
      <input v-else type="submit" class="form" value="Create" :disabled="disabled" @click.prevent="createNewEvent" />
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

  created() {
    //if edit event we load the event data
    if (this.$route.params.id) {
      //private event
      if (this.$route.params.uid) {
        this.getEventById(this.$route.params.id, true);

      //public event
      } else {
        this.getEventById(this.$route.params.id);
      }
    }
  },

  data() {
    return {
      eventName: "",
      eventDesc: "",
      eventImgUrl: "",
      eventDate: "",
      eventLocation: '',
      eventIsPublic: false,
      eventMembers: [],
      disabled: true,

      event: {},

      today: new Date(),
      disabledDates: {
        to: new Date(),
      },
    };
  },

  watch: {
    event(newV) {
      if (newV) {
        if (Object.keys(newV).length > 0) {
          this.eventName = newV.name;
          this.eventDesc = newV.desc;
          this.eventImgUrl = newV.imageUrl;
          this.eventDate = newV.date;
          this.eventLocation = newV.location;
          this.eventIsPublic = newV.isPublic;
        }
      }
    },
  },

  components: { "vuejs-datepicker": Datepicker },

  mixins: [eventsService, eventsValidate, animations],
};
</script>

<style scoped>
.form-checkbox {
  display: block;
  margin: 0 auto;
  width: 15px;
  height: 15px;
}

form textarea {
  display: block;
  padding: 20px;
  height: 150px;
  resize: none;
  border-radius: 20px;
}
</style>
