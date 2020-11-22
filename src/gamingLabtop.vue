<template>
  <MenuBar />
  <gamingtop />
  <gamingSmallBox
    name_product_gaming="1"
    info_product_gaming="2"
    footer_gaming="3"
  />
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import gamingtop from "./components/gaming-top.vue";
import gamingSmallBox from "./components/gaming-small-box.vue";

export default {
  name: "gamingLabtop",
  components: {
    gamingtop,
    MenuBar,
    gamingSmallBox,
  },
};
</script>

<style></style>
