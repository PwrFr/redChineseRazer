<template>
  <gamingtop />
  <div class="container">
    <div class="row d-flex justify-content-between mt-4">
      <gamingSmallBox
        v-for="(i, index) in json.gaming_laptop"
        :key="index"
        :card="json.gaming_laptop[index]"
      />
    </div>
  </div>

  gamingBigBox
</template>

<script>
import datas from "../src/assets/data.json";      
import gamingtop from "./components/gaming-top.vue";
import gamingSmallBox from "./components/gaming-small-box.vue";
import gamingBigBox from "./components/gaming-big-box.vue"

export default {
  name: "gamingLabtop",
  components: {
    gamingtop,
    gamingSmallBox,
    gamingBigBox
  },
  data() {
    return {
      json: datas,
    };
  },
};
</script>

<style></style>
