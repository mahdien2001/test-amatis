<template>
  <div>
    <v-card :to="{ path: '/tourist', query: { id: t._id } }" v-for="t in tourists.tourists" :key="t._id"
      class="d-flex align-center pa-2 ma-2">
      <v-img width="100px" max-width="100px" height="90px" max-height="90px" :src="$hostname + t.image1"></v-img>
      <div class="d-flex flex-column">
        <span class="font-italic"
          style="position:absolute; top:3px; left:3px; color:gray; font-size:11px ">{{ t.user.username }}</span>
        <h4 class="pa-2 mt-3">{{ t.name }}</h4>
        <v-card-text class="d-inline-block text-truncate" style="max-width: 250px;">
          {{ t.description }}
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script src="./tourists.js"></script>