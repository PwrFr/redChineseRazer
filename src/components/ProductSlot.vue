


<template  >
  <div class="container-fluid" style="padding: 0px;">
    <div class="row p-0 mt-0">
      <div
        class="col-xl-9 col-lg-12 col-img-full"
        v-bind:style="{ backgroundImage: 'url(' + bgComponent + ')' }"
      >
        <div class="image-tab">
          <lable>
            <div class="image-tab-list">
              <input type="radio" name="test" @click="changeImage(1)" checked />
              <img :src="imageTab1" class="image-tab-border" />
            </div>
          </lable>
          <lable>
            <div class="image-tab-list">
              <input type="radio" name="test" @click="changeImage(2)" />
              <img :src="imageTab2" class="image-tab-border" />
            </div>
          </lable>
          <lable>
            <div class="image-tab-list">
              <input type="radio" name="test" @click="changeImage(3)" />
              <img :src="imageTab3" class="image-tab-border" />
            </div>
          </lable>
          <lable>
            <div class="image-tab-list">
              <input type="radio" name="test" @click="changeImage(4)" />
              <img :src="imageTab4" class="image-tab-border" />
            </div>
          </lable>
          <lable>
            <div class="image-tab-list">
              <input type="radio" name="test" @click="changeImage(5)" />
              <img :src="imageTab5" class="image-tab-border" />
            </div>
          </lable>
        </div>
      </div>
      <!-- -->
      <div class="col-xl-3 col-lg-12 right-box w-100">
        <p class="header">Razer Tomahawk Mini-ITX</p>
        <p class="head-description">Mini-ITX Gaming Chassis with Razer Chroma RGB</p>
        <p class="head-price">US$179.99</p>
        <div class="ul-session">
          <ul>
            <li>Dual-sided tempered glass swivel doors</li>
            <li>Powered by Razer Chroma™ RGB</li>
            <li>Ventilated top panel and dust filters</li>
          </ul>
        </div>
        <div class="select-session">
          <select id="test" name="carlist" form="carform">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <p class="shipping-date">Ships on November 05, 2020</p>
        <button class="order-button">Pre-Order</button>
        <p class="product-status">Also Available At</p>
      </div>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: RazerF5-Reg;
  src: url("../assets/font/RazerF5-Reg.otf");
}
body {
  background-color: #000;
}
.row {
  height: 100vh;
}
.col-img-full {
  background-size: 100%;
  background-repeat: no-repeat;
}
.image-tab {
  display: flex;
  flex-direction: column;
  left: 2.9375rem;
  position: absolute;
  top: 2.5rem;
}

.image-tab-list {
  height: 5rem;
  width: 5rem;
  margin-bottom: 10px;
}

.image-tab-border {
  border: 1px solid #999;
}

.right-box {
  background-color: black;
}

.header {
  padding-top: 40px;
  font-family: RazerF5-Reg;
  font-size: 1.3125rem;
  font-weight: 400;
  line-height: 1.1em;

  color: #44d62c;
  display: block;
  margin: 0 !important;
}

.head-description {
  display: block;

  margin-top: 0.5rem;
  font-family: RazerF5-Reg;
  font-size: 0.875rem;
  color: #fff !important;
}

.head-price {
  font-family: RazerF5-Reg;
  font-weight: 400;
  line-height: 1.5;
  font-size: 1.3125rem;
  padding-top: 0.5rem;
  color: #fff !important;
}

.ul-session {
  line-height: 1.4;
  font-size: 0.875rem;
  margin-top: 2.1875rem;
  list-style: disc;
  color: #999;
  font-family: RazerF5-Reg;
  font-weight: 400;
  margin-bottom: 3.75rem;
}
ul {
  text-align: left;
  padding-left: 1rem;
}

.select-session select {
  align-items: center;
  background: 0 0;
  border: 1px solid #999;
  border-radius: 0.25rem;
  color: #999;
  display: flex;
  font-family: RazerF5-Reg;
  font-size: 0.875rem;
  min-height: 3rem;
  min-width: var(--dropdown-custom-min-width, 14.0625rem);
  padding: 0.875rem 0.75rem;
  position: relative;
  flex: auto;
  width: 180px;
  cursor: pointer;
  background-image: ;
}
option {
  font-family: RazerF5-Reg;
  background-color: #44d62c;
  font-size: inherit;
  line-height: 3em;
  color: #999;
  font-weight: 400;
  height: 2rem !important;
}

.shipping-date {
  color: #999;
  font-size: 0.875rem;
  margin-bottom: 0;
  margin-top: 30px;
}

.order-button {
  border-radius: 0.1875rem;
  color: #000;
  font-family: RazerF5-Reg;
  font-size: 0.875rem;
  font-weight: 700;
  height: 2.5rem;
  line-height: 1.4em;
  max-height: none;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
  background-color: #44d62c;
  border: 0;
  margin-top: 0.9375rem;
  width: 100%;
  max-width: 19.375rem;
}

.product-status {
  background: 0 0 !important;
  border-radius: 2px !important;
  color: #44d62c !important;
  cursor: pointer !important;
  font: normal normal normal 14px/17px Roboto, sans-serif !important;
  margin: 5px !important;
  padding: 8px 12px !important;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
  visibility: visible !important;
  text-align: center;
  margin-top: 1rem;
  max-width: 19.375rem;
}

p {
  margin: 0px;
  padding: 0px;
}

[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 5rem;
  height: 5rem;
}
[type="radio"]:hover + img {
  border-color: #44d62c;
  border: 1px solid #44d62c;
}

[type="radio"] + img {
  cursor: pointer;
}

[type="radio"]:checked + img {
  border-color: #44d62c;
  border: 1px solid #44d62c;
}
</style>
<script>
export default {
  props: {
    imageTab1: String,
    imageTab2: String,
    imageTab3: String,
    imageTab4: String,
    imageTab5: String,
    backgroundSrc: String,
    imageLocateSrc: String
  },
  data() {
    return {
      //imageTab1: "/src/assets/products/cases/bar/1.jpg",
      //imageTab2: "/src/assets/products/cases/bar/2.jpg",
      //imageTab3: "/src/assets/products/cases/bar/3.jpg",
      //imageTab4: "/src/assets/products/cases/bar/4.jpg",
      //imageTab5: "/src/assets/products/cases/bar/5.jpg",
      //wasd: "/src/assets/products/cases/1.jpg"
      bgComponent: this.backgroundSrc
    };
  },
  methods: {
    changeImage(num) {
      this.bgComponent = this.imageLocateSrc + num + ".jpg";
    }
  }
};
</script>