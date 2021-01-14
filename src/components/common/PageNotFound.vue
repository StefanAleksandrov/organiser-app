<template>
  <div class="not-found">
    <h1>404</h1>
    <p>The page you are looking for is not found.</p>
    <p>This may be because it doesn't exist or it is not published yet.</p>
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
h1 {
  font-size: 120px;
  font-weight: bold;
  color: #402A2C;
  text-align: center;
  margin-top: 100px;
}

p {
  text-align: center;
  font-size: 20px;
}

</style>
