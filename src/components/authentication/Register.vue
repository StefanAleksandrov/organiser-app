<template>
  <div class="register">
    <form action="/login" autocomplete="off" method="POST">
      <label for="email" class="form">Email:</label>
      <input type="text" id="email" class="form" />
      <p class="error" id="error-email" style="display: none">Invalid email!</p>
      <label for="password" class="form">Password:</label>
      <input type="password" id="password" class="form" />
      <p class="error" id="error-password" style="display: none">
        Invalid password!
      </p>
      <label for="password" class="form">Repeat Password:</label>
      <input type="password" id="password" class="form" />
      <p class="error" id="error-password" style="display: none">
        Invalid password!
      </p>
      <input type="submit" value="Register" class="form" disabled />
    </form>
    <div>Already a member? <a href="/login">Login</a> here!</div>
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

<style scoped>
/* .form {
  display: block;
  margin: 10px auto;
  text-align: center;
  outline: none;
}

input.form {
  width: 40%;
  height: 40px;
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
  background-color: #aa6f8d;
}

input.form[type="submit"]:hover {
  cursor: pointer;
  background-color: #402a2c;
  color: #ecdde3;
  font-weight: 700;
}

input.form[type="submit"]:disabled {
  cursor: not-allowed;
} */
</style>
