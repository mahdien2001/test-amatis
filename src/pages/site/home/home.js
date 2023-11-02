import axios from "axios"

export default {
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },

    data() {
        return {
            products: [],
            tourists: [],
            services: [],

            // swiper config
            homeslider: {
                pagination: {
                    el: '.swiper-pagination'
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                slidesPerView: 5,
                paginationClickable: true,
                spaceBetween: 30,
                // loop:true,

                breakpoints: {
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    200: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    }
                }
            }
        }
    },

    mounted() {
        this.swiper.slideTo(3, 1000, false)
        this.get_home()
    },

    methods: {

        // get home info
        async get_home() {
            this.$store.commit('progress_status', true)

            await axios({
                method: 'GET',
                url: '/home/getHome',
            })
                .then((res) => {
                    console.log(res.data);
                    this.products = res.data.products
                    this.tourists = res.data.tourists
                    this.services = res.data.services
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