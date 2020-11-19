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
  <div class="container access-body pt-4 mt-3 p-0">
      <div class="row ">
          <div class="col-3">
              <h4 class="fillter">FILTER BY</h4>
              <button @click="show()">Check</button>
              <div class="filter-menu" ref="dropdown">
                
              </div>
              did

          </div>
          <div class="col-9">
              asd
          </div>
      </div>
  </div>
</template>

<script>
import datas from "../assets/data.json";
export default {
    data(){
        return{
            
        };
    },
    methods:{
        show(){
            var show = this.$refs.dropdown;
            var text = document.createElement("p");
            text.appendChild(document.createTextNode(datas.PC_Acessories.Filter));
            show.appendChild(text);
            
        }
    }
}
</script>

<style>
    
</style>