<template>
    <v-bottom-navigation
      color="primary"
      grow
      fixed
    >
        <v-btn height="100%" to="/user_home">
        <span>حساب</span>
        <v-icon>mdi-account</v-icon>
        </v-btn>

      <v-btn height="100%" to="/user_products">
        <span>محصولات من</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
  
      <v-btn height="100%" to="/messages">
        <span>پیام ها</span>
        <v-icon>mdi-email</v-icon>
      </v-btn>

      <v-btn height="100%" to="/home">
        <span>محله</span>
        <v-icon>mdi-application-import</v-icon>
      </v-btn>

    

    </v-bottom-navigation>
  </template>

  <script>
  export default {
    data: () => ({ value: 1 }),
  }
</script>