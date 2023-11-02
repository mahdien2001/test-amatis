import axios from "axios";
export default {

    data() {
        return {
            tourists: [],

        }
    },

    mounted() {
        this.get_tourists()
    },

    methods: {

        async get_tourists() {
            this.$store.commit('progress_status', true)

            await axios({
                method: 'GET',
                url: '/tourists/getAllTourists',
                params: {
                    cat: this.$route.query.cat
                },
            })
                .then((res) => {
                    console.log(res.data);
                    this.tourists = res.data
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