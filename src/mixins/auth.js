import { auth } from '../config/firebaseInit.js'

export default {
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
      if (this.userPassword == this.userRepassword) {
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
      auth.createUserWithEmailAndPassword(this.userEmail, this.userPassword)
        .then(() => {
          auth.signInWithEmailAndPassword(this.userEmail, this.userPassword)
            .then(({ user }) => {
              localStorage.setItem('userEmail', user.email);
              localStorage.setItem('uid', user.uid);
              this.$root.$emit('log-change');
              this.$root.$emit('notify', "Succesfull registration!");
              this.$router.push("/");
            })
        })
        .catch(err => {
          this.$root.$emit("notify", [err.message, "error"]);
        });
    },

    onLoginClick() {
      auth.signInWithEmailAndPassword(this.userEmail, this.userPassword)
        .then(({ user }) => {
          localStorage.setItem('userEmail', user.email);
          localStorage.setItem('uid', user.uid);
          this.$root.$emit('log-change');
          this.$root.$emit('notify', `Welcome, ${this.userEmail}`);
          this.$router.push("/");
        })
        .catch(err => {
          this.$root.$emit("notify", [err.message, "error"]);
        });
    }
  },
}