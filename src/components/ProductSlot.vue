<template  >
  <div class="container-fluid" style="padding: 0px; background-color: black">
    <div class="row p-0 mt-0 row-product">
      <div
        class="col-xl-9 col-md-12 col-img-full"
        v-bind:style="{ backgroundImage: 'url(' + bgComponent + ')' }"
      >
        <div class="image-tab">
          <lable>
            <div class="image-tab-list">
              <input type="radio" name="test" @click="changeImage(1)" class="rdo_style" checked />
              <img :src="imageTab1" class="image-tab-border" />
            </div>
          </lable>
          <lable>
            <div class="image-tab-list">
              <input type="radio" name="test" @click="changeImage(2)" class="rdo_style" />
              <img :src="imageTab2" class="image-tab-border" />
            </div>
          </lable>
          <lable>
            <div class="image-tab-list">
              <input type="radio" name="test" @click="changeImage(3)" class="rdo_style" />
              <img :src="imageTab3" class="image-tab-border" />
            </div>
          </lable>
          <lable>
            <div class="image-tab-list">
              <div v-if="4 - imageAmount > 0">
                <img :src="imageTab4" class="image-tab-border" :style="hiddenBorder4" />
              </div>
              <div v-else>
                <input type="radio" name="test" @click="changeImage(4)" class="rdo_style" />
                <img :src="imageTab4" class="image-tab-border" />
              </div>
            </div>
          </lable>
          <lable>
            <div class="image-tab-list">
              <div v-if="5 - imageAmount > 0">
                <img :src="imageTab5" class="image-tab-border" :style="hiddenBorder5" />
              </div>
              <div v-else>
                <input type="radio" name="test" @click="changeImage(5)" class="rdo_style" />
                <img :src="imageTab5" class="image-tab-border" />
              </div>
            </div>
          </lable>
          <lable>
            <div class="image-tab-list">
              <div v-if="6 - imageAmount > 0">
                <img :src="imageTab6" class="image-tab-border" :style="hiddenBorder6" />
              </div>
              <div v-else>
                <input type="radio" name="test" @click="changeImage(6)" class="rdo_style" />
                <img :src="imageTab6" class="image-tab-border" />
              </div>
            </div>
          </lable>
        </div>
      </div>
      <!--leftside -->
      <div class="col-xl-3 col-md-12 right-box w-100 pl-4 pt-2 pr-5">
        <p class="header">{{headerText}}</p>
        <p class="head-description">{{headerDes}}</p>
        <p class="head-price">US${{priceText}}</p>
        <div class="ul-session">
          <ul>
            <li>{{description1}}</li>
            <li v-if="2 <= desAmount">{{description2}}</li>
            <li v-if="3 <= desAmount">{{description3}}</li>
            <li v-if="4 <= desAmount">{{description4}}</li>
            <li v-if="5 <= desAmount">{{description5}}</li>
            <li v-if="6 <= desAmount">{{description6}}</li>
            <li v-if="7 <= desAmount">{{description7}}</li>
            <li v-if="8 <= desAmount">{{description8}}</li>
            <li v-if="9 <= desAmount">{{description9}}</li>
            <li v-if="10 <= desAmount">{{description10}}</li>
            <li v-if="11 <= desAmount">{{description11}}</li>
          </ul>
        </div>
        <!-- boos here --->
        <div v-if="modelBoxDisappear == 0">
          <div class="model-box-div">
            <div id="box" class="model-box">
              <div class="select-box">
                <div class="model-options-container">
                  <div onclick="myFunction('1','2','3')" class="box-option">
                    <input type="radio" class="model-radio" id="Standard - Black" name="category" />
                    <label id="1" for="Standard - Black">Standard - Black</label>
                  </div>

                  <div onclick="myFunction('2','1','3')" class="box-option">
                    <input type="radio" class="model-radio" id="Standard - Mercury" name="category" />
                    <label id="2" for="Standard - Mercury">Standard - Mercury</label>
                  </div>

                  <div onclick="myFunction('3','1','2')" class="box-option">
                    <input type="radio" class="model-radio" id="Chroma" name="category" />
                    <label id="3" for="Chroma">Chroma</label>
                  </div>
                </div>

                <div class="selected">{{modelFirstItem}}</div>
              </div>
            </div>
            <div class="model-box-1" id="box1">
              <b>Model</b>
            </div>
          </div>
        </div>
        <!-- end --->
        <p class="shipping-date">{{shippingDate}}</p>
        <button class="order-button">{{buyingStatus}}</button>

        <p class="product-status">{{buyingAt}}</p>
      </div>
    </div>
  </div>
</template>

<style>
.model-box-div {
  margin-bottom: 75px;
}
.select-box {
  display: flex;
  /* width: 400px; */
  flex-direction: column;
}

.select-box .model-options-container {
  background: #2f3640;
  color: #8d8d8d;
  max-height: 0;
  width: 223px;
  opacity: 0;
  transition: all 0.4s;
  border-radius: 8px;
  overflow: hidden;
  margin-left: -4px;
  margin-top: -5px;

  order: 1;
}

.selected {
  border-radius: 8px;
  margin-bottom: 8px;
  color: #f5f6fa;
  position: relative;
  order: 0;
}

.selected::after {
  content: "";
  background: url("Custom-Select-Box-master/img/arrow-down.svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  height: 100%;
  width: 32px;
  right: 10px;
  top: 8px;

  transition: all 0.4s;
}

.select-box .model-options-container.active {
  max-height: 240px;
  opacity: 1;
  overflow-y: scroll;
  border: 1px inset #1f1e1e;
  border-radius: 3px;
}

.select-box .model-options-container.active + .selected::after {
  transform: rotateX(180deg);
  top: -6px;
}

.select-box .model-options-container::-webkit-scrollbar {
  width: 0.1px;
  background: #111111;
  border-radius: 0 8px 8px 0;
}

.select-box .model-options-container::-webkit-scrollbar-thumb {
  background: #525861;
  border-radius: 0 8px 8px 0;
}

.box-option {
  background-color: #111111;
  border: #111111 1px solid;
  height: 32px;
  font-size: 13.9px;
  padding: 8px 12px;
  cursor: pointer;
}

.selected {
  margin-left: -12px;
  padding: 14px 24px;
  cursor: pointer;
  font-size: 13.9px;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.select-box .box-option:hover {
  background: #414b57;
}

.select-box label {
  cursor: pointer;
}

.select-box .box-option .model-radio {
  display: none;
}

.model-box {
  border: 1px solid #999999;
  border-radius: 4px;
  height: 48px;
  width: 225px;
  margin-left: 15px;
}

.model-box-1 {
  color: #adadad;
  background: #000;
  font-size: 13px;
  margin-bottom: -10px;
  width: 43px;
  text-align: center;
  margin-top: -54px;
  margin-left: 35px;
  font-family: Calibri;
}

select {
  background-color: black;
  color: aliceblue;
  /* border: 1px solid #999999; */
  /* margin-top: 15px;
  margin-left: 10px; */
  border-style: none;
  margin-top: 10px;
  margin-left: 2px;
  height: 35px;
  width: 220px;
  border-radius: 4px;
  z-index: -100;
}

.model-box:hover {
  border-color: white !important;
}

@font-face {
  font-family: RazerF5-Reg;
  src: url("../assets/font/RazerF5-Reg.otf");
}

.row-product {
  height: 100vh;
}
.col-img-full {
  background-size: 100%;
  background-repeat: no-repeat;
}
.image-tab {
  display: flex;
  flex-direction: column;
  left: 3.9375rem;
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
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.1em;

  color: #44d62c;
  display: block;
  margin: 0 !important;
}

.head-description {
  display: block;

  margin-top: 0.5rem;

  font-size: 0.7rem;
  color: #fff !important;
}

.head-price {
  font-family: RazerF5-Reg;
  font-weight: 400;
  line-height: 1.5;
  font-size: 1rem;
  padding-top: 0.5rem;
  color: #fff !important;
}

.ul-session {
  line-height: 1.4;
  font-size: 0.7rem;
  margin-top: 2.1875rem;
  list-style: disc;
  color: #999;
  font-family: Roboto, helvetica neue, Arial, noto sans, sans-serif,
    apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji;
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
  /* background-image: ; */
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
  font-weight: 400;
  font-size: 0.7rem;
  margin-bottom: 0;
  margin-top: 30px;
}

.order-button {
  border-radius: 0.1875rem;
  color: #000;
  font-family: RazerF5-Reg;
  font-size: 0.7rem;
  font-weight: 700;
  height: 2rem;
  line-height: 1.4em;
  max-height: none;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
  background-color: #44d62c;
  border: 0;
  transition: 0.3s;
  margin-top: 0.9375rem;
  width: 100%;
  max-width: 19.375rem;
}
.order-button:hover {
  background-color: #73e161;
  transition: 0.3s;
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

.rdo_style[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 5rem;
  height: 5rem;
  border: 1px solid #999;
}
.rdo_style[type="radio"]:hover + img {
  border-color: #44d62c;
  border: 1px solid #44d62c;
}

.rdo_style[type="radio"] + img {
  cursor: pointer;
}

.rdo_style[type="radio"]:checked + img {
  border-color: #44d62c;
  border: 1px solid #44d62c;
}
</style>
<script>
export default {
  props: {
    //Src of image
    imageTab1: String,
    imageTab2: String,
    imageTab3: String,
    imageTab4: String,
    imageTab5: String,
    backgroundSrc: String,
    imageLocateSrc: String,
    //Description
    headerText: String,
    headerDes: String,
    priceText: String,
    desAmount: Number,
    description1: String,
    description2: String,
    description3: String,
    description4: String,
    description5: String,
    description6: String,
    description7: String,
    description8: String,
    description9: String,
    description10: String,
    description11: String,
    shippingDate: String,
    buyingStatus: String,
    buyingAt: String,
    //model Box
    modelBoxDisappear: Number,
    modelFirstItem: String,
    //value of picture
    imageAmount: Number,
    testCase: Number
  },
  data() {
    return {
      hiddenBorder4: {
        border: "0px"
      },
      hiddenBorder5: {
        border: "0px"
      },
      hiddenBorder6: {
        border: "0px"
      },
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
      if (num <= this.imageAmount) {
        console.log("can");
        this.bgComponent = this.imageLocateSrc + num + ".jpg";
      }
    }
  }
};
</script>