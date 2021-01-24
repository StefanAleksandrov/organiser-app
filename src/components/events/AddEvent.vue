<template>
  <div class="add-event">
    <div class="left">
      <img
        src="../../../public/images/DefaultEventImage.jpg"
        alt="Default Event Image"
      />
      <input type="submit" value="Add Avatar" class="form" />
    </div>

    <form autocomplete="off">
      <label for="name" class="form">Event Name:</label>
      <input type="text" class="form" id="name" v-model="eventName" />
      <label for="desc" class="form">Event Description:</label>
      <textarea id="desc" v-model="eventDesc" ></textarea>
      <label for="type" class="form" title="Select 'Open event' to let people join the team.">Select event type:</label>
      <select name="event-type" id="type" v-model="isOpen" class="form" >
        <option :value="true" >Open event</option>
        <option :value="false" >Closed event</option>
      </select>
      <input type="submit" value="Create" class="form" disabled />
    </form>
  </div>
</template>

<script>
export default {
  name: "add-event",
  data() {
    return {
      eventName: "",
      eventDesc: "",
      creator: "",
      moderators: [],
      members: [],
      isOpen: "Select Option",
      eventDate: "",
      createdAt: "",
      modifiedAt: "",
    };
  },
};
</script>

<style scoped>
.add-event {
  margin: 50px auto;
  width: 100%;
}

.add-event .left {
  display: inline-block;
  width: 40%;
}

.add-event .left img {
  width: 100%;
}

.add-event .left input.form {
  width: 100%;
}

.add-event form {
  display: inline-block;
  width: 59%;
}

.add-event form .form {
  width: 90%;
  margin-left: auto;
}

.add-event form textarea {
  display: block;
  background-color: #f5e7ec;
  margin: 0 auto;
  padding: 20px;
  width: 90%;
  height: 150px;
  resize: none;
  outline: none;
  border: 1px solid #703d57;
  border-radius: 20px;
}
</style>
