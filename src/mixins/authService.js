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
              localStorage.setItem('username', this.username);
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

          return fetch(URL + `/users/${user.uid}.json`);
        })
        .then (resp => resp.json())
        .then(data => {
          localStorage.setItem('username', data.username);
          this.$root.$emit('log-change');
          this.$root.$emit('notify', `Welcome, ${data.username}`);
          this.$router.push("/");
        })
        .catch(err => this.$root.$emit("notify", [err.message, "error"]));
    }
  },
}