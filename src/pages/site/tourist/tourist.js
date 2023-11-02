import axios from "axios";
export default {

    data() {
        return {
            tourist: {},
            images: [],

        }
    },

    mounted() {
        this.get_tourist()
    },

    methods: {

        async get_tourist() {
            this.$store.commit('progress_status', true)

            await axios({
                method: 'GET',
                url: '/tourists/getTouristDetails',
                params: {
                    id: this.$route.query.id
                },
            })
                .then((res) => {
                    console.log(res.data);
                    this.tourist = res.data.tourist
                    // create images array
                    if (this.tourist.image1 !== "") {
                        this.images.push(this.tourist.image1)
                    }
                    if (this.tourist.image2 !== "") {
                        this.images.push(this.tourist.image2)
                    }
                    if (this.tourist.image3 !== "") {
                        this.images.push(this.tourist.image3)
                    }
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