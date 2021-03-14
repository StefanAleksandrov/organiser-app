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
                isPublic: this.eventIsPublic,
                members: this.eventMembers,
                modifiedAt: new Date(),
            }


            auth.currentUser.getIdToken(false)
            .then(idToken => {
                if (this.eventIsPublic) {
                    return fetch(URL + `events/public.json?auth=${idToken}`, {
                        method: 'POST',
                        body: JSON.stringify(event),
                    });

                } else {
                    return fetch(URL + `events/private/${event.creator}.json?auth=${idToken}`, {
                        method: 'POST',
                        body: JSON.stringify(event),
                    });
                }
            })
            .then(resp => resp.json())
            .then(eventId => this.$router.push(`/events/${eventId.name}/details`))
            .catch(err => this.$root.$emit("notify", [err.message, "error"]));
        },

        updateEvent(id) {
            //If user is not logged in, cancel the operation and redirect to Login page;
            if (!localStorage.getItem("uid")) this.$router.push('/login');

            let updatedEvent = {
                name: this.eventName,
                date: this.eventDate,
                desc: this.eventDesc,
                location: this.eventLocation,
                imageUrl: this.eventImgUrl,
                isPublic: this.eventIsPublic,
                modifiedAt: new Date(),
            }

            fetch(URL + `events/public/${id}.json`)
                .then(resp => resp.json())
                .then(event => {
                    const sendEvent = Object.assign({}, event, updatedEvent);

                    auth.currentUser.getIdToken(false)
                        .then(idToken => {
                            return fetch(URL + `events/public/${id}.json?auth=${idToken}`, {
                                method: 'PUT',
                                body: JSON.stringify(sendEvent),
                            });
                        })
                        .then(() => this.$router.push(`/events/${id}/details`))
                        .catch(err => this.$root.$emit("notify", [err.message, "error"]));
                })
                .catch(err => this.$root.$emit("notify", [err.message, "error"]));
        },

        getEventById(id) {
            fetch(URL + `events/public/${id}.json`)
                .then(resp => resp.json())
                .then(event => {
                    const userId = localStorage.getItem("uid");
                    this.event = event;
                    this.isOwner = event.creator == userId ? true : false;
                })
                .catch(err => this.$root.$emit("notify", [err.message, "error"]));
        },

        getAllPublicEvents() {
            fetch(URL + 'events/public.json')
                .then(resp => resp.json())
                .then(events => {
                    for (const key in events) {
                        if (Object.hasOwnProperty.call(events, key)) {
                            events[key].id = key;
                            this.eventsPublic.push(events[key]);
                        }
                    }

                    this.eventsPublic = this.eventsPublic.sort((a, b) => {
                        let [yearA, monthA, dayA] = a.date.split("T")[0].split("-");
                        let [yearB, monthB, dayB] = b.date.split("T")[0].split("-");

                        let daysA = yearA * 365 + monthA * 30 + dayA;
                        let daysB = yearB * 365 + monthB * 30 + dayB;

                        return daysA - daysB;
                    })
                })
                .catch(err => this.$root.$emit("notify", [err.message, "error"]));
        },

        getAllPrivateEvents() {
            let uid = localStorage.getItem('uid');

            fetch(URL + `events/private/${uid}.json`)
                .then(resp => resp.json())
                .then(events => {
                    for (const key in events) {
                        if (Object.hasOwnProperty.call(events, key)) {
                            events[key].id = key;
                            this.eventsPrivate.push(events[key]);
                        }
                    }

                    this.eventsPrivate = this.eventsPrivate.sort((a, b) => {
                        let [yearA, monthA, dayA] = a.date.split("T")[0].split("-");
                        let [yearB, monthB, dayB] = b.date.split("T")[0].split("-");

                        let daysA = yearA * 365 + monthA * 30 + dayA;
                        let daysB = yearB * 365 + monthB * 30 + dayB;

                        return daysA - daysB;
                    })
                })
                .catch(err => this.$root.$emit("notify", [err.message, "error"]));
        },

        editEvent(id) {
            this.$router.push(`/edit-event/${id}`);
        },

        deleteEvent(id) {
            if (confirm("You are about to delete this event. Are you sure?")) {
                auth.currentUser.getIdToken(false)
                    .then(idToken => {
                        return fetch(URL + `events/public/${id}.json?auth=${idToken}`, { method: "DELETE" });
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