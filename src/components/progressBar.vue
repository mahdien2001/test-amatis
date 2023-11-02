<template>
      <div id="progress" v-if="$store.state.progress">
      <v-progress-circular
        id="proggres-circle"
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
      <div class="caption mt-2"> لطفا کمی صبر کنید</div>
     
    </div>
</template>

<style scoped>
#progress {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#proggres-circle {
  z-index: 11;
}
</style>