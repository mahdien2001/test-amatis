
import axios from "axios";
import imageCompression from 'browser-image-compression';

export default {

    data() {
        return {
            cats: [],
            cat: "",
            name: "",
            desc: "",
            price: "",
            price_type: "",
            address: "",

            img1: "",
            img2: "",
            img3: "",

        }
    },

    mounted() {
        this.get_cats()
    },

    methods: {

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

        // HANDLE IMAGE UPLOAD
        async handleImageUpload(event, num) {
            const [file] = document.getElementById('input' + num).files
            if (file) {
                document.getElementById('img' + num).src = URL.createObjectURL(file)
                if (num == 2 || num == 3) {
                    document.getElementById('remove' + num).style.display = 'block'
                }
            }

            const imageFile = event.target.files[0];
            const options = {
                maxSizeMB: 0.5,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
                preserveExif: true,
            }
            try {
                const compressedFile = await imageCompression(imageFile, options);

                if (num === '1') {
                    this.img1 = compressedFile
                }
                if (num === '2') {
                    this.img2 = compressedFile
                }
                if (num === '3') {
                    this.img3 = compressedFile
                }
                // document.getElem entById('loader').style.display = 'none'


            } catch (error) {
                console.log(error);
            }

        },

        remove_img(num) {
            document.getElementById('input' + num).value = null
            document.getElementById('img' + num).src = ''
            document.getElementById('remove' + num).style.display = 'none'
        },

        async add() {

            const formData = new FormData();

            formData.append("image1", this.img1);
            formData.append("image2", this.img2);
            formData.append("image3", this.img3);
            formData.append("name", this.name);
            formData.append("description", this.desc);
            formData.append("category", this.cat);
            formData.append("price", this.price);
            formData.append("priceType", this.price_type);
            formData.append("address", this.address);

            if (this.name === '' || this.cat === '') {
                this.$toasted.show("نام محصول و دسته ی آن را مشخص کنید", {
                    type: 'error',
                });
            }
            else if (this.description === '') {
                this.$toasted.show("توضیحاتی برای محصول خود بنویسید", {
                    type: 'error',
                });
            }
            else if (this.price === '' || this.priceType === '') {
                this.$toasted.show("قیمت و واحد آن را مشخص کنید", {
                    type: 'error',
                });
            }
            else if (!/^-?[0-9]+$/.test(this.price)) {
                this.$toasted.show("قیمت فقط میتواند شامل اعداد باشد", {
                    type: 'error',
                });
            }
            else if (this.address === '') {
                this.$toasted.show("آدرسی وارد کنید", {
                    type: 'error',
                });
            }
            else {
                this.$store.commit('progress_status', true)
                await axios({
                    method: 'POST',
                    url: '/products/addProduct',
                    headers: {
                        Authorization: "barer" + " " + localStorage.getItem("token")
                    },

                    data: formData
                })
                    .then((res) => {
                        console.log(res.data);
                        this.$toasted.show(res.data.message, {
                            type: 'success',
                        });
                        this.$router.push('/user_products')
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
            }

        },

    }
}