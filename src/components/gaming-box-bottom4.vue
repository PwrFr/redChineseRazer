<template>
  <div style="background-color: #100e13">
    <div
      style="
        background-image: url('src/assets/products/1Laptops/bg8.jpg');
        width: 100%;
        height: 25rem;
        margin-left: -14%;
      "
    >
      <div
        style="
          font-size: 1.25rem;
          font-family: 'RazerF5', Sans-Serif;
          color: #fff;
          font-weight: bold;
          padding: 4.5rem 0 0 1.875rem;
          margin-left: 49%;
        "
      >
        {{ title }}
      </div>

      <p
        style="
          font-size: 1.125rem;
          font-family: Razerf5, Sans-Serif;
          color: #44d62c;
          font-weight: bold;
          padding: 0.5rem 0 0 1.875rem;
          margin-left: 49%;
        "
      >
        <!-- Learn More> -->
        {{ bot }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    bot: String,
  },
};
</script>

<style></style>
