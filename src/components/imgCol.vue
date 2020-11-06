<template>
  <div class="row-h row text-white">
     <a href=""> <div class="col-6 img-col" v-bind:style="{ backgroundImage: 'url(' + bgImgCL + ')' }">
             <h2>{{titleCL}}</h2>
             <span>{{discriptionCL}}</span>

      </div></a>
      <div class="col-6 img-col pl-1" v-bind:style="{ backgroundImage: 'url(' + bgImgCR + ')' }">
            <h2>{{titleCR}}</h2>
            <span>{{discriptionCR}}</span>
      </div>

  </div>
</template>

<script>
export default {
 props: {
    bgImgCL: String,
    titleCL: String,
    discriptionCL: String,
    bgImgCR: String,
    titleCR: String,
    discriptionCR: String
  }
}
</script>

<style>

</style>