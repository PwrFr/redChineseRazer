<template>
  <MenuBar/>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <ProductSlot/>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MenuBar from './components/MenuBar.vue'
import ProductSlot from './components/ProductSlot.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MenuBar,
    ProductSlot
  }
}
</script>
