
import axios from "axios";
export default {

  data() {
    return {
      services: [],
      products: [],
      dialog: false,
      type_dialog: false,
      delete_id: "",
      delete_type: "",

    }
  },

  mounted() {
    this.get_products()
  },

  methods: {

    // products
    async get_products() {
      this.services = []
      this.$store.commit('progress_status', true)
      await axios({
        method: 'GET',
        url: '/products/getUserProducts',
        headers: {
          Authorization: "barer" + " " + localStorage.getItem("token")
        },
      })
        .then((res) => {
          console.log(res.data);
          this.products = res.data
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

    async delete_product() {
      this.$store.commit('progress_status', true)
      await axios({
        method: 'DELETE',
        url: '/products/deleteProduct',
        headers: {
          Authorization: "barer" + " " + localStorage.getItem("token")
        },
        params: {
          id: this.delete_id
        }
      })
        .then((res) => {
          this.get_products()
          console.log(res.data);
          this.dialog = false
          this.$toasted.show(res.data.message, {
            type: 'success',
          });


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


    // service
    async get_services() {
      this.products = []

      this.$store.commit('progress_status', true)
      await axios({
        method: 'GET',
        url: '/services/getUserServices',
        headers: {
          Authorization: "barer" + " " + localStorage.getItem("token")
        },
      })
        .then((res) => {
          console.log(res.data);
          this.services = res.data
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

    async delete_service() {
      this.$store.commit('progress_status', true)
      await axios({
        method: 'DELETE',
        url: '/services/deleteservice',
        headers: {
          Authorization: "barer" + " " + localStorage.getItem("token")
        },
        params: {
          id: this.delete_id
        }
      })
        .then((res) => {
          this.get_services()
          console.log(res.data);
          this.dialog = false
          this.$toasted.show(res.data.message, {
            type: 'success',
          });


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

    // public
    open_delete(type, id) {
      this.dialog = true
      this.delete_id = id
      this.delete_type = type
    },

    delete_post() {
      if (this.delete_type === "service") {
        console.log(this.delete_id);
        console.log(1);
        this.delete_service()
      }
      if (this.delete_type === "product") {
        console.log(this.delete_id);
        console.log(2);
        this.delete_product()
      }
    },


  }
}