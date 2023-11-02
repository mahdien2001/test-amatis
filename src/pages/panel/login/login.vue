<template>
  <div class="mx-3 my-16">
    <v-card class="px-5 py-10">
      <center class="title mb-10">ورود به حساب</center>
      <v-text-field type="number" label="شماره همراه" outlined autofocus v-model="phone"></v-text-field>
      <v-text-field type="number" label="رمز عبور" outlined v-model="password"></v-text-field>

      <v-btn @click="login()" width="100%" color="primary">ورود</v-btn>

      <v-btn depressed color="#fff" class="caption d-flex mx-auto mt-5" to="/register">حساب ندارید؟ آن را ایجاد
        کنید</v-btn>

    </v-card>
  </div>
</template>

<script src="./login.js"></script>