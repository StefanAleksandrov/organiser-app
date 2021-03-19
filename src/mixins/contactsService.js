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
                .catch(err => this.$root.$emit("notify", [err.message, "error"]) );
        },

        getMessagegById(id) {
            fetch(URL + `events/${id}.json`)
                .then(resp => resp.json())
                .then(event => this.event = event)
                .catch(err => this.$root.$emit("notify", [err.message, "error"]) );
        },

        getAllMessages() {
            fetch(URL + 'events.json')
                .then(resp => resp.json())
                .then(events => {
                    for (const key in events) {
                        if (Object.hasOwnProperty.call(events, key)) {
                            events[key].id = key;
                            this.events.push(events[key]);
                        }
                    }
                })
                .catch(err => this.$root.$emit("notify", [err.message, "error"]) );
        }
    },
}