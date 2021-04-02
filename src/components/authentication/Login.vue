<template>
  <div :class="classGlass">
    <h1 class="main-heading">Login with your Account</h1>

    <div class="login">
      <form autocomplete="off" @submit.prevent="onLoginClick">
        <label for="email" class="form">
          Email:
        </label>

        <article class="container">
          <input
            type="text"
            id="email"
            v-model="userEmail"
            :class="['form', { 'error error-border': emailErrorClass }]"
            @change="validateEmail"
            @input="markValid('email')"/>

          <i :class="['far fa-envelope fa-lg first', { 'error': emailErrorClass } ]"></i>
        </article>

        <p class="small-text" v-if="emailErrorClass">
          Invalid email, please check the spelling again!
        </p>

        <label for="loginPassword" class="form" >
          Password:
        </label>

        <article class="container">
          <input
            type="password"
            id="loginPassword"
            :class="['form', { 'error error-border': passwordErrorClass }]"
            v-model="userPassword"
            @change="validatePassword"
            @input="markValid('password')"/>

          <i :class="['fas fa-lock fa-lg second', { 'error': passwordErrorClass }]"></i>
        </article>

        <p class="small-text" id="error-password" v-if="passwordErrorClass">
          Password should be 6 symbols or more!
        </p>

        <input
          type="submit"
          value="Login"
          class="form"
          :disabled="combinedError"
          title="All fields are required!"/>
      </form>

      <div class="bottom">
        Not a member yet?
        <router-link to="/register">Register</router-link> here!
      </div>

    </div>
  </div>
</template>

<script>
import authService from "../../mixins/authService";
import authValidate from "../../mixins/authValidate";
import animations from "../../mixins/animations";

export default {
  name: "Login",

  created() {
    this.usernameError = false;
    this.repasswordError = false;
  },

  data() {
    return {};
  },

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
  position: absolute;
  left: 15px;
  top: 10px;
}
</style>
