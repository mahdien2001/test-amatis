import axios from "axios";
export default {

    data() {
        return {
            product: {},
            images: [],

        }
    },

    mounted() {
        this.get_product()
    },

    methods: {
        // get all products
        async get_product() {
            this.$store.commit('progress_status', true)

            await axios({
                method: 'GET',
                url: '/products/getProductDetails',
                params: {
                    id: this.$route.query.id
                },
            })
                .then((res) => {
                    console.log(res.data);
                    this.product = res.data.product

                    // create images array
                    if (this.product.image1 !== "") {
                        this.images.push(this.product.image1)
                    }
                    if (this.product.image2 !== "") {
                        this.images.push(this.product.image2)
                    }
                    if (this.product.image3 !== "") {
                        this.images.push(this.product.image3)
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