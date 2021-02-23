<template>
  <div class="footer">
    <div class="container">
      <p class="single-line">&reg;<span> All Rights Reserved</span> </p>
      <p class="single-line">Location: <span>Sofia, Bulgaria</span> </p>
      <p class="single-line">Email: <span>arh.inj.aleksandrov@abv.bg</span> </p>
      <p class="single-line">Phone: <span>+359 884 760 360</span> </p>
    </div>
    <!-- <p><span>All Rights Reserved</span> &reg;</p> -->
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
  /* color: #ecdde3; */
  user-select: none;
}

div.footer p.single-line {
  display: inline-block;
  width: 25%;
  text-align: center;
  user-select: none;
}

div.footer div.container {
  width: 90%;
  margin: 0 auto;
}

div.footer p span {
  font-weight: 700;
  /* color: #f5e7ec; */
  user-select: all;
}
</style>
