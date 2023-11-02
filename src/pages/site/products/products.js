import axios from "axios";
export default {

    data() {
        return {
          products : [],

        }
    },

    mounted() {
        this.get_products()
    },

    methods: {

        async get_products() {
            this.$store.commit('progress_status', true)

            await axios({
                method: 'GET',
                url: '/products/getAllProducts',
                params:{
                    cat : this.$route.query.cat
                },
            })
                .then((res) => {
                    console.log(res.data);
                    this.products = res.data
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