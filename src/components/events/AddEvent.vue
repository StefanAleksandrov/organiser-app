<template>
  <div class="add-event">
    <div class="left">
      <img
        src="/public/images/DefaultEventImage.jpg"
        alt="Default Event Image"
      />
      <input type="submit" value="Add Avatar" class="form" />
    </div>

    <form action="/add-event" method="POST">
      <label for="name" class="form">Event Name:</label>
      <input type="text" class="form" id="name" />
      <label for="desc" class="form">Event Description:</label>
      <textarea id="desc"></textarea>
      <input type="submit" value="Create" class="form" disabled />
    </form>
  </div>
</template>

<script>
export default {
  name: "add-event",
  data() {
    return {};
  },
};
</script>

<style scoped>
div.add-event {
  margin: 0 auto;
  width: 100%;
}

div.add-event div.left {
  display: inline-block;
  width: 40%;
}

div.add-event div.left img {
  width: 100%;
}

div.add-event div.left input.form {
  width: 100%;
}

div.add-event form {
  display: inline-block;
  width: 59%;
}

div.add-event form .form {
  width: 90%;
  margin-left: auto;
}

div.add-event form textarea {
  display: block;
  background-color: #f5e7ec;
  margin: 0 auto;
  padding: 20px;
  width: 90%;
  height: 75px;
  resize: none;
  outline: none;
  border: 1px solid #703d57;
  border-radius: 20px;
}
</style>
