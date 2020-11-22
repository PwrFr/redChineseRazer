<template>
  <div class="container-fluid techSpecsBox p-0">
    <div class="container techSpecs">
      <!-- <h4 id="headerText">TECH SPECS</h4> -->
      <table class="container-fluid">
        <tr>
          <h4 id="headerText">TECH SPECS</h4>
        </tr>

        <tr class="dataRow trDisplays dataBul">
          <th class="col-lg-3 p-0">
            <b>Supported Motherboards</b>
          </th>
          <ul class="col-lg-9 data">
            <li v-for="row01 in data1" :key="row01">
              {{ row01 }}
            </li>
          </ul>
        </tr>
        <span id="more" ref="more">
          <tr class="dataRow trDisplays dataBul">
            <th class="col-lg-3 p-0">
              <b>Input & Output</b>
            </th>
            <td class="col-lg-9">
              <ul class="data p-2">
                <li v-for="item in data13" :key="item">{{ item }}</li>
              </ul>
            </td>
          </tr>
          <!-- row 12  -->
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>RAZER Chroma™ Support</b>
            </th>
            <td class="col-lg-9 data">{{ data14 }}</td>
          </tr>
          <!-- row 13 -->
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>Warranty</b>
            </th>
            <td class="col-lg-9 data">{{ data15 }}</td>
          </tr>
        </span>
      </table>
    </div>
    <div id="seeLess" ref="seeless" class="m-0">
      <p @click="test()" class="seeBox pt-2" ref="text">
        {{ text }}
        <svg
          ref="arrowGreen"
          id="arrow"
          width="2em"
          height="1em"
          border="20px"
          viewBox="0 0 16 16"
          class="bi bi-chevron-up arrow"
          fill="#45D52C"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </p>
    </div>
  </div>
</template>
<style>
.techSpecsBox {
  margin: 10px;
  background-color: #252525;
  color: white;
}
.techSpecs {
  padding: 10px;
  color: white;
}
.row-line {
  border-bottom: solid 1px #999;
}
#headerText {
  text-align: left;
  margin-top: 30px;
  margin-bottom: 45px;
  font-size: 1.3125rem;
}
.dataRow {
  /* padding: 1.5rem; */
  border-bottom: solid 1px #999;
  padding: 0rem;
  padding-left: -1rem;
  font-size: 0.875rem;
  text-align: left;
  font-size: 0.875rem;
}
.data {
  text-align: left;
  color: #999;
}
ul {
  padding: 0px;
}
.trDisplay {
  border-bottom: solid 1px #999;
}
tr {
  display: flex;
  flex-wrap: wrap;
}
.dataBul {
  padding-top: 1rem;
  padding-bottom: 0;
}
.dataSingle {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
th {
  text-transform: uppercase;
}
#more {
  /* display: inline; */
  display: none;
}
#seeLess {
  display: inline;
}
#arrow {
  transform: rotate(180deg);
}
.seeBox {
  background-color: #333;
  height: 2.5rem;
  text-align: center;
  width: 100%;
  color: #999;
}
</style>
<script>
import datas from "../assets/data.json";
export default {
  name: "techSpecEgpu",
  data() {
    return {
      text: "",
      status: 0,
      ty: {},
      data1: datas.eGPU.specs.InputOutput,
    };
  },
  // created(){
  //   ty = {}
  //   this.ty = datas["monitors"][0]
  //   // console.log(ty.specs.Bezels[0])
  // }
  methods: {
    test() {
      if (this.status == 0) {
        //when user press see More v
        var more = this.$refs.more;
        more.style.display = "inline";
        //bt seeMore hide

        this.text = "See less";
        var arrow = this.$refs.arrowGreen;
        arrow.style.transform = "rotate(0deg)";

        var btLess = this.$refs.seeless;
        btLess.style.display = "inline";

        this.status = 1;
      } else if (this.status == 1) {
        //when user press seeless v
        var more = this.$refs.more;
        more.style.display = "none";

        this.text = "See more";

        var arrow = this.$refs.arrowGreen;
        arrow.style.transform = "rotate(180deg)";

        this.status = 0;
      }
      console.log(this.status);
    },
  },
  created() {
    this.text = "See More";
  },
};
</script>
