<template>
  <div class="access mt-5 pt-3">
      <div class=" text-center container pt-3 mt-4">
          <h1 class="text-light pc-title pt-1 mb-4 pb-1">PC</h1>
          <div id="myDIV row d-flex justify-content-center mt-4">
            <button class="btnC" @click="select = 1" :class="{'access-faro':select == 1}">LAPTOPS</button>
            <button class="btnC" @click="select = 2" :class="{'access-faro':select == 2}">EGPUS</button>
            <button class="btnC" @click="select = 3" :class="{'access-faro':select == 3}">ACCESSORIES</button>
            <button class="btnC" @click="select = 4" :class="{'access-faro':select == 4}">MONITORS</button>
        </div>
      </div>
  </div>

  
  <div class="container access-body pt-4 mt-3 p-0">
      <div class="row " v-if="select === 1">
          <div class="col-3">
              <h4 class="fillter">FILTER BY</h4>
              <h6 class="text-uppercase">screen size</h6>
              <div class="filter-menu" ref="dropdown">
                
              </div>

          </div>
          <div class="col-9">
              1
          </div>
      </div>
      <div class="row " v-else-if="select === 2">
          <div class="col-3">
              <h4 class="fillter">FILTER BY</h4>
              <h6 class="text-uppercase">EGPU</h6>
              <div class="filter-menu" ref="dropdown">
                
              </div>

          </div>
          <div class="col-9">
              2
          </div>
      </div>
      <div class="row " v-else-if="select === 3">
          <div class="col-3">
              <h4 class="fillter">FILTER BY</h4>
              <h6 class="text-uppercase">SHOP BY</h6>
              <div class="filter-menu" ref="dropdown">
                
              </div>

          </div>
          <div class="col-9">
              3
          </div>
      </div>
      <div class="row " v-else-if="select === 4">
          <div class="col-3">
              <h4 class="fillter">FILTER BY</h4>
              <h6 class="text-uppercase">MONITORS</h6>
              <div class="filter-menu" ref="dropdown">
                
              </div>

          </div>
          <div class="col-9">
              4
          </div>
      </div>
  </div>
</template>

<script>
import datas from "../assets/data.json";
export default {
    data(){
        return{
            select: 3
        };
    }
}
</script>

<style>
    
</style>