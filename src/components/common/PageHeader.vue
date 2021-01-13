<template>
  <div class="header">
    <div class="container">
      <a href="/"><span>O</span>RGANISER APP</a>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/contacts">Contacts</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/add-event">Add Event</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-header",
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Header */
div.header {
    width: 100%;
    background-color: #402A2C;
}

div.header div.container {
    height: 7vh;
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
    padding-top: 15px;
    text-align: center;
}

div.header ul li {
    display: inline-block;
    width: 85px;
    padding: 5px;
}

div.header ul li:last-of-type {
    border: none;
    margin-right: 10px;
}

div.header ul li:hover {
    background-color: rgba(200, 200, 200, 0.5);
    cursor: pointer;
}

div.header ul li a{
    text-align: center;
    text-decoration: none;
    color: #ecdde3;
}
</style>
