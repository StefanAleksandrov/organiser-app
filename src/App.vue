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
    font-weight: 500;
    color: red;
}

/* Main Section */
main {
    width: 75%;
    min-height: 83vh;
    margin: 0 auto;
    padding: 50px;
    background-color: #f5e7ec;
    color: #241715;
}
</style>