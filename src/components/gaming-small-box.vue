<template>
  <div class="card-gaming col-md-3">
    <img
      class="img- card-img-top"
      src="{{image_product_gaming}}"
      alt="product"
    />

    <div style="margin-bottom: 0rem" class="card-title">
      <h3
        style="
          margin-bottom: 0px;
          padding: 10px 10px 0;
          color: #fff;
          font-weight: 300;
          font-size: 1.125rem;
        "
      >
        {{ name_product_gaming }}
      </h3>
    </div>
    <div
      class="card-text"
      style="font-size: 14px; color: #888; padding: 10px 10px 0"
    >
      {{ info_product_gaming }}
    </div>
    <div style="padding: 10px" class="card-text">
      <a
        style="color: #44d62c; font-weight: 300; font-size: 0.95rem"
        href="#"
        >{{ footer_gaming }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image_product_gaming: String,
    name_product_gaming: String,
    info_product_gaming: String,
    footer_gaming: String,
  },
};
</script>

<style></style>
