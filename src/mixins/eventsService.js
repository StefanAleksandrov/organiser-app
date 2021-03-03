const URL = "https://organiser-app-e74d7-default-rtdb.europe-west1.firebasedatabase.app/";
import { auth } from '../config/firebaseInit.js';


export default {
    methods: {
        createNewEvent() {
            //If user is not logged in, cancel the operation and redirect to Login page;
            if (!localStorage.getItem("uid")) this.$router.push('/login');

            let createURL = URL + `events.json`;

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
                    return fetch(createURL + `?auth=${idToken}`, {
                        method: 'POST',
                        body: JSON.stringify(event),
                    });
                })
                .then(resp => resp.json())
                .then(eventId => this.$router.push(`events/${eventId.name}/details`))
                .catch(err => console.log(err));
        },

        getEventById() {
            console.log(this.$route.params);

        },

        getAllEvents() {
            let getAllURL = URL + `events.json`;

            fetch(getAllURL)
                .then(resp => resp.json())
                .then(events => {
                    for (const key in events) {
                        if (Object.hasOwnProperty.call(events, key)) {
                            events[key].id = key;
                            this.events.push(events[key]);
                        }
                    }
                })
                .catch(err => console.log(err));
        }
    },
}