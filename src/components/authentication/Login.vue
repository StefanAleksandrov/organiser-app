<template>
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
      Not a member yet? <router-link to="/register">Register</router-link> here!
    </div>
  </div>
</template>

<script>
import authMixin from "../../mixins/auth";

export default {
  name: "home",
  mixins: [authMixin],
  created() {
    this.repasswordError = false;
  },
  data() {
    return {};
  },
};
</script>

<style>
.form {
  display: block;
  margin: 10px auto;
  text-align: center;
  outline: none;
}

input.form,
select.form {
  width: 50%;
  height: 35px;
  padding: 0 15px;
  border: 1px solid #703d57;
  border-radius: 999999px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
}

input.form:last-of-type {
  margin: 50px auto;
}

label.form:nth-of-type(2),
label.form:nth-of-type(3) {
  margin-top: 25px;
}

div.login div,
div.register div {
  text-align: center;
  font-size: 14px;
}

input.form[type="submit"] {
  background-color: rgba(200, 200, 200, 0.5);
}

input.form[type="submit"]:hover {
  cursor: pointer;
  background-color: #402a2c;
  color: #ecdde3;
  font-weight: 700;
}

input.form[type="submit"]:disabled {
  cursor: not-allowed;
  background-color: rgba(125, 125, 125, 0.5);
  color: #402a2c;
}

div.bottom {
  text-align: center;
  padding-bottom: 50px;
}
</style>
