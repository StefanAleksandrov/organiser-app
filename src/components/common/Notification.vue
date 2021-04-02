<template>
    <div class="notification" :class="classType">
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: "Notification",

        props: {
            message: {
                type: String,
                required: true,
                default: "Hello from message component",
            },
            type: {
                type: String,
                default: "",
            }
        },

        data() {
            return {
            }
        },
        
        computed: {
            classType() {
                return this.type == "error" ? "red" : "green";
            }
        },
    }
</script>

<style scoped>
    .notification {
        min-width: 15%;
        min-height: 50px;
        border-radius: 10px;
        padding: 0 25px;
        position: absolute;
        z-index: 10;
        right: 15px;
        top: 465px;
        text-align: center;
        font-size: 24px;
        color: white;
    }

    .green {
        background: rgba(76, 197, 76, 0.65);
    }

    .red {
        background: rgba(253, 69, 100, 0.65);
    }
</style>