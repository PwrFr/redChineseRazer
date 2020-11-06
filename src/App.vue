<template>
  <MenuBar />
  <imageRow 
    bgImgRow="../src/assets/home/1.jpg"
    title="EARN RAZER GIFT CARDS AT RAZERSTORE"
    discription="Shop Now"
    />
    <imageRow 
    bgImgRow="../src/assets/home/2.jpg"
    title="PERFORMANCE MEETS PRODUCTIVITY."
    discription="Shop The New Razer Book 13"
    />
    <imageRow 
    bgImgRow="../src/assets/home/3.jpg"
    title="CONSOLE. MOBILE. COMBINED."
    discription="Shop Razer Kaira Pro for Xbox"
    />

  <imgCol 
    bgImgCL="../src/assets/home/4L.jpg"
    titleCL="Cyberpunk 2077 Edition"
    discriptionCL="Razer.com Exclusive. Shop Now "
    bgImgCR="../src/assets/home/4R.jpg"
    titleCR="asd"
    discriptionCR="asd"
  />

 
  
</template>

<script>

import MenuBar from "./components/MenuBar.vue";
import ProductSlot from "./components/ProductSlot.vue";
import imageRow from "./components/ImageRow.vue"
import imgCol from "./components/imgCol.vue"

export default {
  name: "App",
  components: {
    MenuBar,
    imageRow,
    imgCol,
    ProductSlot
  }
};
</script>
