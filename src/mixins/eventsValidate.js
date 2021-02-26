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
            if (this.eventName && this.eventName.length > 3 && this.eventName.length < 25) this.checkAllInputs();
            else this.nameErr = true;
        },

        validateEventDesc () {
            if (this.eventDesc && this.eventDesc.length > 5 && this.eventDesc < 100) this.checkAllInputs();
            else this.descErr = true;
        },

        validateEventImgUrl () {
            const imgRegex = /^https?/i
            if (this.eventImgUrl && imgRegex.test(this.eventImgUrl)) this.checkAllInputs();
            else this.descErr = true;
        },

        checkAllInputs () {
            if( !this.nameErr && !this.descErr && !this.imgErr && !this.dateErr) this.disabled = false;
        },
    },
}