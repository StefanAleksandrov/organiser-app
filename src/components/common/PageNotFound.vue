<template>
  <div :class="classGlass">
      <h1>404</h1>
      <i class="far fa-sad-cry fa-10x"></i>
      <p>The page you are looking for was not found.</p>
      <p>This may be because it doesn't exist or it is not published yet.</p>
      <div class="bottom">If you are sure this page exists, please try again later!</div>
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
.not-found {
  width: 75%;
  margin: 500px auto;
  padding: 1px 50px;
  border-radius: 15px;
}

h1 {
  padding: 50px 0 0;
  font-size: 60px;
  font-weight: bold;
  color: #402a2c;
  text-align: center;
  opacity: 0.75;
}

p {
  text-align: center;
  font-size: 20px;
}

p:last-of-type {
  margin-bottom: 100px;
}

.fas,
.far,
.fab {
  margin-bottom: 50px;
  width: 100%;
}
</style>
