<template>
  <div>

    <div class="ma-3">
      <!-- NAME -->
      <v-text-field class="mb-10" label="نام محصول" outlined v-model="name"></v-text-field>

      <!-- IMAGES -->
      <div class="caption mb-2">انتخاب تصویر مناسب و واقعی نقس بسزایی در معرفی محصول شما دارد.</div>

      <div class="d-flex mb-16">

        <div class="img-pack ma-2">
          <div class="over">
            <input type="file" accept="image/*" name="" id="input1" @change="(event) => handleImageUpload(event, '1')" />
          </div>
          <img class="image" id="img1" src="" alt="" />
        </div>

        <div class="img-pack ma-2">
          <div class="over">
            <input type="file" accept="image/*" name="" id="input2" @change="(event) => handleImageUpload(event, '2')" />
          </div>
          <img class="image" id="img2" src="" alt="" />
          <v-btn @click="remove_img(2)" outlined small class="remove" id="remove2" width="100%">حذف</v-btn>
        </div>

        <div class="img-pack ma-2">
          <div class="over">
            <input type="file" accept="image/*" name="" id="input3" class="remove"
              @change="(event) => handleImageUpload(event, '3')" />
          </div>
          <img class="image" id="img3" src="" alt="" />
          <v-btn @click="remove_img(3)" outlined small id="remove3" class="remove" width="100%">حذف</v-btn>
        </div>
      </div>

      <!-- DESC -->
      <div class="caption mb-2">جزییات و نکات مهم محصول خود را در این قسمت کامل بنویسید. طریقه قروش ساعات پاسخگویی را نیز
        درج کنید.</div>
      <v-textarea class="mb-10" outlined name="input-7-4" label="توضیحات محصول" v-model="desc"></v-textarea>

      <!-- PRICE -->
      <v-text-field label="قیمت" outlined v-model="price" type="number"></v-text-field>

      <!-- PRICE TYPE -->

      <div class="caption mb-2">واحدی که قیمت را بر اساس ان نوشته اید را بنویسید . مثلا : کیلو | بطری | کیسه | عدد و...
      </div>
      <v-text-field class="mb-10" label="واحد" outlined v-model="price_type"></v-text-field>

      <!-- ADDRESS -->
      <div class="caption mb-2">آدرس محلی که مایل به ارايه و فروش محصولتان هستید را بنویسید.</div>
      <v-textarea outlined name="input-7-4" label="آدرس" v-model="address"></v-textarea>

      <!-- ADD BTN -->
      <v-btn @click="edit()" class="mb-5" width="100%" color="secondary">ثبت تغییرات</v-btn>
    </div>



  </div>
</template>

<script src="./edit_product.js"></script>

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
}
</style>