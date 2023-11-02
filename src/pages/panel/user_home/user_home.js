
import axios from "axios";
export default {

  data() {
    return {
      home: [],
      products: "",
      services: "",
      messages: "",
      user: {},

    }
  },

  mounted() {
    this.get_home()
  },

  methods: {

    async get_home() {
      this.$store.commit('progress_status', true)
      await axios({
        method: 'GET',
        url: '/userHome/getUserHome',
        headers: {
          Authorization: "barer" + " " + localStorage.getItem("token")
        },
      })
        .then((res) => {
          console.log(res.data);
          this.products = res.data.products
          this.services = res.data.services
          this.messages = res.data.messages
          this.user = res.data.user
        })
        .catch((err) => {
          console.log(err);

          this.$toasted.show(err.response.data.message, {
            type: 'error',
          });
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