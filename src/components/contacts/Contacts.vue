<template>
  <div :class="classGlass">
    <h1 class="main-heading">Get in touch with us!</h1>

    <div class="contacts">
      <form autocomplete="off" @submit.prevent="createNewMessage">
        <label for="email" class="form">Your Email:</label>
        <input
          type="text"
          id="email"
          :class="disabledEmailInput ? 'disabled-form form' : 'form'"
          @input="validate"
          v-model="email"
          :disabled="disabledEmailInput"/>

        <label for="topic" class="form">Topic:</label>
        <input
          type="text"
          id="topic"
          class="form"
          @input="validate"
          v-model="topic"/>

        <label for="message" class="form">Message:</label>
        <textarea
          id="message"
          class="form"
          @input="validate"
          v-model="message"></textarea>

        <input
          type="submit"
          value="Send"
          class="form"
          :disabled="disabledSubmit"
          title="All fields are required!"/>
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
import contactsService from "../../mixins/contactsService";

export default {
  name: "Contacts",

  created() {
    //Check if logged in
    if (this.$parent.isLoggedIn) {
      this.email = localStorage.getItem("userEmail") || "";
      this.disabledEmailInput = true;
    }
  },

  data() {
    return {
      email: "",
      topic: "",
      message: "",
      disabledSubmit: true,
      disabledEmailInput: false,
    };
  },

  methods: {
    validate() {
      if (this.email && this.topic && this.message) {
        this.disabledSubmit = false;
      }
    },
  },

  mixins: [animations, contactsService],
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

.disabled-form {
  cursor: not-allowed;
  background-color: rgba(125, 125, 125, 0.5);
  color: #402a2c;
}
</style>
