<template>
  <div :class="classGlass">
    <h1>Your Pocket Organiser!</h1>
    <h2>Organise your <span>{{eventMsg}}</span></h2>
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

  created() {
    this.typing();
  },

  data() {
    return {
      events: ["Birthday Party", "Wedding", 'Vacation', 'Special Occasion', "Custom Event"],
      eventMsg: '',
      wordIndex: 0,
      letterIndex: 0,
    };
  },

  methods: {
    typing() {
      if (this.wordIndex === this.events.length) this.wordIndex = 0;

      this.eventMsg = this.events[this.wordIndex].slice(0, ++this.letterIndex);

      if (this.letterIndex === this.events[this.wordIndex].length) {
        this.wordIndex++;
        this.letterIndex = 0;
        setTimeout(this.typing, 750);

      } else {
        setTimeout(this.typing, 150);
      }

    },
  },

  mixins: [animations],
};
</script>

<style scoped>
.start h1 {
  font-size: 2rem;
  text-align: center;
  margin: 30px 0 50px;
}

.start h2 {
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 50px;
}

.start h2 span {
  display: block;
  font-size: 1.5rem;
  position: relative;
  top: 10px;
}

.start h2 span::after {
  content: '';
  border: 2px solid;
  animation: blink 0.4s infinite ease;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
