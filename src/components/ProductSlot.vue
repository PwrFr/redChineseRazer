<script>
/*
import Vue from "vue";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);*/
</script>


<template>
  <div class="container-fluid">
    <div class="row">
      <img class="col img-full" src="../assets/products/cases/1.jpg" />

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
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #000;
}
.slotBox {
}

.img-full {
  max-width: 79%;
  padding: 0px;
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
}
ul {
  text-align: left;
  padding-left: 1rem;
}

.select-session {
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

p {
  margin: 0px;
  padding: 0px;
}
.right-box {
  background-color: #000;
  width: 375px;
  padding-left: 37px;
  min-width: 375px;
}
</style>