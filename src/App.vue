<template>
  <div id="app">
    <page-header :logged="isLoggedIn" />
    <notification
      v-if="notificationMessage"
      :message="notificationMessage"
      :type="notificationType"
    ></notification>
    <main>
      <div class="background"></div>
      <div class="content">
        <router-view :key="$route.path" />
      </div>
    </main>
    <page-footer />
  </div>
</template>

<script>
import PageHeader from "./components/common/PageHeader";
import PageFooter from "./components/common/PageFooter";
import Notification from "./components/common/Notification";

export default {
  components: {
    PageHeader,
    PageFooter,
    Notification,
  },
  created () {
    if (localStorage.getItem("uid") !== null) {
      this.isLoggedIn = true;
    }

    this.$root.$on("log-change", this.onLogChange);
    this.$root.$on("notify", this.onNotify);
  },
  data () {
    return {
      isLoggedIn: false,
      notificationMessage: "",
      notificationType: "",
    };
  },
  methods: {
    onLogChange () {
      if ( localStorage.getItem("uid") !== null && localStorage.getItem("userEmail") !== null ) {
        this.isLoggedIn = true;

      } else {
        this.isLoggedIn = false;
        this.$router.go('/');
      }
    },
    onNotify ( args ) {
      if (args instanceof Array) {
        this.notificationMessage = args[0];
        this.notificationType = args[1];
      } else {
        this.notificationMessage = args;
      }

      setTimeout (() => {
        this.notificationMessage = "";
        this.notificationType = "";
      }, 3000);
    },
  },
};
</script>

<style>
</style>