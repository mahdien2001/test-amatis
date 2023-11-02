import axios from "axios";
export default {

    data() {
        return {
            phone: "",
            password: "",

        }
    },

    mounted() {
        let token = localStorage.getItem('token')
        if (token) {
            this.$router.push('/user_home')
        }
    },

    methods: {

        // change persian nums to english
        async toEnglishDigits() {

            console.log(this.phone);

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

        async login() {
            this.$store.commit('progress_status', true)

            await this.toEnglishDigits()

            await axios({
                method: 'POST',
                url: '/users/login',

                data: {
                    phone: this.phone,
                    password: this.password
                }
            })
                .then((res) => {
                    console.log(res.data);
                    localStorage.setItem("token", res.data.token)
                    this.$router.push('/user_home')

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