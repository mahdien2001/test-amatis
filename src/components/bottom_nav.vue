<template>
    <v-bottom-navigation
      color="primary"
      grow
      fixed
    >
    <v-btn height="100%" to="/home">
    <span>خانه</span>
    <v-icon>mdi-home</v-icon>
    </v-btn>

      <v-btn height="100%" to="/product_category">
        <span>محصولات</span>
        <v-icon>mdi-fruit-cherries</v-icon>
      </v-btn>
  
      <v-btn height="100%" to="/services_category">
        <span>خدمات</span>
        <v-icon>mdi-package-variant-closed</v-icon>
      </v-btn>

      <v-btn height="100%" to="/tourist_category">
        <span>توریست</span>
        <v-icon>mdi-bus-marker</v-icon>
      </v-btn>

      <v-btn height="100%" to="/login">
        <span>حساب</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </template>

  <script>
  export default {
    data: () => ({ value: 1 }),
  }
</script>