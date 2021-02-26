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
            if (this.eventName) this.checkAllInputs();
            else this.nameErr = true;
        },

        validateEventDesc () {
            if (this.eventDesc) this.checkAllInputs();
            else this.descErr = true;
        },

        checkAllInputs () {
            if( !this.nameErr && !this.descErr && !this.imgErr && !this.dateErr) this.disabled = false;
        },
    },
}