<template>
  <div>

    <!-- user -->
    <v-card width="100%" class="pa-2 mb-5 d-flex align-centre">
      <v-icon class="mx-2" color="primary" x-large>mdi-account</v-icon>
      <div class="d-flex flex-column align-start">
        <span class="title">{{ user.username }}</span>
        <span class="subtitle-2">{{ user.phone }}</span>
      </div>
    </v-card>

    <div class="ma-3">

      <v-alert v-if="messages" outlined type="error" prominent border="left">
        <div class="subtitle-1">شما {{ messages }} پیام خوانده نشده از طرف ادمین دارید</div>
      </v-alert>

      <v-alert outlined type="success" prominent border="left">
        <div class="subtitle-1">شما {{ products }} محصول در محلیشو ثبت کرده اید</div>
        <div class="caption">{{ 3 - products }} محصول دیگر میتوانید ثبت کنید</div>
      </v-alert>

      <v-alert outlined type="info" prominent border="left">
        <div class="subtitle-1">شما {{ services }} خدمت در محلیشو ثبت کرده اید</div>
        <div class="caption">{{ 3 - services }} خدمت دیگر میتوانید ثبت کنید</div>
      </v-alert>


      <!-- <hr> -->
      <h3 class="mt-10 mb-5" style="text-align:center;color:gray">لینک های محبوب</h3>

      <ul class="px-6">
        <li class="my-3">محصولاتم را چطور وارد کنم که توجه مخاطب را به خود جلب کند ؟</li>
        <li class="my-3">اولین لینک محبوب بری یوزر ها</li>
        <li class="my-3">محصولاتم را چطور وارد کنم که توجه مخاطب را به خود جلب کند ؟</li>
      </ul>
    </div>
    
  </div>
</template>

<script src="./user_home.js"></script>