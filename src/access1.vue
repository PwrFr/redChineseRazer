<template>
  <ProductSlot />
  <headerAccesssProduct />
  <SideImgRowL
    bgimgRL="../src/assets/AC1/neoprene-sleeve-v2-protective.jpg"
    title="PROTECTIVE EXTERIOR AND PADDED INTERIOR"
    dis="Made of tough, water-resistant Neoprene, the sleeve protects your notebook from damage caused by impact or abrasion, while keeping your investment safe from the elements."
  />
  <SideImgRowR
    bgimgRR="../src/assets/AC1/neoprene-sleeve-v2-custom-fit.jpg"
    title="CUSTOM FIT FOR THE RAZER BLADE STEALTH 13"
    dis="Made to measure, every inch of the sleeve is designed to perfectly accommodate your Razer Blade Stealth 13, so you can carry the winning edge wherever you go."
  />
  <SideImgRowL
    bgimgRL="../src/assets/AC1/neoprene-sleeve-v2-ultra-slim.jpg"
    title="ULTRA-SLIM PROFILE"
    dis="Equipped with a sleek silhouette, the sleeve fits notebooks up to 13.3” and fastens them in with a zipper closure that keeps your gear securely in place, no matter where you are."
  />
</template>

<script>
import ProductSlot from "./components/ProductSlot.vue";
import headerAccesssProduct from "./components/headerAccesssProduct.vue";
import SideImgRowL from "./components/SideImgRowL.vue";
import SideImgRowR from "./components/SideImgRowR.vue";
import colAccess from "./components/colAccess.vue";

import datas from "./assets/data.json";
export default {
  components: {
    ProductSlot,
    headerAccesssProduct,
    SideImgRowL,
    SideImgRowR,
    colAccess,
  },
  data() {
    return {
      json_product: datas,
    };
  },
};
</script>

<style></style>
