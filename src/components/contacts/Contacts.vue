<template>
  <div class="contacts">
    <form action="/send-message" autocomplete="off" method="POST">
      <label for="topic" class="form">Topic:</label>
      <input type="text" id="topic" class="form" />
      <label for="message" class="form">Message:</label>
      <textarea id="message" class="form-text-area"></textarea>
      <input type="submit" value="Send" class="form" disabled />
    </form>
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
.form-text-area {
    display: block;
    background-color: #f5e7ec;
    margin: 0 auto;
    padding: 20px;
    width: 40%;
    height: 160px;
    resize: none;
    outline: none;
    border: 1px solid #703D57;
    border-radius: 20px;
}
</style>
