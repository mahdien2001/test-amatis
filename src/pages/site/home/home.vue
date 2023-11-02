<template>
  <div>

    <!-- plans -->
    <div class="d-flex flex-column justify-space-between my-3">
      <v-card width="95%" class="d-flex align-center pa-1 my-2 mx-auto" to="/tourist_category">
        <img width="100px" height="85px" src="../../../assets/images/hiking.jpg" />
        <div>
          <v-card-title class="subtitle-1">توریست</v-card-title>
          <v-card-text class="caption"> با طبیعت و مکان های توریستی طرقبه بیشتر آشنا شوید.</v-card-text>
        </div>
      </v-card>

      <v-card width="95%" class="d-flex align-center pa-1 my-2 mx-auto" to="product_category">
        <img width="100px" height="85px" src="../../../assets/images/local-produce.jpg" />
        <div>
          <v-card-title class="subtitle-1">محصولات</v-card-title>
          <v-card-text class="caption">محصولات محلی طرقبه را بدون واسطه از اینجا پیدا کنید.</v-card-text>
        </div>
      </v-card>

      <v-card width="95%" class="d-flex align-center pa-1 my-2 mx-auto" to="/services_category">
        <img width="100px" height="85px" src="../../../assets/images/service2.jpg" />
        <div>
          <v-card-title class="subtitle-1">خدمات</v-card-title>
          <v-card-text class="caption">خدمات مورد نیاز خود را در شهر طرقبه در کمترین زمان از اینجا پیدا
            کنید.</v-card-text>
        </div>
      </v-card>
    </div>


    <!-- slider 1 -->
    <div class="mt-10">
      <center v-if="products.length > 0" class="">
        <h3>محصولات محلی</h3>
      </center>
      <swiper ref="mySwiper" :options="homeslider" class="px-2">
        <swiper-slide v-for="p in products" :key="p._id" class="py-2 pb-8">
          <v-card height="230px" :to="{ path: 'product', query: { id: p._id } }">
            <v-img height="120px" :src="$hostname + p.image1"></v-img>
            <v-card-subtitle>{{ p.name }}</v-card-subtitle>
            <div class="caption px-2">
              قیمت ({{ p.priceType }}) : {{ p.price }} تومان
            </div>
          </v-card>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>


    <!-- slider 2 -->
    <div class="mt-10">
      <center v-if="services.length > 0" class="">
        <h3>اخرین خدمات</h3>
      </center>
      <swiper ref="mySwiper" :options="homeslider" class="px-2">
        <swiper-slide v-for="s in services" :key="s._id" class="py-2 pb-8">
          <v-card height="230px" :to="{ path: 'service', query: { id: s._id } }">
            <v-img height="120px" :src="$hostname + s.image1"></v-img>
            <v-card-subtitle>{{ s.name }}</v-card-subtitle>
            <v-card-text>{{ s.description }}</v-card-text>
          </v-card>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

  </div>
</template>

<script src="./home.js"></script>