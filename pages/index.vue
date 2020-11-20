<template>
  <div>
    <v-parallax
      :src="require('@/assets/stock-images/man-polish-car-garage-2.jpg')"
      height="800"
    >
      <v-row align="center" justify="center">
        <v-col
          class="text-center hero-box pa-6"
          cols="12"
          sm="12"
          md="8"
          lg="4"
        >
          <h1 class="text-h4 mb-4 black--text">ATC Autobody &amp; Paint</h1>
          <h2 class="text-h4 black--text">
            Owner operated collision repair center in the heart of Portland.
          </h2>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row justify="center">
      <v-img
        :max-height="brandHeight"
        :max-width="brandHeight"
        :src="require('@/assets/brand-logos/toyota-logo.svg')"
        contain
      ></v-img>
      <v-img
        :max-height="brandHeight"
        :max-width="brandHeight"
        :src="require('@/assets/brand-logos/ford-logo.svg')"
        contain
      ></v-img>
      <v-img
        :max-height="brandHeight"
        :max-width="brandHeight"
        :src="require('@/assets/brand-logos/honda-logo.svg')"
        contain
      ></v-img>
      <v-img
        :max-height="brandHeight"
        :max-width="brandHeight"
        :src="require('@/assets/brand-logos/kia-logo.svg')"
        contain
      ></v-img>
      <v-img
        :max-height="brandHeight"
        :max-width="brandHeight"
        :src="require('@/assets/brand-logos/nissan-logo.svg')"
        contain
      ></v-img>
      <v-img
        :max-height="brandHeight"
        :max-width="brandHeight"
        :src="require('@/assets/brand-logos/chevrolet-logo.jpg')"
        contain
      ></v-img>
      <v-img
        :max-height="brandHeight"
        :max-width="brandHeight"
        :src="require('@/assets/brand-logos/subaru-logo.png')"
        contain
      ></v-img>
      <v-img
        :max-height="brandHeight"
        :max-width="brandHeight"
        :src="require('@/assets/brand-logos/volkswagon-logo.svg')"
        contain
      ></v-img>
      <v-img
        :max-height="brandHeight"
        :max-width="brandHeight"
        :src="require('@/assets/brand-logos/hyundai-logo.svg')"
        contain
      ></v-img>
      <v-img
        :max-height="brandHeight"
        :max-width="brandHeight"
        :src="require('@/assets/brand-logos/mazda-logo.svg')"
        contain
      ></v-img>
    </v-row>
    <v-row no-gutters>
      <v-col class="pa-12">
        <h1 class="text-center mb-8">
          ATC Auto Body is a Full-Service Auto Body Repair Shop
        </h1>
        <p class="text-center text-h5 mb-8">
          ATC Auto Body and Paint is an owner operated collision repair center
          in the heart of Portland. We offer superior and full repair services.
        </p>
        <p class="text-center text-h5 mb-8">
          ATC uses the best equipment and material for repairs as well as
          utilizing the most advanced technologies leaving our customers more
          than satisfied.
        </p>
        <p class="text-center text-h5 mb-8">
          Customer satisfaction is our number One priority, so we strive to have
          your vehicle in and out as fast as possible, while maintaining our
          reputation for high quality repairs.
        </p>
      </v-col>
      <v-col>
        <v-img
          :src="require('@/assets/stock-images/front-image-1.jpg')"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandHeight: 150,
    }
  },
}
</script>

<style scoped>
.hero-box {
  background-color: rgb(255, 255, 255, 0.75);
}
.car-logos > * {
  display: inline-block;
}
</style>
