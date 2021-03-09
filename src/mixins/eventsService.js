import { URL } from '../config/config';
import { auth } from '../config/firebaseInit.js';


export default {
    methods: {
        createNewEvent() {
            //If user is not logged in, cancel the operation and redirect to Login page;
            if (!localStorage.getItem("uid")) this.$router.push('/login');

            let event = {
                createdAt: new Date(),
                creator: localStorage.getItem("uid"),
                name: this.eventName,
                date: this.eventDate,
                desc: this.eventDesc,
                location: this.eventLocation,
                imageUrl: this.eventImgUrl,
                isPublic: this.eventIsPupblic,
                members: this.eventMembers,
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
                .catch(err => this.$root.$emit("notify", [err.message, "error"]));

        },

        getEventById(id) {
            fetch(URL + `events/${id}.json`)
                .then(resp => resp.json())
                .then(event => {
                    const userId = localStorage.getItem("uid");
                    this.event = event;
                    this.isOwner = event.creator == userId ? true : false;
                })
                .catch(err => this.$root.$emit("notify", [err.message, "error"]));
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
                .catch(err => this.$root.$emit("notify", [err.message, "error"]));
        },

        editEvent() {

        },

        deleteEvent(id) {
            if (confirm("You are about to delete this event. Are you sure?")) {
                auth.currentUser.getIdToken(false)
                    .then(idToken => {
                        return fetch(URL + `events/${id}.json?auth=${idToken}`, { method: "DELETE" });
                    })
                    .then(() => this.$router.push('/'))
                    .catch(err => this.$root.$emit("notify", [err.message, "error"]));
            }


        },

        applyEvent() {

        },

        leaveEvent() {

        },
    },
}