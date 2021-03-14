import { URL } from '../config/config';
import { auth } from '../config/firebaseInit.js';


export default {
    methods: {
        getUid () {
            let uid = localStorage.getItem("uid");

            if (uid) return uid
            else this.$router.push('/')
        },

        isAuthenticatedUser() {
            //If user is not logged in, cancel the operation and redirect to Login page;
            if (!localStorage.getItem("uid")) this.$router.push('/login');
        },

        createNewEvent () {
            this.isAuthenticatedUser();

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

        updateEvent (id) {
            this.isAuthenticatedUser();

            let updatedEvent = {
                name: this.eventName,
                date: this.eventDate,
                desc: this.eventDesc,
                location: this.eventLocation,
                imageUrl: this.eventImgUrl,
                isPublic: this.eventIsPublic,
                modifiedAt: new Date(),
            }

            let sendURL = URL + `events/public/${id}.json`;

            if (this.updateEvent.isPublic) {
                const uid = this.getUid();
                sendURL = URL + `events/private/${uid}/${id}.json`;
            }

            fetch(sendURL)
                .then(resp => resp.json())
                .then(event => {
                    const sendEvent = Object.assign({}, event, updatedEvent);

                    auth.currentUser.getIdToken(false)
                        .then(idToken => {
                            return fetch(sendURL + `?auth=${idToken}`, {
                                method: 'PUT',
                                body: JSON.stringify(sendEvent),
                            });
                        })
                        .then(() => this.$router.push(`/events/${id}/details`))
                        .catch(err => this.$root.$emit("notify", [err.message, "error"]));
                })
                .catch(err => this.$root.$emit("notify", [err.message, "error"]));
        },

        getEventById ( id, isPublic = false ) {
            let getURL = URL + `events/public/${id}.json`;

            if ( isPublic ) {
                const uid = this.getUid();
                getURL = URL + `events/private/${uid}/${id}.json`;
            }

            fetch(getURL)
                .then(resp => resp.json())
                .then(event => {
                    const uid = this.getUid();
                    this.event = event;
                    this.isOwner = event.creator == uid ? true : false;
                })
                .catch(err => this.$root.$emit("notify", [err.message, "error"]));
        },

        getAllPublicEvents () {
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

        getAllPrivateEvents () {
            const uid = this.getUid();

            fetch(URL + `events/private/${uid}.json`)
                .then(resp => resp.json())
                .then(events => {
                    console.log(uid);

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

        editEvent ( id, isPrivate = false ) {
            if (isPrivate) {
                const uid = this.getUid();
                this.$router.push(`/edit-event/${uid}/${id}`);

            } else {
                this.$router.push(`/edit-event/${id}`);
            }
        },

        deleteEvent (id) {
            if (confirm("You are about to delete this event. Are you sure?")) {
                auth.currentUser.getIdToken(false)
                    .then(idToken => {
                        return fetch(URL + `events/public/${id}.json?auth=${idToken}`, { method: "DELETE" });
                    })
                    .then(() => this.$router.push('/'))
                    .catch(err => this.$root.$emit("notify", [err.message, "error"]));
            }


        },

        applyEvent () {

        },

        leaveEvent () {

        },
    },
}