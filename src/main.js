import { createApp } from 'vue'
import ProductSlot from './components/ProductSlot.vue'
import App from './App.vue'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).mount('#app')
createApp(ProductSlot).mount('#productSlot')

