import axios from "axios";
import imageCompression from 'browser-image-compression';

export default {

    data() {
        return {
            service: {},

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
        this.get_service()
    },

    methods: {

        async get_service() {
            this.$store.commit('progress_status', true)

            await axios({
                method: 'GET',
                url: '/services/getServiceDetails',
                params: {
                    id: this.$route.query.id
                },
            })
                .then((res) => {
                    console.log(res.data);
                    this.service = res.data.service

                    this.name = res.data.service.name
                    this.desc = res.data.service.description
                    this.price = res.data.service.price
                    this.price_type = res.data.service.priceType
                    this.address = res.data.service.address
                    document.getElementById('img1').src = this.$hostname + res.data.service.image1
                    document.getElementById('img2').src = this.$hostname + res.data.service.image2
                    document.getElementById('img3').src = this.$hostname + res.data.service.image3


                    // remove buttons
                    if (!res.data.service.image2.includes('uploads')) {
                        document.getElementById("remove2").style.display = "none"
                        console.log(1);
                    }
                    if (!res.data.service.image3.includes('uploads')) {
                        document.getElementById("remove3").style.display = "none"
                        console.log(3);
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
            document.getElementById('img' + num).src = 'remove'
            document.getElementById('remove' + num).style.display = 'none'
            if (num === 2) {
                this.img2 = ''
            }
            if (num === 3) {
                this.img3 = ''
            }
        },


        async edit() {
            const formData = new FormData();

            // image1
            formData.append("image1", this.img1 || "");

            // image2
            if (this.img2 !== '') {
                formData.append("image2", this.img2);
                console.log('fist if2');
            }
            else if (!document.getElementById('img2').src.includes('blob')) {
                console.log('remove 1');
                formData.append("image2", "remove");
            }
            else if (document.getElementById('img2').src.includes('blob')) {
                formData.append("image2", "last");
                console.log('last 2');
            }


            // image3
            if (this.img3 !== '') {
                formData.append("image3", this.img3);
                console.log('fist if3');
            }
            else if (!document.getElementById('img3').src.includes('blob')) {
                console.log('remove 3');
                formData.append("image3", "remove");
            }
            else if (document.getElementById('img3').src.includes('blob')) {
                formData.append("image3", "last");
                console.log('last 3');
            }

            formData.append("name", this.name);
            formData.append("description", this.desc);
            formData.append("address", this.address);

            if (this.name === '' || this.category === '') {
                this.$toasted.show("نام محصول و دسته ی آن را مشخص کنید", {
                    type: 'error',
                });
            }
            else if (this.description === '') {
                this.$toasted.show("توضیحاتی برای خدمت خود بنویسید", {
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
                    method: 'PUT',
                    url: '/services/editService',
                    headers: {
                        Authorization: "barer" + " " + localStorage.getItem("token")
                    },
                    params: {
                        id: this.$route.query.id
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