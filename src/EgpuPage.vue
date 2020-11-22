<template>
  <MenuBar />
  <div>
    <ProductSlot
      class="mt-5"
      imageAmount="5"
      imageTab1="/src/assets/img/eGPUs/Chroma/s1.jpg"
      imageTab2="/src/assets/img/eGPUs/Chroma/s2.jpg"
      imageTab3="/src/assets/img/eGPUs/Chroma/s3.jpg"
      imageTab4="/src/assets/img/eGPUs/Chroma/s4.jpg"
      imageTab5="/src/assets/img/eGPUs/Chroma/s5.jpg"
      backgroundSrc="/src/assets/img/eGPUs/Chroma/1.jpg"
      imageLocateSrc="/src/assets/img/eGPUs/Chroma/"
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
      :shippingDate="shipStatusJson"
      :buyingStatus="buttonJson"
      buyingAt="Also Available At"
      whiteSelecterText="2"
    />
    <techSpecEgpu />
    <Footer />
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import ProductSlot from "./components/ProductSlot.vue";
import Footer from "./components/Footer.vue";
import datas from "./assets/data.json";
import techSpecEgpu from "./components/techSpecEgpuChroma.vue";

//Row5 use same component with row3

export default {
  props: {},
  name: "EgpuPage",
  components: {
    ProductSlot,
    MenuBar,
    techSpecEgpu,
    Footer,
  },
  data() {
    return {
      headerJson: datas.eGPU[2].name,
      desJson: datas.eGPU[2].des,
      priceJson: datas.eGPU[2].price,
      detailAmountJson: datas.eGPU[2].detail.length,
      detailJson1: datas.eGPU[2].detail[0],
      detailJson2: datas.eGPU[2].detail[1],
      detailJson3: datas.eGPU[2].detail[2],
      shipStatusJson: datas.eGPU[2].ship_status,
      buttonJson: datas.eGPU[2].add_to_card_bnt,
      modelItemAmount: datas.eGPU[2].model.length,
      modelFirstNameJson: datas.eGPU[2].model[2],
      modelItem1: datas.eGPU[2].model[0],
      modelItem2: datas.eGPU[2].model[1],
      modelItem3: datas.eGPU[2].model[2],
    };
  },
  created() {
    console.log(datas.monitors[0].name);
  },
};
</script>
