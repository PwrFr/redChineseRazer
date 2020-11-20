<template>
  <div class="access mt-5 pt-3">
    <div class="text-center container pt-3 mt-4">
      <h1 class="text-light pc-title pt-1 mb-4 pb-1">PC</h1>
      <div id="myDIV row d-flex justify-content-center mt-4">
        <button
          class="btnC"
          @click="select = 1"
          :class="{ 'access-faro': select == 1 }"
        >
          LAPTOPS
        </button>
        <button
          class="btnC"
          @click="select = 2"
          :class="{ 'access-faro': select == 2 }"
        >
          EGPUS
        </button>
        <button
          class="btnC"
          @click="select = 3"
          :class="{ 'access-faro': select == 3 }"
        >
          ACCESSORIES
        </button>
        <button
          class="btnC"
          @click="select = 4"
          :class="{ 'access-faro': select == 4 }"
        >
          MONITORS
        </button>
      </div>
    </div>
  </div>

  <div class="container access-body pt-4 mt-3 p-0">
    <div class="row">
      <div class="col-3 pr-1">
        <h4 class="fillter mb-4 pb-3">FILTER BY</h4>
        <div v-if="select === 1">
          <div
            class="pl-3 fillter-pad"
            v-for="(value, key, index) in json_obj.PC_Acessories.LAPTOPS.Filter"
            :key="key"
            :class="{
              'underline-faro': index != 9,
              ['id-' + index]: true,
            }"
          >
            <p
              class="text-uppercase cursor-point font-weight-bold"
              @click="myFilter(index)"
            >
              {{ key }}
              {{ isActive }}
              {{ menu_select }}
              {{ index }}
              <svg
                class="arrow-access align-middle mr-3"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 18 24"
              >
                <path
                  d="M6.028 0 v6.425l5.549 5.575-5.549 5.575v6.425l11.944-12z"
                />
              </svg>
            </p>
            <div
              :class="{
                ['ids-' + index]: true,
                ['cursor-point']: true,
              }"
              v-for="(value, key) in value"
              :key="key"
            >
              <label class="wrap-checkbox m-0"
                >{{ value }}
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div v-if="select === 2">
          <div
            class="text-uppercase pl-3 fillter-pad"
            v-for="(value, key) in json_obj.PC_Acessories.EGPUS.Filter"
            :key="key"
          >
            {{ key }}
            <svg
              class="arrow-access align-middle mr-2"
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              viewBox="0 0 18 24"
            >
              <path
                d="M6.028 0v6.425l5.549 5.575-5.549 5.575v6.425l11.944-12z"
              />
            </svg>
          </div>
        </div>
        <div v-if="select === 3">
          <div
            class="text-uppercase pl-3 fillter-pad"
            v-for="(value, key) in json_obj.PC_Acessories.ACCESSORIES.Filter"
            :key="key"
          >
            {{ key }}
            <svg
              class="arrow-access align-middle mr-2"
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              viewBox="0 0 18 24"
            >
              <path
                d="M6.028 0v6.425l5.549 5.575-5.549 5.575v6.425l11.944-12z"
              />
            </svg>
          </div>
        </div>
        <div v-if="select === 4">
          <div
            class="text-uppercase pl-3 fillter-pad"
            v-for="(value, key) in json_obj.PC_Acessories.MONITORS.Filter"
            :key="key"
          >
            {{ key }}
            <svg
              class="arrow-access align-middle mr-2"
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              viewBox="0 0 18 24"
            >
              <path
                d="M6.028 0v6.425l5.549 5.575-5.549 5.575v6.425l11.944-12z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="col-9"></div>
    </div>
  </div>
</template>

<script>
import datas from "../assets/data.json";
export default {
  data() {
    return {
      select: 1,
      json_obj: datas,
      isActive: true,
      menu_select: 0,
    };
  },
  methods: {
    myFilter: function (number) {
      this.isActive = !this.isActive;
      this.menu_select = number;
      // some code to filter users
    },
  },
};
</script>

<style></style>
