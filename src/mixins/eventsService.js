import { URL } from '../config/config';
import { auth } from '../config/firebaseInit.js';


export default {
    methods: {
        getUid() {
            return localStorage.getItem("uid");
        },

        createNewEvent() {
            const uid = this.getUid();

            if (!uid) {
                this.$root.$emit("notify", ["No logged in user.", "error"]);
                this.$router.push('/login');
                return;
            }

            let event = {
                createdAt: this.event.createdAt || new Date(),
                creator: uid,
                name: this.eventName,
                date: this.eventDate,
                desc: this.eventDesc,
                location: this.eventLocation,
                imageUrl: this.eventImgUrl,
                isPublic: this.eventIsPublic,
                members: this.eventMembers,
                modifiedAt: new Date(),
            }

            let sendURL = URL + `events/public.json`;

            if (!event.isPublic) {
                sendURL = URL + `events/private/${uid}.json`;
            }

            auth.currentUser.getIdToken(false)
                .then(idToken => {
                    return fetch(sendURL + `?auth=${idToken}`, {
                        method: 'POST',
                        body: JSON.stringify(event),
                    });
                })
                .then(resp => resp.json())
                .then(eventId => {
                    if (event.isPublic) {
                        this.$router.push(`/events/details/${eventId.name}`);

                    } else {
                        const uid = this.getUid();
                        this.$router.push(`/events/details/${uid}/${eventId.name}`);
                    }
                })
                .catch(err => this.$root.$emit("notify", [err.message, "error"]));
        },

        updateEvent(id) {
            const uid = this.getUid();

            if (!uid) {
                this.$root.$emit("notify", ["No logged in user.", "error"]);
                this.$router.push('/login');
                return;
            }

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

            //the event is not switched between public / private
            if (this.event.isPublic == this.eventIsPublic) {
                if (!updatedEvent.isPublic) {
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
                            .then(() => {
                                if (sendEvent.isPublic) {
                                    this.$router.push(`/events/details/${id}`);

                                } else {
                                    const uid = this.getUid();
                                    this.$router.push(`/events/details/${uid}/${id}`);
                                }
                            })
                            .catch(err => this.$root.$emit("notify", [err.message, "error"]));
                    })
                    .catch(err => this.$root.$emit("notify", [err.message, "error"]));

            //the event is switched between public / private so we delete the old version and create the new
            } else {
                this.deleteEvent(id, this.event.isPublic, false);
                this.createNewEvent();
            }
        },

        getEventById(id, isPrivate = false) {
            let getURL = URL + `events/public/${id}.json`;

            if (isPrivate) {
                const uid = this.getUid();
                getURL = URL + `events/private/${uid}/${id}.json`;
            }

            return fetch(getURL)
                .then(resp => resp.json());
        },

        getAllPublicEvents() {
            this.eventsPublic = [];

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
            this.eventsPrivate = [];
            const uid = this.getUid();

            if (!uid) return;

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

        editEvent(id, isPublic = false) {
            const uid = this.getUid();

            if (!uid) {
                this.$root.$emit("notify", ["No logged in user.", "error"]);
                this.$router.push('/login');
                return;
            }

            if (!isPublic) {
                this.$router.push(`/edit-event/${uid}/${id}`);

            } else {
                this.$router.push(`/edit-event/${id}`);
            }
        },

        deleteEvent(id, isPublic = false, redirect = true) {
            const uid = this.getUid();

            if (!uid) {
                this.$root.$emit("notify", ["No logged in user.", "error"]);
                this.$router.push('/login');
                return;
            }

            let sendURL = URL + `events/public/${id}.json`;

            if (!isPublic) {
                sendURL = URL + `events/private/${uid}/${id}.json`;
            }

            auth.currentUser.getIdToken(false)
                .then(idToken => {
                    return fetch(sendURL + `?auth=${idToken}`, { method: "DELETE" });
                })
                .then(() => {
                    if (redirect) this.$router.push('/');
                })
                .catch(err => this.$root.$emit("notify", [err.message, "error"]));
        },

        applyEvent() {
            const uid = this.getUid();
            let joinURL = URL + `events/public/${this.$route.params.id}.json`;

            if (!uid) {
                this.$root.$emit("notify", ["No logged in user.", "error"]);
                this.$router.push('/login');
                return;
            }

            fetch(joinURL)
                .then(resp => resp.json())
                .then(event => {
                    this.event = event;

                    if (this.event.members) {
                        this.event.members.push(uid);

                    } else {
                        this.event.members = [uid];
                    }

                    return auth.currentUser.getIdToken(false);
                })
                .then(idToken => {
                    return fetch(joinURL + `?auth=${idToken}`, {
                        method: "PUT",
                        body: JSON.stringify(this.event)
                    })
                })
                .then(() => {
                    this.$root.$emit('notify', 'You joined the Event!');
                    this.isMember = true
                })
                .catch(err => this.$root.$emit("notify", [err.message, "error"]));

        },

        leaveEvent() {
            const uid = this.getUid();
            let leaveURL = URL;

            if (!uid) {
                this.$root.$emit("notify", ["No logged in user.", "error"]);
                this.$router.push('/login');
                return;
            }

            if (this.$route.params.uid) {
                leaveURL += `events/private/${uid}/${this.$route.params.id}.json`;

            } else {
                leaveURL += `events/public/${this.$route.params.id}.json`;
            }

            fetch(leaveURL)
                .then(resp => resp.json())
                .then(event => {
                    this.event = event;

                    if (this.event.members) {
                        let index = this.event.members.indexOf(uid);
                        this.event.members.splice(index, 1);
                    }

                    return auth.currentUser.getIdToken(false);
                })
                .then(idToken => {
                    return fetch(leaveURL + `?auth=${idToken}`, {
                        method: "PUT",
                        body: JSON.stringify(this.event)
                    })
                })
                .then(() => {
                    this.$root.$emit('notify', 'You left the Event!');
                    this.isMember = false
                })
                .catch(err => this.$root.$emit("notify", [err.message, "error"]));

        },
    },
}