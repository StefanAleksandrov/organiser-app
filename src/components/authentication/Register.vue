<template>
  <div :class="classGlass">
    <h1 class="main-heading">Create Account</h1>

    <form autocomplete="off" @submit.prevent="onRegisterClick">
      <label
        for="email"
        class="form"
        title="Please enter a valid email address!" >
          Email:
      </label>

      <article class="container">
        <input
          type="text"
          id="email"
          :class="['form', { 'error error-border': emailErrorClass }]"
          v-model="userEmail"
          @change="validateEmail"
          @input="markValid('email')" />

        <i :class="['far fa-envelope fa-lg first', { 'error': emailErrorClass }]" ></i>
      </article>

      <p class="small-text" v-if="emailErrorClass">
        Invalid email, please check the spelling again!
      </p>
      
      <label
        for="username"
        class="form"
        title="Please enter a username!">
          Username:
      </label>

      <article class="container">
        <input
          type="text"
          id="username"
          :class="['form', { 'error error-border': usernameErrorClass }]"
          v-model="username"
          @change="validateUsername"
          @input="markValid('username')"/>

        <i :class="['fas fa-hashtag fa-lg first', { 'error': usernameErrorClass }]" ></i>
      </article>

      <p class="small-text" v-if="usernameErrorClass">
        Username should be 4 symbols or more!
      </p>

      <label
        for="password"
        class="form"
        title="The password should be 6 digits or more!">
          Password:
      </label>

      <article class="container">
        <input
          type="password"
          id="password"
          :class="['form', { 'error error-border': passwordErrorClass }]"
          v-model="userPassword"
          @change="validatePassword"
          @input="markValid('password')"/>

        <i :class="['fas fa-lock fa-lg second', { 'error': passwordErrorClass } ]"></i>
      </article>

      <p class="small-text" v-if="passwordErrorClass">
        Password should be 6 symbols or more!
      </p>

      <label
        for="re-password"
        class="form"
        title="The entered passwords should match!">
          Repeat Password:
      </label>

      <article class="container">
        <input
          type="password"
          id="re-password"
          :class="['form', { 'error error-border': repasswordErrorClass }]"
          v-model="userRepassword"
          @change="validateRepassword"
          @input="markValid('re-password')"/>

        <i :class="['fas fa-lock fa-lg third', { 'error': repasswordErrorClass } ]"></i>
      </article>

      <p class="small-text" v-if="repasswordErrorClass" >
        Passwords don't match!
      </p>

      <input
        type="submit"
        value="Register"
        class="form"
        :disabled="combinedError"
        title="All fields are required!"/>
    </form>

    <div class="bottom">
      Already a member? <router-link to="/login">Login</router-link> here!
    </div>
  </div>
</template>

<script>
import authService from "../../mixins/authService";
import authValidate from "../../mixins/authValidate";
import animations from "../../mixins/animations";

export default {
  name: "Register",

  data() {
    return {};
  },

  methods: {},

  mixins: [authService, authValidate, animations],
};
</script>

<style scoped>
.container {
  position: relative;
  width: 50%;
  margin: 0 auto;
}

.container .form {
  width: 100%;
}

.fas,
.far,
.fab{
  font-size: 20px;
  position: absolute;
  left: 15px;
  top: 10px;
}
</style>