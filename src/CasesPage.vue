<template>
  <MenuBar />

  <ProductSlot
    class="mt-5"
    imageAmount="6"
    imageTab1="/src/assets/products/cases/bar/1.jpg"
    imageTab2="/src/assets/products/cases/bar/2.jpg"
    imageTab3="/src/assets/products/cases/bar/3.jpg"
    imageTab4="/src/assets/products/cases/bar/4.jpg"
    imageTab5="/src/assets/products/cases/bar/5.jpg"
    backgroundSrc="/src/assets/products/cases/1.jpg"
    imageLocateSrc="/src/assets/products/cases/"
    :headerText="headerJson"
    :headerDes="desJson"
    :priceText="priceJson"
    desAmount="3"
    :description1="detailJson1"
    :description2="detailJson2"
    :description3="detailJson3"
    modelBoxDisappear="0"
    modelFirstItem="Tomahawk ATX"
    shippingDate="Ships on December 03, 2020"
    buyingStatus="PRE-ORDER"
    buyingAt
  />
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import ProductSlot from "./components/ProductSlot.vue";
import datas from "./assets/data.json";

export default {
  name: "CasesPage",
  components: {
    ProductSlot,
    MenuBar
  },
  data() {
    return {
      headerJson: datas.Cases[1].name,
      desJson: datas.Cases[1].des,
      priceJson: datas.Cases[1].price,
      detailJson1: datas.Cases[1].detail[0],
      detailJson2: datas.Cases[1].detail[1],
      detailJson3: datas.Cases[1].detail[2]
    };
  },
  created() {
    console.log(datas.monitors[0].name);
  }
};
</script>
