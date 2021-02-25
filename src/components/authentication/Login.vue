<template>
  <div :class="classGlass">
    <h1 class="main-heading">Login with your Account</h1>

    <div class="login">
      <form autocomplete="off" @submit.prevent="onLoginClick">
        <label for="email" class="form" :class="{ error: emailErrorClass }">
          Email:
        </label>

        <input
          type="text"
          id="email"
          class="form"
          v-model.lazy="userEmail"
          :class="{ 'error-border': emailErrorClass }"
          @change="validateEmail"
        />
        <i class="far fa-envelope fa-lg first"></i>

        <p class="error" id="error-email" v-if="emailErrorClass">
          Invalid email!
        </p>

        <label
          for="loginPassword"
          class="form"
          :class="{ error: passwordErrorClass }"
          >Password:
        </label>

        <input
          type="password"
          id="loginPassword"
          class="form"
          :class="{ 'error-border': passwordErrorClass }"
          v-model.lazy="userPassword"
          @change="validatePassword"
        />
        <i class="fas fa-lock fa-lg second"></i>

        <p class="error" id="error-password" v-if="passwordErrorClass">
          Invalid password!
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

export default {
  name: "home",

  mounted() {
    setTimeout(function () {
      this.classGlass += ' animate';
    }.bind(this), 1)
  },

  mixins: [authMixin],

  created() {
    this.repasswordError = false;
  },

  data() {
    return {
      classGlass: 'glass auth',
    };
  },
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
