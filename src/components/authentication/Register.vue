<template>
  <div class="register">
    <form autocomplete="off" @submit.prevent="onRegisterClick">
      <label
        for="email"
        class="form"
        :class="{ error: emailErrorClass }"
        title="Please enter a valid email address!"
        >Email:</label
      >
      <input
        type="text"
        id="email"
        class="form"
        :class="{ 'error-border': emailErrorClass }"
        v-model="userEmail"
        @change="validateEmail"
      />
      <p class="error small-text" id="error-email" v-if="emailErrorClass">
        Invalid email, please check the spelling again!
      </p>
      <label
        for="password"
        class="form"
        :class="{ error: passwordErrorClass }"
        title="The password should be 6 digits or more!"
        >Password:</label
      >
      <input
        type="password"
        id="password"
        class="form"
        :class="{ 'error-border': passwordErrorClass }"
        v-model="userPassword"
        @change="validatePassword"
      />
      <p class="error small-text" id="error-password" v-if="passwordErrorClass">
        Password should be 6 symbols or more!
      </p>
      <label
        for="re-password"
        class="form"
        :class="{ 'error': repasswordErrorClass }"
        title="The entered passwords should match!"
        >Repeat Password:</label
      >
      <input
        type="password"
        id="re-password"
        class="form"
        :class="{ 'error-border': repasswordErrorClass }"
        v-model="userRepassword"
        @change="validateRepassword"
      />
      <p class="error small-text" id="error-password" v-if="repasswordErrorClass">
        Passwords don't match!
      </p>
      <input
        type="submit"
        value="Register"
        class="form"
        :disabled="combinedError"
      />
    </form>
    <div>
      Already a member? <router-link to="/login">Login</router-link> here!
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  created() {
    console.log(this.$firebase);
  },
  data() {
    return {
      userEmail: "",
      userPassword: "",
      userRepassword: "",

      emailErrorClass: false,
      passwordErrorClass: false,
      repasswordErrorClass: false,

      emailError: true,
      passwordError: true,
      repasswordError: true,
      combinedError: true,
    };
  },
  methods: {
    validateEmail() {
      let emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

      if (this.userEmail.match(emailRegex) && this.userEmail.length > 5) {
        this.emailError = false;
        this.emailErrorClass = false;
      } else if (this.userEmail !== "") {
        this.emailError = true;
        this.emailErrorClass = true;
      }

      this.checkAllInputs();
    },

    validatePassword() {
      if (this.userPassword.length > 5) {
        this.passwordError = false;
        this.passwordErrorClass = false;
      } else {
        this.passwordError = true;
        this.passwordErrorClass = true;
      }

      this.checkAllInputs();
    },

    validateRepassword() {
      if ( this.userPassword == this.userRepassword ) {
        this.repasswordError = false;
        this.repasswordErrorClass = false;
      } else {
        this.repasswordError = true;
        this.repasswordErrorClass = true;
      }

      this.checkAllInputs();
    },

    checkAllInputs() {
      if (!this.emailError && !this.passwordError && !this.repasswordError) {
        this.combinedError = false;
        return;
      }
      this.combinedError = true;
    },

    onRegisterClick() {
      this.$firebaseAuth.createUserWithEmailAndPassword(this.userEmail, this.userPassword)
        .then((user) => {
          console.log(user);
          this.$router.push("/login");
        })
    }
  },
};
</script>

<style scoped>
</style>