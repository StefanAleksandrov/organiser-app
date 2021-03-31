<template>
  <div class="glass admin">
      <div v-if="!isAdmin">
          <form @submit.prevent="authorizeAdmin">
              <label for="admin-pass" class="input text-center" >Provide admin password:</label>
              <input id="admin-pass" type="password" v-model="adminPass" class="input" >
              <input type="submit" class="input" >
          </form>
      </div>

      <div v-else >
          <div v-for="message in messages" :key="message.id" :class="message.isRead ? 'read message' : 'message'" @click="toggleRead(message)" >
              <h1>{{message.topic | toUpperCase}}</h1>
              <p><i class="fas fa-calendar icon"></i> {{message.createdAt | date}} <i class="fas fa-envelope icon"></i><a :href="'mailto:' + message.email">{{message.email}}</a></p>
              <p>{{message.message}}</p>
          </div>
      </div>
  </div>
</template>

<script>
import contactsService from '../../mixins/contactsService';

export default {
  name: "admin",
  data() {
    return {
        messages: [],
        isAdmin: false,
        adminPass: '',
        re_render: 0,
    };
  },
  methods: {
      authorizeAdmin() {
          let key = new Date().toString().split(" ")[4].split(":");
          key.pop();
          key = key.join("");

          if (this.adminPass !== key) return this.adminPass = "";

          this.isAdmin = true;
          this.getAllMessages();
      },
  },
  mixins: [contactsService]
};
</script>

<style scoped>
.admin {
    width: 60%;
    margin: auto;
    padding: 10rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.input {
    display: block;
    width: 100%;
    margin: 1rem;
    padding: 0.5rem;
}

.text-center {
    text-align: center;
}

.message {
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
    cursor: pointer;
}

.read.message {
    opacity: 0.5;
}

.icon {
    margin-right: 0.5rem;
}

.icon:last-of-type {
    margin-left: 2rem;
}

a {
    text-decoration: none;
    color: inherit;
}
</style>
