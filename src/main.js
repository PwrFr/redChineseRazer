import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import MenuBar from './components/MenuBar.vue'

createApp(MenuBar).mount('#Menu')
import ProductSlot from './components/ProductSlot.vue'
createApp(ProductSlot).mount('#productSlot')
createApp(App).mount('#app')
