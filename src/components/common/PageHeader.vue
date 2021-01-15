<template>
  <div class="header">
    <div class="container">
      <router-link to="/"><span>O</span>RGANISER APP</router-link>
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contacts">Contacts</router-link></li>

        <template v-if="logged">
          <li><router-link to="/add-event">Add Event</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
          <li><a @click="onLogout" >Logout</a></li>
        </template>

        <template v-else>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/register">Register</router-link></li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-header",
  props: ["logged"],
  data() {
    return {};
  },
  methods: {
    onLogout() {
      localStorage.removeItem('userEmail');
      localStorage.removeItem('uid');
      this.$root.$emit("log-change");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
/* Header */
div.header {
  width: 100%;
  background-color: #402a2c;
}

div.header div.container {
  height: 50px;
  width: 75%;
  padding: 0 50px;
  margin: 0 auto;
}

div.header div.container > a {
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: #ecdde3;
  font-family: monospace;
}

div.header div.container > a > span {
  font-size: 40px;
  font-weight: 700;
  color: #ecdde3;
  font-family: monospace;
}

div.header ul {
  float: right;
  text-align: center;
}

div.header ul li {
  display: inline-block;
}

div.header ul li a:last-of-type {
  border: none;
  margin-right: 10px;
}

div.header ul li a:hover {
  background-color: rgba(200, 200, 200, 0.5);
  cursor: pointer;
}

div.header ul li a {
  text-align: center;
  text-decoration: none;
  color: #ecdde3;
  min-width: 90px;
  padding: 5px;
}
</style>
