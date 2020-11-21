<template>
  <MenuBar />
  <div>
    <ProductSlot
      class="mt-5"
      imageAmount="5"
      imageTab1="/src/assets/products/4Monitors/productImage/bar/1.jpg"
      imageTab2="/src/assets/products/4Monitors/productImage/bar/2.jpg"
      imageTab3="/src/assets/products/4Monitors/productImage/bar/3.jpg"
      imageTab4="/src/assets/products/4Monitors/productImage/bar/4.jpg"
      imageTab5="/src/assets/products/4Monitors/productImage/bar/5.jpg"
      backgroundSrc="/src/assets/products/4Monitors/productImage/1.jpg"
      imageLocateSrc="/src/assets/products/4Monitors/productImage/"
      :headerText="headerJson"
      :headerDes="desJson"
      :priceText="priceJson"
      :desAmount="detailAmountJson"
      :description1="detailJson1"
      :description2="detailJson2"
      :description3="detailJson3"
      modelBoxDisappear="1"
      :modelAmount="modelItemAmount"
      modelLink1="https://fb.com"
      modelLink2="https://www.youtube.com/watch?v=-m4ge-XdCiA"
      modelLink3="https://www.youtube.com"
      :modelName1="modelItem1"
      :modelName2="modelItem2"
      :modelName3="modelItem3"
      :modelFirstItem="modelFirstNameJson"
      :shippingDate="shipStatusJson"
      :buyingStatus="buttonJson"
      buyingAt="Also Available At"
    />

    <Footer />
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import ProductSlot from "./components/ProductSlot.vue";
import Footer from "./components/Footer.vue";
import datas from "./assets/data.json";

//Row5 use same component with row3
//import TechSpec from "./components/CasesPage/techSpecCase.vue";

export default {
  props: {},
  name: "MonitorPage",
  components: {
    ProductSlot,
    MenuBar,

    Footer
  },
  data() {
    return {
      headerJson: datas.monitors[0].name,
      desJson: datas.monitors[0].des,
      priceJson: datas.monitors[0].price,
      detailAmountJson: datas.monitors[0].detail.length,
      detailJson1: datas.monitors[0].detail[0],
      detailJson2: datas.monitors[0].detail[1],
      detailJson3: datas.monitors[0].detail[2],
      shipStatusJson: datas.monitors[0].ship_status,
      buttonJson: datas.monitors[0].add_to_card_bnt
    };
  },
  created() {
    console.log(datas.monitors[0].name);
  }
};
</script>
