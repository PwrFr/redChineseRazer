<template>
  <MenuBar />
  <div v-if="caseTrue!=0">
    <ProductSlot
      class="mt-5"
      imageAmount="5"
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
      :desAmount="detailAmountJson"
      :description1="detailJson1"
      :description2="detailJson2"
      :description3="detailJson3"
      modelBoxDisappear="0"
      :modelAmount="modelItemAmount"
      modelLink1="https://fb.com"
      modelLink2="https://www.youtube.com/watch?v=-m4ge-XdCiA"
      modelLink3="https://www.youtube.com"
      :modelName1="modelItem1"
      :modelName2="modelItem2"
      :modelName3="modelItem3"
      :modelFirstItem="modelFirstNameJson"
      shippingDate="Ships on December 03, 2020"
      buyingStatus="PRE-ORDER"
      buyingAt
    />
    <VideoSession />
    <Row1 />
    <Row2 />
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import ProductSlot from "./components/ProductSlot.vue";
import datas from "./assets/data.json";
import { global } from "./components/ProductSlot.vue";
import VideoSession from "./components/CasesPage/casesVideo.vue";
import Row1 from "./components/CasesPage/casesRow1.vue";
import Row2 from "./components/CasesPage/casesRow2.vue";

export default {
  mixins: [global],
  props: {},
  name: "CasesPage",
  components: {
    ProductSlot,
    MenuBar,
    VideoSession,
    Row1,
    Row2
  },
  data() {
    return {
      caseTrue: 2,
      headerJson: datas.Cases[0].name,
      desJson: datas.Cases[0].des,
      priceJson: datas.Cases[0].price,
      detailAmountJson: datas.Cases[0].detail.length,
      detailJson1: datas.Cases[0].detail[0],
      detailJson2: datas.Cases[0].detail[1],
      detailJson3: datas.Cases[0].detail[2],
      modelItemAmount: datas.Cases[0].model.length,
      modelFirstNameJson: datas.Cases[0].model[0],
      modelItem1: datas.Cases[0].model[0],
      modelItem2: datas.Cases[0].model[1],
      modelItem3: datas.Cases[0].model[2]
    };
  },
  created() {
    console.log(datas.monitors[0].name);
  },
  methods: {
    kuy() {
      caseTrue = 0;
      alert("kuy");
    }
  }
};
</script>
