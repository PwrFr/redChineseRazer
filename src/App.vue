<template>
<<<<<<< HEAD
  <MenuBar  />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <ImageRow />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MenuBar from './components/MenuBar.vue'
import ImgRow from './components/ImageRow.vue'
=======
  <MenuBar />
  <ProductSlot
    imageTab1="/src/assets/products/cases/bar/1.jpg"
    imageTab2="/src/assets/products/cases/bar/2.jpg"
    imageTab3="/src/assets/products/cases/bar/3.jpg"
    imageTab4="/src/assets/products/cases/bar/4.jpg"
    imageTab5="/src/assets/products/cases/bar/5.jpg"
    backgroundSrc="/src/assets/products/cases/1.jpg"
    imageLocateSrc="/src/assets/products/cases/"
    headerText="Razer Tomahawk Mini-ITX"
    headerDes="Mini-ITX Gaming Chassis with Razer Chroma RGB"
    priceText="179.99"
    description1="Dual-sided tempered glass swivel doors"
    description2="Powered by Razer Chroma™ RGB"
    description3="Ventilated top panel and dust filters"
    shippingDate="Ships on November 05, 2020"
    buyingStatus="Pre-Order"
  />
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import ProductSlot from "./components/ProductSlot.vue";
>>>>>>> 7f90347171924c5a61e3f3c2fe86812bbc12728c

export default {
  name: "App",
  components: {
<<<<<<< HEAD
    HelloWorld,
    MenuBar,
    ImgRow
=======
    MenuBar,
    ProductSlot
>>>>>>> 7f90347171924c5a61e3f3c2fe86812bbc12728c
  }
};
</script>
