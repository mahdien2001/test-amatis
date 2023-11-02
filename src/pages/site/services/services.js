import axios from "axios";
export default {

    data() {
        return {
            services: [],

        }
    },

    mounted() {
        this.get_services()
    },

    methods: {

        async get_services() {
            this.$store.commit('progress_status', true)

            await axios({
                method: 'GET',
                url: '/services/getAllServices',
                params: {
                    cat: this.$route.query.cat
                },
            })
                .then((res) => {
                    console.log(res.data);
                    this.services = res.data
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