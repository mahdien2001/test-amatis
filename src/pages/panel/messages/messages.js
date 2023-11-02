import axios from "axios";

export default {

    data() {
        return {
            messages: "",
        }
    },

    mounted() {
        this.get_messages()
    },

    methods: {
        async get_messages() {

            await axios({
                method: 'GET',
                url: '/adminMessages/getUserMessages',
                headers: {
                    Authorization: "barer" + " " + localStorage.getItem("token")
                },

            })
                .then((res) => {
                    console.log(res.data);
                    this.messages = res.data

                })
                .catch((err) => {
                    this.$toasted.show(err.response.data.message, {
                        type: 'error',
                    });
                    console.log(err);
                    if (err.message ===
                        "Network Error") {
                        this.$store.commit('network_dialog', true)
                    }
                })
                .finally(() => {
                    this.$store.commit('progress_status', false)
                })


        },

        async read_messages(id) {

            await axios({
                method: 'PATCH',
                url: '/adminMessages/readMessage',
                headers: {
                    Authorization: "barer" + " " + localStorage.getItem("token")
                },
                params: {
                    id
                },
                data: {
                    isRead: true
                }
            })
                .then((res) => {
                    console.log(res.data);
                    //   this.$toasted.show(err.response.data.message, {
                    //     type: 'error',
                    // });
                    this.get_messages()
                })
                .catch((err) => {
                    this.$toasted.show(err.response.data.message, {
                        type: 'error',
                    });
                    console.log(err);
                    if (err.message ===
                        "Network Error") {
                        this.$store.commit('network_dialog', true)
                    }
                })
                .finally(() => {
                    this.$store.commit('progress_status', false)
                })


        },
    }
}