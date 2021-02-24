<template>
  <div class="footer">
    <div class="container">
      <p class="single-line">&reg;<span> All Rights Reserved</span> </p>
      <p class="single-line">Location: <span>Sofia, Bulgaria</span> </p>
      <p class="single-line">Email: <span><a href="mailto: arh.inj.aleksandrov@abv.bg">arh.inj.aleksandrov@abv.bg</a></span> </p>
      <p class="single-line">Phone: <span>+359 884 760 360</span> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-footer",
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Footer */
div.footer {
  width: 100%;
  height: 125px;
  padding-top: 25px;
  background: rgb(225, 225, 225);
  box-shadow: -3px 0 10px rgba(0, 0, 0, 0.1);
}

div.footer p {
  text-align: center;
  padding-top: 25px;
  margin: 0;
}

div.footer p.single-line {
  display: inline-block;
  width: 25%;
  text-align: center;
}

div.footer div.container {
  width: 90%;
  margin: 0 auto;
}

div.footer p span {
  font-weight: 700;
}

div.footer p span a {
  text-decoration: none;
  color: rgb(85, 54, 49);
}
</style>
