<template>
  <div class="container-fluid" id="bg-monitorRow3">
    <div class="row">
      <div class="col-lg-12">
        <h2 id="header-monitorRow3">BIG, BRIGHT, BRILLIANT DCI-P3 COLOR</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <p class="messageMonitorRow3">
          One of the hallmarks of a premium display is the ability to show the
          whole spectrum of vibrant colors, while also <br />rendering deep rich
          blacks. The Razer Raptor does just that, featuring an IPS display
          supporting HDR400 with an <br />insanely wide factory calibrated
          DCI-P3 color gamut, which is quickly becoming the new film industry
          standard and <br />surpasses the sRGB standard. With life-like colors
          and WQHD resolution, the world will fade away as you are
          <br />immersed in your favorite games and movies.
        </p>
      </div>
    </div>
    <div class="row" id="displayMonitorRow3">
      <div class="col-lg-2">
        <div class="row pt-3">
          <h1>27”</h1>
          <h5 class="pt-3">Display</h5>
          <p class="text-g-monitor">WQHD 2560 x 1440 <br />1ms Response</p>
        </div>
      </div>
      <div class="col-lg-2">
        <div class="row pt-3">
          <h1>95% DCI-P3</h1>
          <h5 class="pt-3">Color</h5>
          <p class="text-g-monitor pl-5">
            Wider than sRGB for<br />cinematic quality
          </p>
        </div>
      </div>
      <div class="col-lg-2 ml-5">
        <div class="row pt-3">
          <h1 class="pl-5">HDR400</h1>
          <p class="text-g-monitor pl-5">
            High Dynamic Range<br />with 420 Nits
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#bg-monitorRow3 {
  background-image: url("https://assets2.razerzone.com/images/pnx.assets/8311f08d80fc12fde210165c63334271/raptor-update-dev_04-usp1.jpg");
  width: 90rem;
  min-height: 58.35rem;
  background-position-x: center;
  justify-content: center;
  font-family: RazerF5, Arial, Helvetica, sans-serif;
}
#header-monitorRow3 {
  color: green;
  text-align: center;
  padding: 2rem;
}
.messageMonitorRow3 {
  color: rgb(136, 136, 136);
  font-size: 1.2rem;
  text-align: center;
}
#displayMonitorRow3 {
  color: #fff;
  justify-content: center;
  justify-items: center;
}
.text-g-monitor {
  color: rgb(136, 136, 136);
  text-align: center;
}
</style>
<script>
export default {};
</script>
