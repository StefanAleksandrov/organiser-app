<template>
  <div id="app">
    <page-header :logged="isLoggedIn"/>
    <main>
      <router-view/>
    </main>
    <page-footer/>
  </div>
</template>

<script>
import PageHeader from "./components/common/PageHeader";
import PageFooter from "./components/common/PageFooter";

export default {
  components: {
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      isLoggedIn : false,
    }
  }
}
</script>

<style>
*, *::before, *::after {
    box-sizing: border-box;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
}

body {
    margin: 0;
    padding: 0;
    color: #241715;
}

.error {
    text-align: center;
    color: red;
}

.small-text {
  font-size: 12px;
  font-style: italic;
  margin: 0;
}

.error-border {
  background-color: rgb(255, 211, 211) !important;
  border: 1px solid red !important;
  color: red;
}

/* Main Section */
main {
    width: 75%;
    min-height: calc(100vh - 110px);
    margin: 0 auto;
    padding: 30px;
    background-color: #f5e7ec;
    color: #241715;
}
</style>