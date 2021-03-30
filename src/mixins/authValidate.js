export default {
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
  },
}