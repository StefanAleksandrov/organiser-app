<template>
  <div :class="classGlass">
    <h1 class="main-heading">Create Account</h1>

    <form autocomplete="off" @submit.prevent="onRegisterClick">
      <label
        for="email"
        :class="['form', { error: emailErrorClass }]"
        title="Please enter a valid email address!"
        >Email:</label
      >

      <input
        type="text"
        id="email"
        :class="['form', { 'error error-border': emailErrorClass }]"
        v-model="userEmail"
        @change="validateEmail"
        @input="markValid('email')"
      />
      <i :class="['far fa-envelope fa-lg first', { 'error': emailErrorClass }]" ></i>


      <p class="error small-text" v-if="emailErrorClass">
        Invalid email, please check the spelling again!
      </p>

      <label
        for="password"
        :class="['form', { error: passwordErrorClass }]"
        title="The password should be 6 digits or more!"
        >Password:</label
      >

      <input
        type="password"
        id="password"
        :class="['form', { 'error error-border': passwordErrorClass }]"
        v-model="userPassword"
        @change="validatePassword"
        @input="markValid('password')"
      />
      <i :class="['fas fa-lock fa-lg second', { 'error': passwordErrorClass } ]"></i>

      <p class="error small-text" v-if="passwordErrorClass">
        Password should be 6 symbols or more!
      </p>

      <label
        for="re-password"
        :class="['form', { error: repasswordErrorClass }]"
        title="The entered passwords should match!"
        >Repeat Password:</label
      >

      <input
        type="password"
        id="re-password"
        :class="['form', { 'error error-border': repasswordErrorClass }]"
        v-model="userRepassword"
        @change="validateRepassword"
        @input="markValid('re-password')"
      />
      <i :class="['fas fa-lock fa-lg third', { 'error': repasswordErrorClass } ]"></i>

      <p class="error small-text" v-if="repasswordErrorClass" >
        Passwords don't match!
      </p>

      <input
        type="submit"
        value="Register"
        class="form"
        :disabled="combinedError"
      />
    </form>

    <div class="bottom">
      Already a member? <router-link to="/login">Login</router-link> here!
    </div>
  </div>
</template>

<script>
import authMixin from "../../mixins/auth";

export default {
  name: "home",

  mounted() {
    setTimeout(function () {
      this.classGlass += ' animate';
    }.bind(this), 1)
  },

  mixins: [authMixin],

  data() {
    return {
      classGlass: 'glass auth',
    };
  },

  methods: {},
};
</script>

<style scoped>
.fas,
.far,
.fab{
  font-size: 20px;
  position: absolute;
  left: 215px;
}

.first {
  top: 164px;
}

.second {
  top: 272px;
}

.third {
  top: 380px;
}
</style>