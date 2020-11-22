<template>
  <MenuBar />
  <imageRow
    bgImgRow="../src/assets/home/1.jpg"
    title="PERFORMANCE MEETS PRODUCTIVITY."
    discription="Shop The New Razer Book 13"
  />
  <imageRow
    bgImgRow="../src/assets/home/2.jpg"
    title="GET A HEAD START ON HOLIDAY SHOPPING"
    discription="Shop Holiday Gift Guide"
  />
  <imageRow
    bgImgRow="../src/assets/home/3.jpg"
    title="CONSOLE. MOBILE. COMBINED."
    discription="Shop Razer Kaira Pro for Xbox"
  />

  <imgCol
    bgImgCL="../src/assets/home/4L.jpg"
    titleCL="MORE POWER. MORE CORES. MORE FRAMES."
    discriptionCL="Up to $100 in Savings. Shop Razer Blade 15"
    bgImgCR="../src/assets/home/4R.jpg"
    titleCR="Cyberpunk 2077 Edition"
    discriptionCR="Razer.com Exclusive. Shop Now"
  />

  <imgCol
    bgImgCL="../src/assets/home/5L.jpg"
    titleCL="RazerStore Exclusive"
    discriptionCL="Learn More"
    bgImgCR="../src/assets/home/5R.jpg"
    titleCR="COLOR YOUR WORLD WITH RAZER CHROMA RGB ACCESSORIES"
    discriptionCR="Learn More"
  />

  <imgCol
    bgImgCL="../src/assets/home/6L.jpg"
    titleCL="THE MEOW FACTOR. NOW MOBILE."
    discriptionCL="Shop Razer Kraken BT Kitty Edition"
    bgImgCR="../src/assets/home/6R.jpg"
    titleCR="JOIN THE DISCUSSION ON ALL THINGS RAZER"
    discriptionCR="Get in on Razer Insider"
  />

  <techSpecCase />
  <Footer />
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import ProductSlot from "./components/ProductSlot.vue";
import imageRow from "./components/ImageRow.vue";
import imgCol from "./components/imgCol.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    MenuBar,
    imageRow,
    imgCol,
    ProductSlot,
    Footer,
  },
};
</script>
