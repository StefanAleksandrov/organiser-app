import { URL } from '../config/config';
import { auth } from '../config/firebaseInit.js';

export default {
    methods: {
        createNewMessage() {
            //If user is not logged in, cancel the operation and redirect to Login page;
            if (!localStorage.getItem("uid")) this.$router.push('/login');

            let msg = {
                isRead: false,
                createdAt: new Date(),
                creator: localStorage.getItem("uid"),
                email: this.email,
                topic: this.topic,
                message: this.message,
            }

            auth.currentUser.getIdToken(false)
                .then(idToken => {
                    return fetch(URL + `messages.json?auth=${idToken}`, {
                        method: 'POST',
                        body: JSON.stringify(msg),
                    });
                })
                .then(resp => resp.json())
                .then(() => {
                    this.$router.push('/');
                    this.$root.$emit('notify', 'Thank you for contacting us!');
                })
                .catch(err => this.$root.$emit("notify", [err.message, "error"]));
        },

        getAllMessages() {
            fetch(URL + 'messages.json')
                .then(resp => resp.json())
                .then(messages => {
                    for (const key in messages) {
                        if (Object.hasOwnProperty.call(messages, key)) {
                            messages[key].id = key;
                            this.messages.push(messages[key]);
                        }
                    }

                    this.messages.sort((a, b) => {
                        if (a.isRead && !b.isRead) return 1;
                        if (!a.isRead && b.isRead) return -1;
                        return 0;
                    })
                })
                .catch(err => this.$root.$emit("notify", [err.message, "error"]));
        },

        toggleRead(message) {
            message.isRead = !message.isRead;
            console.log(message);
    
            auth.currentUser.getIdToken(false)
                .then(idToken => {
                    return fetch(URL + `messages/${message.id}.json?auth=${idToken}`, {
                        method: 'PUT',
                        body: JSON.stringify(message),
                    });
                })
                .catch(err => this.$root.$emit("notify", [err.message, "error"]));
        },
    }
}