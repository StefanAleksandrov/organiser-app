const URL = "https://organiser-app-e74d7-default-rtdb.europe-west1.firebasedatabase.app/";

export default {
    methods: {
        createNewEvent () {
            let createURL = URL + `events/${this.eventName}.json`;
            console.log(this.isOpen);
            console.log(createURL);

            // this.isOpen = '';
            // let event = {
            //     createdAt: new Date(),
            //     creator: localStorage.getItem("uid"),
            //     eventDate: '',
            //     eventDesc: this.eventDesc,
            //     imageUrl: this.eventImgUrl,
            //     isOpen: this.isOpen,
            //     modifiedAt: new Date(),
            // }

            // fetch(createURL, event)
            //     .then(resp => resp.json())
            //     .then(data => console.log(data))
            //     .catch(err => console.log(err));
        },
    },
}