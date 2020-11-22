<template>
  <div class="access mt-5 pt-3">
    <div class="text-center container pt-3 mt-4">
      <h1 class="text-light pc-title pt-1 mb-4 pb-1">PC</h1>
      <div id="myDIV row d-flex justify-content-center mt-4">
        <button
          class="btnC"
          @click="
            select = 1;
            isActive1[0] = null;
            isActive2[0] = null;
            isActive3[0] = null;
          "
          :class="{ 'access-faro': select == 1 }"
        >
          LAPTOPS
        </button>
        <button
          class="btnC"
          @click="
            select = 2;
            isActive0[0] = null;
            isActive0[1] = null;
            isActive0[2] = null;
            isActive0[3] = null;
            isActive0[4] = null;
            isActive0[5] = null;
            isActive0[6] = null;
            isActive0[7] = null;
            isActive0[8] = null;
            isActive0[9] = null;
            isActive2[0] = null;
            isActive3[0] = null;
          "
          :class="{ 'access-faro': select == 2 }"
        >
          EGPUS
        </button>
        <button
          class="btnC"
          @click="
            select = 3;
            isActive0[0] = null;
            isActive0[1] = null;
            isActive0[2] = null;
            isActive0[3] = null;
            isActive0[4] = null;
            isActive0[5] = null;
            isActive0[6] = null;
            isActive0[7] = null;
            isActive0[8] = null;
            isActive0[9] = null;
            isActive1[0] = null;
            isActive3[0] = null;
          "
          :class="{ 'access-faro': select == 3 }"
        >
          ACCESSORIES
        </button>
        <button
          class="btnC"
          @click="
            select = 4;
            isActive0[0] = null;
            isActive0[1] = null;
            isActive0[2] = null;
            isActive0[3] = null;
            isActive0[4] = null;
            isActive0[5] = null;
            isActive0[6] = null;
            isActive0[7] = null;
            isActive0[8] = null;
            isActive0[9] = null;
            isActive1[0] = null;
            isActive2[0] = null;
          "
          :class="{ 'access-faro': select == 4 }"
        >
          MONITORS
        </button>
      </div>
    </div>
  </div>

  <div class="container access-body mt-3 p-0">
    <div class="row">
      <div class="col-3 pr-1 pt-4">
        <h4 class="fillter mb-4 pb-3">FILTER BY</h4>
        <div v-if="select === 1">
          <div
            class="pl-3 fillter-pad"
            v-for="(value, key, index) in json_obj.PC_Acessories.LAPTOPS.Filter"
            :key="key"
            :class="{
              'underline-faro': index != 9,
            }"
          >
            <p
              class="text-uppercase cursor-point font-weight-bold"
              @click="isActive0[index] = !isActive0[index]"
            >
              {{ key }}
              <svg
                :class="{
                  ['arrowUp']: isActive0[index] == true,
                  ['arrowDown']: isActive0[index] == false,
                }"
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
                ['cursor-point']: true,
                ['active-faro']: isActive0[index] == false,
                ['distive-faro']: isActive0[index] == true,
                ['null-faro']: isActive0[index] == null,
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
            class="pl-3 fillter-pad"
            v-for="(value, key, index) in json_obj.PC_Acessories.EGPUS.Filter"
            :key="key"
          >
            <p
              class="text-uppercase cursor-point font-weight-bold"
              @click="isActive1[index] = !isActive1[index]"
            >
              {{ key }}
              <svg
                :class="{
                  ['arrowUp']: isActive1[index] == true,
                  ['arrowDown']: isActive1[index] == false,
                }"
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
                ['cursor-point']: true,
                ['active-faro']: isActive1[index] == false,
                ['distive-faro']: isActive1[index] == true,
                ['null-faro']: isActive1[index] == null,
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
        <div v-if="select === 3">
          <div
            class="pl-3 fillter-pad"
            v-for="(value, key, index) in json_obj.PC_Acessories.ACCESSORIES
              .Filter"
            :key="key"
          >
            <p
              class="text-uppercase cursor-point font-weight-bold"
              @click="isActive2[index] = !isActive2[index]"
            >
              {{ key }}
              {{ number }}
              <svg
                :class="{
                  ['arrowUp']: isActive2[index] == true,
                  ['arrowDown']: isActive2[index] == false,
                }"
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
                ['cursor-point']: true,
                ['active-faro']: isActive2[index] == false,
                ['distive-faro']: isActive2[index] == true,
                ['null-faro']: isActive2[index] == null,
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
        <div v-if="select === 4">
          <div
            class="pl-3 fillter-pad"
            v-for="(value, key, index) in json_obj.PC_Acessories.MONITORS
              .Filter"
            :key="key"
          >
            <p
              class="text-uppercase cursor-point font-weight-bold"
              @click="isActive3[index] = !isActive3[index]"
            >
              {{ key }}
              <svg
                :class="{
                  ['arrowUp']: isActive3[index] == true,
                  ['arrowDown']: isActive3[index] == false,
                }"
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
                ['cursor-point']: true,
                ['active-faro']: isActive3[index] == false,
                ['distive-faro']: isActive3[index] == true,
                ['null-faro']: isActive3[index] == null,
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
      </div>
      <div class="col-9">
        <div class="row">
          <div v-if="select === 1" class="pt-3 pl-2 mt-1 amount-products">
            {{ json_obj.PC_Acessories.LAPTOPS.Product.length }} products
          </div>
          <div v-else-if="select === 2" class="pt-3 pl-2 mt-1 amount-products">
            {{ json_obj.PC_Acessories.EGPUS.Product.length }} products
          </div>
          <div v-else-if="select === 3" class="pt-3 pl-2 mt-1 amount-products">
            {{ json_obj.PC_Acessories.ACCESSORIES.Product.length }} products
          </div>
          <div v-else class="pt-3 pl-2 mt-1 amount-products">
            {{ json_obj.PC_Acessories.MONITORS.Product.length }} products
          </div>
          <div class="d-flex align-items-end icon-row">
            <svg
              @click="icon_select = 1"
              :class="{
                'icon-select': icon_select == 1,
                ['cursor-point']: true,
              }"
              class="icon-layout"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"
              />
            </svg>
            <svg
              @click="icon_select = 2"
              :class="{
                'icon-select': icon_select == 2,
                ['cursor-point']: true,
              }"
              class="icon-list"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"
              />
            </svg>
          </div>
        </div>

        <div v-if="select === 1" class="row mt-3 row-product-faro">
          <card
            v-for="(i, index) in json_obj.PC_Acessories.LAPTOPS.Product"
            :key="index"
            :item="json_obj.PC_Acessories.LAPTOPS.Product[index]"
          />
        </div>
        <div v-else-if="select === 2" class="row mt-3 row-product-faro">
          <card
            v-for="(i, index) in json_obj.PC_Acessories.EGPUS.Product"
            :key="index"
            :item="json_obj.PC_Acessories.EGPUS.Product[index]"
          />
        </div>
        <div v-else-if="select === 3" class="row mt-3 row-product-faro">
          <card
            v-for="(i, index) in json_obj.PC_Acessories.ACCESSORIES.Product"
            :key="index"
            :item="json_obj.PC_Acessories.ACCESSORIES.Product[index]"
          />
        </div>
        <div v-else class="row mt-3 row-product-faro">
          <card
            v-for="(i, index) in json_obj.PC_Acessories.MONITORS.Product"
            :key="index"
            :item="json_obj.PC_Acessories.MONITORS.Product[index]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datas from "../assets/data.json";
import card from "./PCaccessCard.vue";
export default {
  data() {
    return {
      icon_select: 1,
      select: 3,
      json_obj: datas,
      isActive0: [null, null, null, null, null, null, null, null, null, null],
      isActive1: [null],
      isActive2: [null],
      isActive3: [null],
      number: 1,
    };
  },
  components: {
    card,
  },
  methods: {
    change() {
      number = 10;
    },
  },
};
</script>

<style></style>
