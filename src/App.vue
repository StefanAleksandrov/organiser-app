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
        <router-view />
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
  color: #553631;
  /* color: #B47D99; */
}

/*NOTIFICATIONS */
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
  width: 100%;
  min-height: calc(100vh - 360px);
  margin: 0 auto;
  padding: 30px 150px;
  position: relative;
  overflow: hidden;
}

main div.content {
  z-index: 2;
}

main div.background {
  background-image: url("../public/images/app-bg-6.jpg");
  opacity: 0.5;
  height: 2000px;
  background-position: center;
  background-repeat: repeat-y;
  background-size: contain;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, -30%);
  z-index: -2;
}

h1.main-heading {
  margin: 50px 0 30px;
  width: 100%;
  display: inline-block;
  font-size: 26px;
  text-align: center;
}

/*GLASS */
div.glass {
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.5px);
  box-shadow: -2px -2px 2px rgba(0, 0, 0, 0.1), 3px 3px 2px rgba(0, 0, 0, 0.1);
}
</style>