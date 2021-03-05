<template>
  <div :class="classGlass">
    <h1 class="main-heading">Get in touch with us!</h1>

    <div class="contacts">
      <form autocomplete="off" @submit.prevent="sendMessage">
        <label for="email" class="form">Your Email:</label>
        <input
          type="text"
          id="email"
          class="form"
          @input="validate"
          v-model="email"
        />
        <label for="topic" class="form">Topic:</label>
        <input
          type="text"
          id="topic"
          class="form"
          @input="validate"
          v-model="topic"
        />
        <label for="message" class="form">Message:</label>
        <textarea
          id="message"
          class="form"
          @input="validate"
          v-model="message"
        ></textarea>
        <input type="submit" value="Send" class="form" :disabled="disabled" />
      </form>

      <div class="bottom">
        You have a question regarding our web app? Please check our
        <router-link to="/questions-and-answers">Q&amp;A section</router-link>
        for answers first!
      </div>
    </div>
  </div>
</template>

<script>
import animations from "../../mixins/animations";

export default {
  name: "home",
  
  mixins: [animations],

  created() {
    //Check if logged in
    if (this.$parent.isLoggedIn) {
      this.email = localStorage.getItem("userEmail") || '';
    }
  },

  data() {
    return {
      email: "",
      topic: "",
      message: "",
      disabled: true,
    };
  },

  methods: {
    sendMessage() {
      //TODO send the message with its corresponding topic and email

      this.email = "";
      this.topic = "";
      this.message = "";
    },

    validate() {
      if (this.email && this.topic && this.message) {
        this.disabled = false;
      }
    },
  },
};
</script>

<style scoped>
textarea.form {
  padding: 20px;
  width: 50%;
  height: 100px;
  resize: none;
  outline: none;
  border-radius: 20px;
  text-align: justify;
}
</style>
