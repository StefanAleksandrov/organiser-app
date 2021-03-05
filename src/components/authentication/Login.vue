<template>
  <div :class="classGlass">
    <h1 class="main-heading">Login with your Account</h1>

    <div class="login">
      <form autocomplete="off" @submit.prevent="onLoginClick">
        <label for="email" class="form">
          Email:
        </label>

        <input
          type="text"
          id="email"
          v-model="userEmail"
          :class="['form', { 'error error-border': emailErrorClass }]"
          @change="validateEmail"
          @input="markValid('email')"
        />

        <i :class="['far fa-envelope fa-lg first', { 'error': emailErrorClass } ]"></i>

        <p class="small-text" v-if="emailErrorClass">
          Invalid email, please check the spelling again!
        </p>

        <label for="loginPassword" class="form" >
          Password:
        </label>

        <input
          type="password"
          id="loginPassword"
          :class="['form', { 'error error-border': passwordErrorClass }]"
          v-model="userPassword"
          @change="validatePassword"
          @input="markValid('password')"
        />

        <i :class="['fas fa-lock fa-lg second', { 'error': passwordErrorClass }]"></i>

        <p class="small-text" id="error-password" v-if="passwordErrorClass">
          Password should be 6 symbols or more!
        </p>

        <input
          type="submit"
          value="Login"
          class="form"
          :disabled="combinedError"
        />
      </form>

      <div class="bottom">
        Not a member yet?
        <router-link to="/register">Register</router-link> here!
      </div>

    </div>
  </div>
</template>

<script>
import authMixin from "../../mixins/auth";
import animations from "../../mixins/animations";

export default {
  name: "home",

  created() {
    this.repasswordError = false;
  },

  data() {
    return {};
  },

  mixins: [authMixin, animations],
};
</script>

<style scoped>
.fas,
.far,
.fab{
  position: absolute;
  left: 215px;
}

.first {
  top: 164px;
}

.second {
  top: 272px;
}
</style>
