<template>
    <div>

       <!-- toolbar -->
       <!-- <v-toolbar
       color="primary"
       dark
       style="position : sticky ; top: 0px ; z-index : 5"
     >
       <v-app-bar-nav-icon></v-app-bar-nav-icon>
       <v-toolbar-title>افزودن خدمت</v-toolbar-title>
       <v-spacer></v-spacer>
       <v-icon @click="$router.go(-1)">mdi-arrow-left</v-icon>
     </v-toolbar> -->

    <div class="ma-3">

        <!-- CATEGORY -->
      <div class="caption mb-2">دسته بندی مرتبط با خدمت خود را انتخاب کنید</div>

        <v-select
        v-model="cat"
        class="mb-10"
        :items="cats"
        label="دسته بندی خدمت"
        outlined
        item-text="catname"
        item-value="slug"
      ></v-select>

      <!-- IMAGES -->
      <div class="mb-1">انتخاب تصویر</div>
      <div class="caption mb-2">انتخاب تصویر مناسب و واقعی نقش بسزایی در معرفی خدمت شما دارد.</div>
      
      <div class="d-flex mb-16">
        <div class="img-pack ma-2 d-flex align-center justify-center">
          +
          <div class="over">
            <input
              type="file"
              accept="image/*"
              name=""
              id="input1"
              @change="(event) => handleImageUpload(event, '1')"
            />
          </div>
          <img class="image" id="img1" src="" alt="" />
        </div>
  
        <div class="img-pack ma-2 d-flex align-center justify-center">
          +
          <div class="over">
            <input
              type="file"
              accept="image/*"
              name=""
              id="input2"
              @change="(event) => handleImageUpload(event, '2')"
            />
          </div>
          <img class="image" id="img2" src="" alt="" />
          <v-btn
            @click="remove_img(2)"
            outlined
            small
            class="remove"
            id="remove2"
            width="100%"
            >حذف</v-btn
          >
        </div>
  
        <div class="img-pack ma-2 d-flex align-center justify-center">
          +
          <div class="over">
            <input
              type="file"
              accept="image/*"
              name=""
              id="input3"
              @change="(event) => handleImageUpload(event, '3')"
            />
          </div>
          <img class="image" id="img3" src="" alt="" />
          <v-btn
            @click="remove_img(3)"
            outlined
            small
            class="remove"
            id="remove3"
            width="100%"
            >حذف</v-btn
          >
        </div>
      </div>

      <!-- NAME -->
      <v-text-field
      class="mb-10"
            label="نام خدمت"
            outlined
            v-model="name"
          ></v-text-field>

          <!-- DESC -->
          <div class="caption mb-2">جزییات و نکات مهم خدمت خود را در این قسمت کامل بنویسید. طریقه قروش ساعات پاسخگویی را نیز درج کنید.</div>
          <v-textarea
      class="mb-10"
          outlined
          name="input-7-4"
          label="توضیحات خدمت"
          v-model="desc"
        ></v-textarea>

           <!-- ADDRESS -->
           <div class="caption mb-2">آدرس محلی که مایل به ارايه و فروش خدمتتان هستید را بنویسید.</div>
           <v-textarea
           outlined
           name="input-7-4"
           label="آدرس"
           v-model="address"
         ></v-textarea>

         <!-- ADD BTN -->
         <v-btn class="mb-5" width="100%" color="secondary" @click="add()">ثبت خدمت</v-btn>

    </div>


    </div>
</template>

<script src="./add_service"></script>

<style scoped>
/* image pack */
.img-pack {
  border: 1px solid gray;
  border-radius: 5px;
  width: 100px;
  height: 100px;
  position: relative;
}
.over {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: #0000003a;
  z-index: 2;
}
.over input {
  width: 100%;
  height: 100%;
  z-index: 3;
  opacity: 0;
}
.image {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.remove {
  border: 2px solid rgb(136, 0, 0);
  background: rgba(171, 0, 0, 0.544);
  position: absolute;
  bottom: 0px;
  z-index: 3;
  color: #fff;
  display: none;
}
</style>