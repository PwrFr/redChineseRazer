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
  <div class="mt-4 mb-4">
    <gamingBigBox
      v-for="(i, index) in json.gaming_laptop_1"
      :key="index"
      :imgshow="json.gaming_laptop_1[index]"
    />
  </div>
  <gamingBoxBottom
    class="gaming-box-bottom"
    v-for="(j, index) in json.gaming_laptop_2"
    :key="index"
    :info="json.gaming_laptop_2[index]"
  />

  <div></div>
</template>

<script>
import datas from "../src/assets/data.json";
import gamingtop from "./components/gaming-top.vue";
import gamingSmallBox from "./components/gaming-small-box.vue";
import gamingBigBox from "./components/gaming-big-box.vue";
import gamingBoxBottom from "./components/gaming-box-bottom.vue";

export default {
  name: "gamingLabtop",
  components: {
    gamingtop,
    gamingSmallBox,
    gamingBigBox,
  },
  data() {
    return {
      json: datas,
    };
  },
};
</script>

<style></style>
