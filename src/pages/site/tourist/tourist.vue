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

    <!-- tourist's cards -->
    <v-card width="100%" flat class="pa-2">
      <!-- title -->
      <h2>{{ tourist.name }}</h2>

      <!-- subtitle -->
      <div class="d-flex justify-space-between my-2">
        <span class="subtitle-2">{{ tourist.user.username }}</span>
        <span class="subtitle-2">{{
          new Date(tourist.createdAt).toLocaleDateString("fa-IR")
        }}</span>
      </div>

      <hr>

      <!-- description -->
      <v-card-title>توضیحات</v-card-title>
      <v-card-subtitle style="white-space: pre-line;">
        {{ tourist.description }}
      </v-card-subtitle>
      <hr>

      <!-- connect user -->
      <v-card-title>آدرس</v-card-title>
      <v-card-subtitle>
        {{ tourist.address }}
      </v-card-subtitle>

    </v-card>

  </div>
</template>

<script src="./tourist.js"></script>