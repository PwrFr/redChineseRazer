<template>
  <MenuBar  />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <ImageRow />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MenuBar from './components/MenuBar.vue'
import ImgRow from './components/ImageRow.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MenuBar,
    ImgRow
  }
}
</script>
