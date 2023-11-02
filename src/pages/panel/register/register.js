import axios from "axios";
export default {

    data() {
        return {
            name: "",
            phone: "",
            password: "",

        }
    },


    mounted() {
    },

    methods: {

        async toEnglishDigits() {

            // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
            var e = '۰'.charCodeAt(0);
            this.phone = this.phone.replace(/[۰-۹]/g, function (t) {
                return t.charCodeAt(0) - e;
            });

            // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
            e = '٠'.charCodeAt(0);
            this.phone = this.phone.replace(/[٠-٩]/g, function (t) {
                return t.charCodeAt(0) - e;
            });
        },

        async register() {
            this.$store.commit('progress_status', true)
            await this.toEnglishDigits()

            await axios({
                method: 'POST',
                url: '/users/register',

                data: {
                    username: this.name,
                    phone: this.phone,
                    password: this.password
                }
            })
                .then((res) => {
                    console.log(res.data);
                    this.$toasted.show(res.data.message, {
                        type: 'success',
                    });
                    this.$router.push('/login')
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