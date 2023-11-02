<template>
  <div>

    <v-tabs fixed-tabs style="position : sticky ; top: 56px ; z-index : 5">

      <v-tab @click="get_products()">
        محصولات
      </v-tab>
      <v-tab @click="get_services()">
        خدمات
      </v-tab>
    </v-tabs>

    <!-- products -->
    <v-card v-for="p in products.products" :key="p._id" class="pa-2 ma-3">
      <div class="d-flex align-center ">
        <v-img width="80px" max-width="80px" height="70px" max-height="70px" :src="$hostname + p.image1"></v-img>
        <div class="d-flex flex-column">
          <span class="font-italic" style="position:absolute; top:3px; left:3px; color:gray; font-size:12px ">
            {{
              new Date(p.createdAt).toLocaleDateString("fa-IR")
            }}
          </span>
          <v-card-subtitle>{{ p.name }}</v-card-subtitle>
        </div>
      </div>

      <div class="d-flex justify-end mt-0">
        <v-btn @click="open_delete('product', p._id)" tile text color="red lighten-3">حذف </v-btn>
        <v-btn :to="{ path: '/edit_product', query: { id: p._id } }" tile text color="primary">ویرایش </v-btn>
      </div>

      <v-alert v-if="p.isActive === false" outlined type="warning" border="left" dense class="caption">
        این محصول پس از تایید در اپلیکیشن نمایش داده خواهد شد.
      </v-alert>

    </v-card>

    <center class="mt-10" v-if="products.products && products.products.length === 0">موردی پیدا نشد</center>
    <center class="mt-10" v-if="services.services && services.services.length === 0">موردی پیدا نشد</center>


    <!-- service -->
    <v-card v-for="p in services.services" :key="p._id" class="pa-2 ma-3">
      <div class="d-flex align-center ">
        <v-img width="100px" max-width="100px" height="90px" max-height="90px" :src="$hostname + p.image1"></v-img>
        <div class="d-flex flex-column">
          <span class="font-italic" style="position:absolute; top:3px; left:3px; color:gray; font-size:12px ">
            {{
              new Date(p.createdAt).toLocaleDateString("fa-IR")
            }}
          </span>
          <v-card-title>{{ p.name }}</v-card-title>
        </div>
      </div>
      <div class="d-flex justify-end mt-2">
        <v-btn @click="open_delete('service', p._id)" tile text color="red lighten-3">حذف </v-btn>
        <v-btn :to="{ path: '/edit_service', query: { id: p._id } }" tile text color="primary">ویرایش </v-btn>
      </div>
      <v-alert v-if="p.isActive === false" outlined type="warning" border="left" dense>
        این خدمت پس از تایید در اپلیکیشن نمایش داده خواهد شد.
      </v-alert>

    </v-card>

    <!-- confirm -->
    <v-dialog v-model="dialog" persistent max-width="290">

      <v-card class="pt-5">
        <v-card-text>
          از حذف این پست مطمعن هستید ؟‌
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="dialog = false">
            لغو
          </v-btn>
          <v-btn color="red darken-1" text @click="delete_post()">
            حذف
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- choose type dialog -->
    <v-dialog v-model="type_dialog" width="500">
      <v-card>
        <!-- <v-card-title class="text-h5 grey lighten-2">
      
      </v-card-title> -->
        <div class="pa-5"> چه نوع پستی می خواهید ثبت کنید ؟
        </div>
        <hr>

        <div class="d-flex flex-column pa-10">
          <v-btn large to="/add_product" class="my-2" outlined color="primary">محصول</v-btn>
          <v-btn large to="/add_service" class="my-2" outlined color="secondary">خدمت</v-btn>
        </div>

        <v-card-text>
          در صورت انتخاب هرکدام از گزینه های بالا پست شما در همان دسته بندی ها نمایش داده خواهد شد.
          <br>
          <v-btn class="mt-3" text color="primary">اطلاعات بیشتر برای نحوه ثبت پست</v-btn>
        </v-card-text>

      </v-card>
    </v-dialog>


    <v-btn @click="type_dialog = true" fixed bottom right fab style="bottom:80px" color="secondary"><v-icon
        large>mdi-plus</v-icon></v-btn>
  </div>
</template>

<script src="./user_products.js"></script>