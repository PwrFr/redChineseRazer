<template>
  <MenuBar  />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MenuBar from './components/MenuBar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MenuBar
  }
}
</script>
