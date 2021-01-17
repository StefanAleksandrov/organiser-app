<template>
  <div id="app">
    <page-header :logged="isLoggedIn" />
    <notification v-if="notificationMessage" :message="notificationMessage" :type="notificationType"></notification>
    <main>
      <router-view />
    </main>
    <page-footer />
  </div>
</template>

<script>
import PageHeader from "./components/common/PageHeader"
import PageFooter from "./components/common/PageFooter"
import Notification from "./components/common/Notification"

export default {
  components: {
    PageHeader,
    PageFooter,
    Notification,
  },
  created() {
    if (localStorage.getItem("uid") !== null) {
      this.isLoggedIn = true;
    }

    this.$root.$on("log-change", this.onLogChange);
    this.$root.$on("notify", this.onNotify);
  },
  data() {
    return {
      isLoggedIn: false,
      notificationMessage: "",
      notificationType: "",
    };
  },
  methods: {
    onLogChange() {
      if (localStorage.getItem("uid") !== null && localStorage.getItem("userEmail") !== null) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    },
    onNotify(args) {
      this.notificationMessage = args[0];
      this.notificationType = args[1];

      setTimeout(() => {
        this.notificationMessage = "";
        this.notificationType = "";
      }, 2000);
    },
  },
};
</script>

<style>
*,
*::before,
*::after {
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