import axios from "axios";
export default {

    data() {
        return {
            cats: [],

        }
    },

    mounted() {
        this.get_cats()
    },

    methods: {

        // get product's category
        async get_cats() {
            this.$store.commit('progress_status', true)

            await axios({
                method: 'GET',
                url: '/productCat/getProductCats',
            })
                .then((res) => {
                    console.log(res.data);
                    this.cats = res.data
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