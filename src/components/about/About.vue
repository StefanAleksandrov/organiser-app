<template>
  <div :class="classGlass">
    <h1>Your Pocket Organiser!</h1>
    <p>
      Welcome to Organizer web application! With the help of this application
      you can organize your day / event / special occasion easier than ever
      before!
    </p>
    <p>
      By joining our growing community you will gain access to powerfull
      instruments that will make the organisation process like a children's game!
      You can add new events, invite members, open discussions with the option
      of adding suggestions and much more! Our app also supports adding friends,
      private messages, browsing upcomming events and more!
    </p>
    <p>
      If this sounds like the thing you need, we urge you to
      <a href="/register">register</a> now for free!
    </p>
    <p>Already a member? <a href="/login">Login</a> and start organising!</p>
  </div>
</template>

<script>
import animations from "../../mixins/animations";

export default {
  name: "home",

  data() {
    return {};
  },

  mixins: [animations],
};
</script>

<style scoped>
.start {
  width: 50%;
  margin: 500px auto;
  padding: 10px 40px 50px;
  border-radius: 15px;
  transition: all .6s ease-out;
}

.start h1 {
  font-size: 2rem;
  text-align: center;
  margin: 30px 0 50px;
}

.start p {
  font-size: 1.5rem;
  font-size: 18px;
  text-align: justify;
}

.start p a {
  font-weight: 700;
  color: #703d57;
}
</style>
