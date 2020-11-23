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
  <div class="mt-4">
    <gamingBigBox
      v-for="(i, index) in json.gaming_laptop_1"
      :key="index"
      :imgshow="json.gaming_laptop_1[index]"
    />
  </div>
  <div class="container-gaming">
    <gamingBoxBottom
      title="RAZER LAPTOP ACCESSORIES"
      description="Maximize your laptop experience"
      bot="Learn More>"
    />

    <gamingBoxBottom2
      title="Get 3 years of repair support including accidental damage coverage with RazerCare Elite."
      bot="Protect your Razer Blade today>"
    />

    <gamingBoxBottom3
      title="Razer Education Program"
      description1="Get special privileges only for students."
      description2="5% OFF Razer Blade laptops"
      description3="15% OFF Razer gaming gear &amp; Razer Customs"
      bot="Sign Up Now >"
    />
  </div>
  <div>
    <gamingBoxBottom4
      title="#MADEWITHBLADE"
      description="#MADEWITHBLADE is an exploration into the cutting-edge creativity of some of the most talented artists in the world. Come inside their studios and behind-the scenes as these artists share exclusive stories about how Razer Blade laptops are helping them push the envelope of music production, visual effects, digital illustration and 3D animation."
      bot="More #MADEWITHBLADE stories>"
    />
  </div>
</template>

<script>
import datas from "../src/assets/data.json";
import gamingtop from "./components/gaming-top.vue";
import gamingSmallBox from "./components/gaming-small-box.vue";
import gamingBigBox from "./components/gaming-big-box.vue";
import gamingBoxBottom from "./components/gaming-box-bottom.vue";
import gamingBoxBottom2 from "./components/gaming-box-bottom2.vue";
import gamingBoxBottom3 from "./components/gaming-box-bottom3.vue";
import gamingBoxBottom4 from "./components/gaming-box-bottom4.vue";

export default {
  name: "gamingLabtop",
  components: {
    gamingtop,
    gamingSmallBox,
    gamingBigBox,
    gamingBoxBottom,
    gamingBoxBottom2,
    gamingBoxBottom3,
    gamingBoxBottom4,
  },
  data() {
    return {
      json: datas,
    };
  },
};
</script>

<style></style>
