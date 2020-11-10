<template>
  <MenuBar />

  <ProductSlot
    imageAmount="5"
    imageTab1="/src/assets/products/cases/bar/1.jpg"
    imageTab2="/src/assets/products/cases/bar/2.jpg"
    imageTab3="/src/assets/products/cases/bar/3.jpg"
    imageTab4="/src/assets/products/cases/bar/4.jpg"
    imageTab5="/src/assets/products/cases/bar/5.jpg"
    backgroundSrc="/src/assets/products/cases/1.jpg"
    imageLocateSrc="/src/assets/products/cases/"
    :headerText = test
    headerDes="Mini-ITX Gaming Chassis with Razer Chroma RGB"
    priceText="179.99"
    desAmount="3"
    description1="Dual-sided tempered glass swivel doors"
    description2="Powered by Razer Chroma™ RGB"
    description3="Ventilated top panel and dust filters"
    modelBoxDisappear="0"
    modelFirstItem="Tomahawk ATX"
    shippingDate="Ships on November 05, 2020"
    buyingStatus="Pre-Order"
    buyingAt="Also Available At"
  />
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import ProductSlot from "./components/ProductSlot.vue";
import datas from "./assets/data.json";

export default {
  name: "AppTestSlot",
  components: {
    ProductSlot
  },
  data(){
    return{
        test : datas.monitors[0].name
    }
  },
  created(){
      console.log(datas.monitors[0].name)
  }
  
};
</script>
