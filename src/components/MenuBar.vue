<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light menu-bg pt-0 pb-1 pl-2 font-weight-normal fixed-top">
  <div class="collapse navbar-collapse container p-0" id="navbarNavAltMarkup">
    <div class="navbar-nav ">
      <a href="" class="navbar-brand mt-1"><img class="" src='src\assets\Menu\razer.png'  width="90" height="13"/> </a>
      <!-- <a class="nav-item nav-link active mr-1" href="#"><p class="fc pt-2 pl-2 pr-3">WHATS NEW</p></a> -->
      <div class="dropdown">
     <a class="dropbtn nav-item nav-link active mr-1" href="#"><p class="fc pt-2 pl-2 pr-3">WHATS NEW</p>
      <i class="fa fa-caret-down"></i>
    </a>
    <div class="dropdown-content mt-1 p-0"> 
      <div class="row1">
        <div class="column">
          <h3>Category 1</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div class="column">
          <h3>Category 2</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div class="column">
          <h3>Category 3</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  </div> 
      <a class="nav-item nav-link" href="#"><p class="fc pt-2 pr-3">PRODUCTS</p></a>
      <a class="nav-item nav-link" href="#"><p class="fc pt-2 pr-3 ml-1">APPS & DOWNLOADS</p></a>
      <a class="nav-item nav-link" href="#"><p class="fc pt-2 pr-3 ml-1">EXPLORE</p></a>
      <a class="nav-item nav-link" href="#"><p class="fc pt-2 pr-3 ml-1">SUPPORT</p></a>
      
    </div>
    
  </div>
</nav>
  </div>
</template>
<style>
@font-face {
  font-family: myFirstFont;
  src: url('../assets/font/razerf5-thin.otf');
}
.fc{
  font-family: myFirstFont;
  font-size: 0.8rem;
  color: #999999;
  margin: 0;
}
.fc:hover{
  color: white;
}
.dropdown .dropbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: #999999;
  background-color: inherit;
  font: inherit;
  margin: 0;
}



.dropdown-content {
  display: none;
  position: absolute;
  width: 70vw;
  left: 0;
  z-index: 1;
}

.dropdown-content{
  padding: 16px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 20%;
  padding: 10px;
  background-color: #ccc;
  height: 60vh;
}

.column a {
  float: none;
  color: black;
  padding: 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.column a:hover {
  background-color: #ddd;
}

/* Clear floats after the columns */
.row1:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    height: auto;
  }
}
</style>
<script>
export default {
  name: 'MenuBar'
}

</script>
