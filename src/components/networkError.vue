<template>
    <v-dialog persistent v-model="$store.state.network_err" width="500">
  <v-card>
    <v-card-title class="grey lighten-2">
      <v-icon color="primary">mdi-network-strength-4-alert</v-icon>
    </v-card-title>
    <br>
    <v-card-text style="color:black">مشکلی پیش آمده</v-card-text>
    <v-card-subtitle class="caption"> اتصال اینترنت خود را بررسی کنید </v-card-subtitle>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn style="font-family:'samim'" color="primary" text @click="reload()"> تلاش مجدد </v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>

export default{
name: "App",

data: () => ({
}),

mounted() {

},

methods:{
reload(){
  window.location.reload()
}
}
};
</script>