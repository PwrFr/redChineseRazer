<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light menu-bg p-1 font-weight-normal fixed-top">
  <div class="collapse navbar-collapse container" id="navbarNavAltMarkup">
    <div class="navbar-nav ">
      <a href="" class="p-0 mt-1 ml-4 navbar-brand"><img src='src\assets\Menu\razer.png'  width="80.5" height="12.5"/> </a>
      <a class="nav-item nav-link active" href="#"><p class="fc ml-2 mt-1 mb-0">WHATS NEW</p></a>
      <a class="nav-item nav-link" href="#"><p class="fc ml-3 mt-1 mb-0">PRODUCTS</p></a>
      <a class="nav-item nav-link" href="#"><p class="fc ml-3 mt-1 mb-0">APPS & DOWNLOADS</p></a>
      <a class="nav-item nav-link" href="#"><p class="fc ml-3 mt-1 mb-0">EXPLORE</p></a>
      <a class="nav-item nav-link" href="#"><p class="fc ml-3 mt-1 mb-0">SUPPORT</p></a>
      
    </div>
    
  </div>
</nav>
  </div>
</template>
<style>
@font-face {
  font-family: myFirstFont;
  src: url('../assets/font/Pragmatica-ExtraLight.ttf');
}
.fc{
  font-family: myFirstFont;
  font-size: 0.7rem;
  color: #999999;
}
.fc:hover{
  color: white;
}
</style>
<script>
export default {
  name: 'MenuBar'
}

</script>
