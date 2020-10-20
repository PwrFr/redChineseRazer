<script>
/*
import Vue from "vue";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);*/
</script>


<template >
  <div class="container-fluid" style="padding: 0px;">
    <div class="row">
      <div class="col-xl-9 col-lg-6 col-img-full">
        <div>
          <img
            src="../assets/products/cases/1.jpg"
            class="img-full img-responsive"
            style="position: absolute"
          />
          <ul class="image-ul-tab">
            <li class="image-li-tab">
              <img src="../assets/products/cases/bar/1.jpg" />
            </li>
            <li class="image-li-tab">
              <img src="../assets/products/cases/bar/2.jpg" />
            </li>
            <li class="image-li-tab">
              <img src="../assets/products/cases/bar/3.jpg" />
            </li>
            <li class="image-li-tab">
              <img src="../assets/products/cases/bar/4.jpg" />
            </li>
            <li class="image-li-tab">
              <img src="../assets/products/cases/bar/5.jpg" />
            </li>
          </ul>
        </div>
      </div>
      <!-- -->
      <div class="col-2 right-box" style>
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
          <select id="cars" name="carlist" form="carform">
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
body {
  background-color: #000;
  overflow: hidden;
}
.slotBox {
}

.img-full {
  padding: 0px;
  max-width: 100%;
}

.col-img-full {
  padding: 0px;
  max-width: 100%;
  margin-right: 0.94rem;
}
.image-ul-tab {
  position: relative;
  list-style: none;
  padding: 47px;
}
.image-li-tab {
  border: 1px solid #999;
  height: 5rem;
  width: 5rem;
  margin-bottom: 10px;
}

.right-box {
  background-color: #000;
  padding-right: 0px;
  padding-left: 37px;
  min-width: 370px;
}

.header {
  padding-top: 40px;
  font-family: RazerF5, helvetica neue, Arial, noto sans, sans-serif;
  font-size: 1.3125rem;
  font-weight: 400;
  line-height: 1.1em;

  color: #44d62c;
  display: block;
  margin: 0 !important;
}

.head-description {
  margin-top: 0.5rem;
  font-family: Roboto, helvetica neue, Arial, noto sans, sans-serif,
    apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji;
  font-size: 0.875rem;
  line-height: 1.2;
  color: #fff !important;
}

.head-price {
  font-family: RazerF5, helvetica neue, Arial, noto sans, sans-serif;
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
  font-family: Roboto, helvetica neue, Arial, noto sans, sans-serif,
    apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji;
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
  font-family: Roboto, helvetica neue, sans-serif;
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
  font-family: RazerF5, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
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
</style>