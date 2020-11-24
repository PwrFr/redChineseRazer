import { createApp } from "vue";
import App from "./App.vue";
import Accessories from "./components/HeaderAccess.vue";
createApp(Accessories).mount("#accessories");

import "./index.css";
import Footer from "./components/Footer.vue";
createApp(Footer).mount("#Footer");

import MenuBar from "./components/MenuBar.vue";
createApp(MenuBar).mount("#Menu");
import Img from "./components/ImageRow.vue";

createApp(Img).mount("#ImgRow");
import ProductSlot from "./components/ProductSlot.vue";
createApp(ProductSlot).mount("#productSlot");

import AppTestSlot from "./AppTestSlot.vue";
createApp(AppTestSlot).mount("#appSlot");

import CasesPage from "./CasesPage.vue";
createApp(CasesPage).mount("#casesPage");

import MonitorPage from "./MonitorPage.vue";
createApp(MonitorPage).mount("#monitorPage");

import EgpuPage from "./EgpuPage.vue";
createApp(EgpuPage).mount("#egpuPage");
createApp(App).mount("#app");

import gamingLaptop from "./gamingLabtop.vue";
createApp(gamingLaptop).mount("#gamingLaptop");

import access1 from "../src/access1.vue";
createApp(access1).mount("#AC1");

import access2 from "../src/access2.vue";
createApp(access2).mount("#AC2");

import access3 from "../src/access3.vue";
createApp(access3).mount("#AC3");
