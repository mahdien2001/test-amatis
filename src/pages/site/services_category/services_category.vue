<template>
  <div>
    <v-card :to="{ path: '/services', query: { cat: c.slug } }" v-for="c in cats" :key="c._id"
      class="d-flex align-center px-2 ma-2">
      <v-icon color="primary">{{ c.icon }}</v-icon>
      <v-card-subtitle>{{ c.catname }}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script src="./services_category.js"></script>