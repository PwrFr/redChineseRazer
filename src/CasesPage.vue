<template>
  <MenuBar />
  <div v-if="caseTrue != 0">
    <ProductSlot
      class="mt-5"
      imageAmount="6"
      imageTab1="/src/assets/products/3Cases/ATX/bar/1.jpg"
      imageTab2="/src/assets/products/3Cases/ATX/bar/2.jpg"
      imageTab3="/src/assets/products/3Cases/ATX/bar/3.jpg"
      imageTab4="/src/assets/products/3Cases/ATX/bar/4.jpg"
      imageTab5="/src/assets/products/3Cases/ATX/bar/5.jpg"
      imageTab6="/src/assets/products/3Cases/ATX/bar/6.jpg"
      backgroundSrc="/src/assets/products/3Cases/ATX/1.jpg"
      imageLocateSrc="/src/assets/products/3Cases/ATX/"
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
    <Row3
      casesRow3Img="/src/assets/products/3Cases/row3.jpg"
      casesRow3Header="DUAL-SIDED TEMPERED GLASS SWIVEL DOORS"
      casesRow3Des="Installing new parts has never been this convenient or straightforward, with forward-opening doors that can also be detached for more room to focus on your build. Made of tough, tempered glass, they offer the perfect protection while showing off the power and performance of Chroma-enabled hardware within."
      paddingTopInput="10"
      heightRow3Input="599"
    />
    <Row4 />
    <Row3
      casesRow3Img="/src/assets/products/3Cases/row5.jpg"
      casesRow3Header="FRONT PANEL CONNECTIVITY"
      casesRow3Des="The Razer Tomahawk’s front panel is designed for convenient setup, sporting the latest USB 3.2 Gen 2 Type-C port for faster connection with the latest devices, a dedicated mic port for streamers, a mic/headphone combo port, and 2 standard USB Type-A ports."
      paddingTopInput="11.8"
      heightRow3Input="597"
    />
    <Row6 />
    <Row7 />
    <Row8 />
    <Row9 />

    <Footer />
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import ProductSlot from "./components/ProductSlot.vue";
import Footer from "./components/Footer.vue";
import datas from "./assets/data.json";
import { global } from "./components/ProductSlot.vue";
import VideoSession from "./components/CasesPage/casesVideo.vue";
import Row1 from "./components/CasesPage/casesRow1.vue";
import Row2 from "./components/CasesPage/casesRow2.vue";
import Row3 from "./components/CasesPage/casesRow3.vue";
import Row4 from "./components/CasesPage/casesRow4.vue";
import Row6 from "./components/CasesPage/casesRow6.vue";
import Row7 from "./components/CasesPage/casesRow7.vue";
import Row8 from "./components/CasesPage/casesRow8.vue";
import Row9 from "./components/CasesPage/casesRow9.vue";
//Row5 use same component with row3
//import TechSpec from "./components/CasesPage/techSpecCase.vue";

export default {
  mixins: [global],
  props: {},
  name: "CasesPage",
  components: {
    ProductSlot,
    MenuBar,
    VideoSession,
    Row1,
    Row2,
    Row3,
    Row4,
    Row6,
    Row7,
    Row8,
    Row9,
    //TechSpec,
    Footer,
  },
  data() {
    return {
      caseTrue: 2,
      headerJson: datas.Cases[1].name,
      desJson: datas.Cases[1].des,
      priceJson: datas.Cases[1].price,
      detailAmountJson: datas.Cases[1].detail.length,
      detailJson1: datas.Cases[1].detail[0],
      detailJson2: datas.Cases[1].detail[1],
      detailJson3: datas.Cases[1].detail[2],
      modelItemAmount: datas.Cases[1].model.length,
      modelFirstNameJson: datas.Cases[1].model[1],
      modelItem1: datas.Cases[1].model[0],
      modelItem2: datas.Cases[1].model[1],
      modelItem3: datas.Cases[1].model[2],
    };
  },
  created() {
    console.log(datas.monitors[0].name);
  },
  methods: {
    kuy() {
      caseTrue = 0;
      alert("kuy");
    },
  },
};
</script>
