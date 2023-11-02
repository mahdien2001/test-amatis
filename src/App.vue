<template>
  <v-app>

    <!-- proggrsbar -->
    <progressBar />

    <!-- network error -->
    <networkError />

    <!-- MAIN -->
    <v-main class="mb-15">
      <top_nav></top_nav>
      <router-view></router-view>
    </v-main>

    <!-- BOTTOM NAV -->
    <bottom_nav v-if="
      $route.path !== '/user_home' &&
      $route.path !== '/user_products' &&
      $route.path !== '/edit_product' &&
      $route.path !== '/add_product' &&
      $route.path !== '/messages'">
    </bottom_nav>

    <user_bottom_menu v-if="
      $route.path === '/user_home' ||
      $route.path === '/user_products' ||
      $route.path === '/add_product' ||
      $route.path === '/edit_product' ||
      $route.path === '/messages'

    "></user_bottom_menu>

  </v-app>
</template>

<style>
@font-face {
  font-family: free;
  src: url(./assets/Mj_Free/Mj_Free_0.ttf);
}

@font-face {
  font-family: samim;
  src: url(./assets/samim-font-v4.0.5/Farsi-Digits/Samim-Medium-FD.ttf);
}

body {
  overflow: hidden;
}

.v-application .v-application--wrap * {
  font-family: samim;

}

.v-application .subtitle-1,
.v-application .subtitle-2,
.v-application .caption {
  font-family: samim !important;

}

.toasted {
  direction: rtl;
  font-family: samim !important;
  font-size: 12px !important;
}
</style>

<script>
import bottom_nav from './components/bottom_nav';
import user_bottom_menu from './components/user_bottom_menu';
import networkError from "./components/networkError";
import progressBar from "./components/progressBar";
import top_nav from "./components/top_nav";

export default {
  name: 'App',

  components: {
    bottom_nav,
    user_bottom_menu,
    top_nav,
    networkError,
    progressBar
  },

  data: () => ({
    //
  }),

  mounted() {
    this.check_token()
  },

  methods: {

    // check token & redirect
    check_token() {
      let token = localStorage.getItem('token')
      if (!token) {
        console.log('first');
        if (this.$route.path.includes('edit') || this.$route.path.includes('add') ||
          this.$route.path.includes('user')) {
          this.$router.push('/login')
          console.log("sec");
        }
      }
    }
  }
};
</script>
