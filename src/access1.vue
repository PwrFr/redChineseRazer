<template>
  <ProductSlot />
</template>

<script>
import ProductSlot from "./components/ProductSlot.vue";
import datas from "./assets/data.json";
export default {
  components: {
    ProductSlot,
  },
  data() {
    return {
      json_product: datas,
    };
  },
};
</script>

<style></style>
