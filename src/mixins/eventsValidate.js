export default {
    data () {
        return {
            nameErr : false,
            descErr : false,
            imgErr : false,
            dateErr : false,
        }
    },

    methods: {
        validateEventName () {
            if (this.eventName && this.eventName.length > 4 && this.eventName.length < 26) this.nameErr = false;
            else this.nameErr = true;

            this.checkAllInputs();
        },

        validateEventDesc () {
            if (this.eventDesc && this.eventDesc.length > 10 && this.eventDesc.length < 100) this.descErr = false;
            else this.descErr = true;
        },

        validateEventImgUrl () {
            const imgRegex = /^https?/i;

            if (this.eventImgUrl && imgRegex.test(this.eventImgUrl)) this.imgErr = false;
            else this.imgErr = true;

            this.checkAllInputs();
        },

        validateEventDate () {
            if (this.eventDate) this.dateErr = false;
            else this.dateErr = true;

            this.checkAllInputs();
        },

        checkAllInputs () {
            if( !this.nameErr && !this.descErr && !this.imgErr && !this.dateErr) this.disabled = false;
        },
    },
}