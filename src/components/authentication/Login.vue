<template>
  <div class="login">
    <form action="/login" autocomplete="off" method="POST">
      <label for="email" class="form">Email:</label>
      <input type="text" id="email" class="form" />
      <p class="error" id="error-email" style="display: none">Invalid email!</p>
      <label for="loginPassword" class="form">Password:</label>
      <input type="password" id="loginPassword" class="form" />
      <p class="error" id="error-password" style="display: none">
        Invalid password!
      </p>
      <input type="submit" value="Login" class="form" disabled />
    </form>
    <div>Not a member yet? <router-link to="/register">Register</router-link> here!</div>
  </div>
</template>

<script>
export default {
  name: "home",
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

input.form {
    width: 40%;
    height: 35px;
    padding: 0 15px;
    border: 1px solid #703D57;
    border-radius: 999999px;
    background-color: rgba(255, 255, 255, .15);
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
    background-color: #aa6f8d;
}

input.form[type="submit"]:hover {
    cursor: pointer;
    background-color: #402A2C;
    color: #ecdde3;
    font-weight: 700;
}

input.form[type="submit"]:disabled {
    cursor: not-allowed;
}
</style>
