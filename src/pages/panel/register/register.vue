<template>
  <div class="mx-3 my-16">
    <v-card class="px-5 py-10">
      <center class="title mb-10">ایجاد حساب</center>
      <v-text-field label="نام" outlined autofocus v-model="name"></v-text-field>

      <v-text-field label="شماره همراه" type="number" outlined v-model="phone"></v-text-field>

      <v-text-field label="رمز عبور" outlined type="number" v-model="password"></v-text-field>

      <v-btn width="100%" color="primary" @click="register()">ثبت نام</v-btn>

      <v-btn depressed color="#fff" class="caption d-flex mx-auto mt-5" to="/login">حساب کاربری دارید؟کلیک کنید</v-btn>

    </v-card>
  </div>
</template>

<script src="./register.js"></script>