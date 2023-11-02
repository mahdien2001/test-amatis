<template>
    <div>
           <v-card
      class="mx-auto"
      tile
      style="position : sticky ; top: 0px ; z-index : 5"
    >
      <v-app-bar
      color="primary"
      dark
      style="position : sticky ; top: 0px ; z-index : 5"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>{{page_title}}</v-toolbar-title>
        <center  v-if="this.$route.path.includes('/home')" class="mx-auto" style="position : absolute; left : 40% ; right : 40%;font-family:free ; color : #22577a ; font-weight : 800;font-size : 35px">محله</center>
        <v-spacer></v-spacer>
        <v-icon @click="$router.go(-1)">mdi-arrow-left</v-icon> 
      </v-app-bar>
  
      <v-navigation-drawer
        v-model="drawer"
        height="100vh"
        absolute
        right
        temporary
      >

      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>
              <h2 class="mx-auto" style="font-family:free ; color : #22577a ; font-weight : 800;font-size : 35px">محله</h2>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="primary--text text--accent-4"
          >
            <v-list-item to="aboutus">
              <v-icon class="ml-2" color="secondary" small>mdi-information</v-icon>
              <v-list-item-title>درباره اپلیکیشن محله</v-list-item-title>
            </v-list-item>
            
            <v-list-item to="guide">
              <v-icon class="ml-2" color="secondary" small>mdi-help-circle</v-icon>
              <v-list-item-title>راهنما استفاده از اپلیکیشن محله</v-list-item-title>
            </v-list-item>

            <v-list-item to="contactus">
              <v-icon class="ml-2" color="secondary" small>mdi-cast-connected</v-icon>
              <v-list-item-title>ارتباط با ما</v-list-item-title>
            </v-list-item>
  
            <v-list-item to="faq">
              <v-icon class="ml-2" color="secondary" small>mdi-frequently-asked-questions</v-icon>
              <v-list-item-title>سوالات متداول</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
  
    </v-card>
    </div>
 
  </template>

  <script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      page_title :'',
    }),

    watch: {
      group () {
        this.drawer = false
      },

      $route() {
    this.set_page_title()
   
    },

    },

    mounted(){
        this.set_page_title()
        },

    methods:{
        set_page_title(){
            if (this.$route.path.includes("/home")) {
        this.page_title = "";
      }

      if (this.$route.path.includes("/product")) {
        this.page_title = "جزییات محصول";
      }
      if (this.$route.path.includes("/products")) {
        this.page_title = "محصولات";
      }
      if (this.$route.path.includes("/product_category")) {
        this.page_title = "دسته بندی محصولات";
      }

      if (this.$route.path.includes("/service")) {
        this.page_title = "جزییات خدمت";
      }
      if (this.$route.path.includes("/services")) {
        this.page_title = "خدمات";
      }
      if (this.$route.path.includes("/services_category")) {
        this.page_title = "دسته بندی خدمات";
      }

      if (this.$route.path.includes("/tourist")) {
        this.page_title = "جزییات توریست";
      }
      if (this.$route.path.includes("/tourists")) {
        this.page_title = "توریست ها";
      }
      if (this.$route.path.includes("/tourist_category")) {
        this.page_title = "دسته بندی توریست ها";
      }

      if (this.$route.path.includes("/aboutus")) {
        this.page_title = "درباره ما";
      }
      if (this.$route.path.includes("/contactus")) {
        this.page_title = "ارتباط با ما";
      }
      if (this.$route.path.includes("/guide")) {
        this.page_title = "راهنمای استفاده از اپلیکیشن";
      }
      if (this.$route.path.includes("/faq")) {
        this.page_title = "سوالات متداول";
      }


      if (this.$route.path.includes("/user_home")) {
        this.page_title = "حساب کاربری";
      }
      if (this.$route.path.includes("/user_products")) {
        this.page_title = "محصولات من";
      }
      if (this.$route.path.includes("/add_product")) {
        this.page_title = "افزودن محصول";
      }
      if (this.$route.path.includes("/add_service")) {
        this.page_title = "افزودن خدمت";
      }
      if (this.$route.path.includes("/edit_product")) {
        this.page_title = "ویرایش محصول";
      }
      if (this.$route.path.includes("/edit_service")) {
        this.page_title = "ویرایش خدمت";
      }
      if (this.$route.path.includes("/messages")) {
        this.page_title = "پیام ها";
      }

        }
    }
  }
</script>