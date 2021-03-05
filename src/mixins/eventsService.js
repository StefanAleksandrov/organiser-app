const URL = "https://organiser-app-e74d7-default-rtdb.europe-west1.firebasedatabase.app/";
import { auth } from '../config/firebaseInit.js';


export default {
    methods: {
        createNewEvent() {
            //If user is not logged in, cancel the operation and redirect to Login page;
            if (!localStorage.getItem("uid")) this.$router.push('/login');

            let event = {
                createdAt: new Date(),
                creator: localStorage.getItem("uid"),
                eventName: this.eventName,
                eventDate: this.eventDate,
                eventDesc: this.eventDesc,
                eventLocation: this.eventLocation,
                imageUrl: this.eventImgUrl,
                isPrivate: this.eventIsPrivate,
                modifiedAt: new Date(),
            }

            auth.currentUser.getIdToken(false)
                .then(idToken => {
                    return fetch(URL + `events.json?auth=${idToken}`, {
                        method: 'POST',
                        body: JSON.stringify(event),
                    });
                })
                .then(resp => resp.json())
                .then(eventId => this.$router.push(`events/${eventId.name}/details`))
                .catch(err => this.$root.$emit("notify", [err.message, "error"]) );

        },

        getEventById(id) {
            fetch(URL + `events/${id}.json`)
                .then(resp => resp.json())
                .then(event => this.event = event)
                .catch(err => this.$root.$emit("notify", [err.message, "error"]) );
        },

        getAllEvents() {
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