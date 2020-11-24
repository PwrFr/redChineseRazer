<template>
  <MenuBar />
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import ProductSlot from "./components/ProductSlot.vue";
import datas from "./assets/data.json";

export default {
  name: "AppTestSlot",
  components: {
    ProductSlot,
    MenuBar,
  },
  data() {
    return {
      test: datas.monitors[0].name,
    };
  },
  created() {
    console.log(datas.monitors[0].name);
  },
};
</script>
