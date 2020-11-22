<template>
  <div class="col-4 mt-4">
    <div
      :class="{
        ['tag-yellow']: item.tag == 'yellow',
        ['tag-green']: item.tag == 'green',
        ['tag-orange']: item.tag == 'orange',
        ['tag-blue']: item.tag == 'blue',
      }"
    >
      <div
        :class="{
          ['tag-small-yellow']: item.tag == 'yellow',
          ['tag-small-green']: item.tag == 'green',
          ['tag-small-orange']: item.tag == 'orange',
          ['tag-small-blue']: item.tag == 'blue',
        }"
      ></div>
      {{ item.tagTitle }}
    </div>

    <div class="card-product">
      <div class="img-crop cursor-point">
        <img class="w-100" :src="item.img" alt="" />
      </div>
      <div
        v-if="number == 1 || number == 2"
        class="compare pl-3 pt-2 d-flex align-items-center"
      >
        <label class="wrap-checkbox compare-text mt-1"
          >Compare
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="card-body-access p-3 pr-4 pl-3">
        <div class="title-product">
          {{ item.name }}
        </div>
        <div class="detail-product">
          <ul class="pl-3 pt-2">
            <li v-for="(i, index) in item.detail" :key="index">
              {{ item.detail[index] }}
            </li>
          </ul>
        </div>
        <div class="view-detail pl-1 pt-2">View details ></div>
        <div class="setBottom">
          <div class="price-access">{{ item.price }}</div>
          <div class="btn btn-razer">{{ item.add_to_card_bnt }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "number"],
};
</script>

<style></style>
