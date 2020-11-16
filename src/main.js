import { createApp } from 'vue'
import App from './App.vue'
import Accessories from './Accessories.vue'
import './index.css'

createApp(Accessories).mount('#accessories')

import MenuBar from './components/MenuBar.vue'
createApp(MenuBar).mount('#Menu')
import Img from './components/ImageRow.vue'
createApp(Img).mount('#ImgRow')
import ProductSlot from './components/ProductSlot.vue'
createApp(ProductSlot).mount('#productSlot')
import AppTestSlot from './AppTestSlot.vue'
createApp(AppTestSlot).mount('#appSlot')
createApp(App).mount('#app')
