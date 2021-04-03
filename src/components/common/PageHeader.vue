<template>
  <div class="header">
    <div class="container">
      <router-link to="/"><span>O</span>RGANISER APP</router-link>
      <ul>
        <template v-if="logged">
          <li><router-link to="/contacts">Contacts</router-link></li>
          <li><router-link to="/add-event">Add Event</router-link></li>
          <li><router-link to="/profile" style="textTransform: capitalize;">{{$parent.username}}</router-link></li>
          <li><a @click.prevent="onLogoutClick()" >Logout</a></li>
        </template>

        <template v-else>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/register">Register</router-link></li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import authService from '../../mixins/authService';

export default {
  name: "PageHeader",

  mixins: [authService],

  props: {
    logged: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  background-image: url('../../assets/images/header-img.jpg');
  background-size: cover;
}

.header .container {
  height: 425px;
  width: 75%;
  padding: 25px 50px;
  margin: 0 auto;
}

.header .container > a {
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: #f5ecf0;
  font-family: monospace;
}

.header .container > a > span {
  font-size: 35px;
  font-family: sans-serif;
}

.header ul {
  float: right;
  text-align: center;
}

.header ul li {
  display: inline-block;
}

.header ul li a:last-of-type {
  border: none;
  margin-right: 10px;
}

.header ul li a:hover {
  text-decoration: underline;
  cursor: pointer;
}

.header ul li a {
  text-align: center;
  text-decoration: none;
  color: #ecdde3;
  min-width: 90px;
  padding: 5px;
}
</style>
