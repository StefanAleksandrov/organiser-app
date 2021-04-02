export default {
    data () {
        return {
            classGlass: 'glass start',
        }
    },

    mounted () {
        document.documentElement.scrollTop = 0;
        
        setTimeout(function () {
        this.classGlass += ' animate';
        }.bind(this), 1);
    }
}