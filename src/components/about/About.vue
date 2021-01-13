<template>
  <div class="about">
            <h1>Your Pocket Organiser!</h1>
            <p>Welcome to Organiser web application! With the help of this application you can organise your day / event / special occasion easier than ever before! By joining our growing community you will gain access to powerfull instruments that will make the organisation process like a children game! You can add new events, invite members, open discussions with the option of adding suggestions and much more! Our app also supports adding friends, private messages, browsing upcomming events and more!</p>
            <p>If this sounds like the thing you need, we urge you to <a href="/register">register</a> now for free!</p>
            <p>Already a member? <a href="/login">Login</a> and start organising!</p>
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
div.about p {
    font-size: 18px;
    margin-bottom: 10px;
    text-align: justify;
}

div.about p a {
    font-weight: 700;
    color: #703D57;
}
</style>
