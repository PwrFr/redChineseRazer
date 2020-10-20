import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductSlot from './components/ProductSlot.vue'
createApp(ProductSlot).mount('#productSlot')

createApp(App).mount('#app')
