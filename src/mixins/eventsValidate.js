export default {
    data () {
        return {
            nameErr : true,
            descErr : true,
            imgErr : true,
        }
    },

    methods: {
        validateEventName () {
            if (this.eventName) {
                this.checkAllInputs();
            }
        },

        checkAllInputs () {
            //Check
            this.disabled = false;
        },
    },
}