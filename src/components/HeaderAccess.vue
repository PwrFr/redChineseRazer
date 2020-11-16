<template>
  <div class="access mt-5 pt-3">
      <div class=" text-center container pt-3 mt-4">
          <h1 class="text-light pc-title pt-1 mb-4 pb-1">PC</h1>
          <div id="myDIV row d-flex justify-content-center mt-4">
            <button class="btnC">LAPTOPS</button>
            <button class="btnC">EGPUS</button>
            <button class="btnC">ACCESSORIES</button>
            <button class="btnC">MONITORS</button>
        </div>
      </div>
  </div>
  <div class="container access-body">
      <div class="row ">
          <div class="col-3">
              asd
          </div>
          <div class="col-9">
              asd
          </div>
      </div>
  </div>
</template>

<script>
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btnC");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}
</script>

<style>
    
</style>