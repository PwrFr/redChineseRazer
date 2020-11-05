import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import ProductSlot from './components/ProductSlot.vue'
import MenuBar from './components/MenuBar.vue'
import Img from './components/ImageRow.vue'

createApp(MenuBar).mount('#Menu')
createApp(Img).mount('#ImgRow')
createApp(ProductSlot).mount('#productSlot')
createApp(App).mount('#app')
