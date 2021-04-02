<template>
  <div :class="classGlass">
      <h1>Page Under Construction</h1>
      <i class="fas fa-tools fa-10x"></i>
      <p>The page you are looking for is not published yet.</p>
      <div class="bottom">Please try again later!</div>
  </div>
</template>

<script>
import animations from "../../mixins/animations";

export default {
  name: "PageUnderConstruction",

  data() {
    return {};
  },

  mixins: [animations],
};
</script>

<style scoped>
h1 {
  padding: 50px 0 0;
  font-size: 40px;
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
  margin-bottom: 50px;
}

.fas,
.far,
.fab,
.fa {
  margin: 50px 0;
  width: 100%;
}
</style>
