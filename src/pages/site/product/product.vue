<template>
  <div>

    <!-- slider -->
    <v-carousel height="250px" hide-delimiter-background>
      <v-carousel-item v-for="i in images" :key="i">
        <v-sheet>
          <img width="100%" height="100%" :src="$hostname + i" alt="">
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- product cards -->
    <v-card width="100%" flat class="pa-2">
      <!-- title -->
      <h2>{{ product.name }}</h2>

      <!-- subtitle -->
      <div class="d-flex justify-space-between my-2">
        <span class="subtitle-2" v-if="product.user">{{ product.user.username }}</span>
        <span class="subtitle-2">{{
          new Date(product.createdAt).toLocaleDateString("fa-IR")
        }}</span>
      </div>

      <hr>
      <!-- price -->
      <div class="my-3">
        قیمت ({{ product.priceType }}) : {{ product.price }} تومان
      </div>
      <hr>

      <!-- description -->
      <v-card-title>توضیحات</v-card-title>
      <v-card-subtitle style="  white-space: pre-line;">
        {{ product.description }}
      </v-card-subtitle>

      <hr>

      <!-- connect user -->
      <v-card-title>آدرس</v-card-title>
      <v-card-subtitle>{{ product.address }}</v-card-subtitle>

      <v-card-title>شماره های تماس</v-card-title>
      <v-card-subtitle class="py-1" v-if="product.user">{{ product.user.phone }}</v-card-subtitle>
    </v-card>

  </div>
</template>

<script src="./product.js"></script>