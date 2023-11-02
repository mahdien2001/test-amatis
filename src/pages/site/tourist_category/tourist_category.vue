<template>
  <div>
    <div class="d-flex flex-wrap">
      <v-card v-for="c in cats" :key="c._id" width="45%" class="d-flex flex-column align-center mr-3 mt-3"
        :to="{ path: '/tourists', query: { cat: c.slug } }">
        <v-img height="80px" contain :src="$hostname + c.image"></v-img>
        <v-card-subtitle>{{ c.catname }}</v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>
<script src="./tourist_category.js"></script>