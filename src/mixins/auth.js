import { URL } from '../config/config';
import { auth } from '../config/firebaseInit.js';

export default {
  data() {
    return {
      userEmail: "",
      username: "",
      userPassword: "",
      userRepassword: "",

      emailErrorClass: false,
      usernameErrorClass: false,
      passwordErrorClass: false,
      repasswordErrorClass: false,

      emailError: true,
      usernameError: true,
      passwordError: true,
      repasswordError: true,
      combinedError: true,

      emailRegex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    };
  },
  methods: {
    validateEmail() {
      if (this.userEmail !== "" && (!this.userEmail.match(this.emailRegex) || this.userEmail.length <= 5)) {
        this.emailError = true;
        this.emailErrorClass = true;
        return;
      }

      this.checkAllInputs();
    },

    validateUsername() {
      if (this.username !== "" && this.username.length < 4) {
        this.usernameError = true;
        this.usernameErrorClass = true;
        return;
      }

      this.checkAllInputs();
    },

    validatePassword() {
      if (this.userPassword.length <= 5) {
        this.passwordError = true;
        this.passwordErrorClass = true;
      }

      this.checkAllInputs();
    },

    validateRepassword() {
      if (this.userPassword != this.userRepassword) {
        this.repasswordError = true;
        this.repasswordErrorClass = true;
      }

      this.checkAllInputs();
    },

    checkAllInputs() {
      if (!this.emailError && !this.usernameError && !this.passwordError && !this.repasswordError) {
        this.combinedError = false;
        return;
      }

      this.combinedError = true;
    },

    markValid(field) {
      switch (field) {
        case 'email':
          if (this.userEmail.match(this.emailRegex) && this.userEmail.length > 5) {
            this.emailError = false;
            this.emailErrorClass = false;
          }

          this.checkAllInputs();
          break;
        case 'username':
          if (this.username.length > 3) {
            this.usernameError = false;
            this.usernameErrorClass = false;
          }

          this.checkAllInputs();
          break;
        case 'password':
          if (this.userPassword.length > 5) {
            this.passwordError = false;
            this.passwordErrorClass = false;
          }

          this.checkAllInputs();
          break;
        case 're-password':
          if (this.userPassword == this.userRepassword) {
            this.repasswordError = false;
            this.repasswordErrorClass = false;
          }

          this.checkAllInputs();
          break;
      }
    },

    onRegisterClick() {
      auth.createUserWithEmailAndPassword(this.userEmail, this.userPassword)
        .then(() => {
          auth.signInWithEmailAndPassword(this.userEmail, this.userPassword)
            .then(({ user }) => {
              const newUser = {
                email: user.email,
                username: this.username,
              }

              auth.currentUser.getIdToken(false)
                .then(idToken => {
                  return fetch(URL + `users/${user.uid}.json?auth=${idToken}`, {
                    method: 'PUT',
                    body: JSON.stringify(newUser),
                  });
                })
                .then(resp => resp.json())
                .then(data => console.log(data))
                .catch(err => this.$root.$emit("notify", [err.message, "error"]));

              localStorage.setItem('userEmail', user.email);
              localStorage.setItem('uid', user.uid);
              this.$root.$emit('log-change');
              this.$root.$emit('notify', "Succesfull registration!");
              this.$router.push("/");
            });
        })
        .catch(err => this.$root.$emit("notify", [err.message, "error"]));
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
        .catch(err => this.$root.$emit("notify", [err.message, "error"]));
    }
  },
}