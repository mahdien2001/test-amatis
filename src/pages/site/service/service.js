import axios from "axios";
export default {

    data() {
        return {
            service: {},
            images: [],

        }
    },

    mounted() {
        this.get_service()
    },

    methods: {

        async get_service() {
            this.$store.commit('progress_status', true)

            await axios({
                method: 'GET',
                url: '/services/getServiceDetails',
                params: {
                    id: this.$route.query.id
                },
            })
                .then((res) => {
                    console.log(res.data);
                    this.service = res.data.service

                    // create images array
                    if (this.service.image1 !== "") {
                        this.images.push(this.service.image1)
                    }
                    if (this.service.image2 !== "") {
                        this.images.push(this.service.image2)
                    }
                    if (this.service.image3 !== "") {
                        this.images.push(this.service.image3)
                    }
                    console.log(this.images);
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