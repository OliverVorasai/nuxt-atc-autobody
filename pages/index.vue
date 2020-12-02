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
          <h1 class="text-h4 mb-4 blue--text">ATC Autobody &amp; Paint</h1>
          <h2 class="text-h4 black--text">
            Owner operated collision repair center in the heart of Portland.
          </h2>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row class="my-12" justify="center">
      <v-img
        v-for="image in images"
        :key="image.pathShort"
        :max-height="brandHeight"
        :max-width="brandHeight"
        :src="image.pathLong"
        class="mx-12 my-6"
        contain
      ></v-img>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="6" class="pa-16 blue lighten-5">
        <h1 class="text-center text-h5 text-lg-h4 blue--text mb-4 mb-xl-12">
          ATC Auto Body is a Full-Service Auto Body Repair Shop
        </h1>
        <p class="text-center text-h6 text-xl-h5 mb-xl-12">
          ATC Auto Body and Paint is an owner operated collision repair center
          in the heart of Portland. We offer superior and full repair services.
        </p>
        <p class="text-center text-h6 text-xl-h5 mb-xl-12">
          ATC uses the best equipment and material for repairs as well as
          utilizing the most advanced technologies leaving our customers more
          than satisfied.
        </p>
        <p class="text-center text-h6 text-xl-h5 mb-xl-12">
          Customer satisfaction is our number One priority, so we strive to have
          your vehicle in and out as fast as possible, while maintaining our
          reputation for high quality repairs.
        </p>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6" class="pa-0">
        <v-img
          :src="require('@/assets/stock-images/front-image-1.jpg')"
          height="100%"
        ></v-img>
      </v-col>
    </v-row>
    <v-row class="mx-6 mx-md-16 mt-6">
      <v-col cols="12">
        <h1 class="text-center blue--text">
          ATC Autobody &amp; Paint Services
        </h1>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4">
        <div class="text-center mb-6">
          <v-icon size="96" color="blue darken-2">{{ mdiShieldCar }}</v-icon>
        </div>
        <h2 class="text-h5 text-lg-h4 font-weight-bold mb-6">
          Let us deal with your insurance.
        </h2>
        <p class="text-h6">
          Shopping for auto repairs can be stressful when your only mode of
          transporation is broken down. Allow us to provide free estimates and
          handle insurance claims worry free.
        </p>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4">
        <div class="text-center mb-6">
          <v-icon size="96" color="red">{{ mdiSpray }}</v-icon>
        </div>
        <h2 class="text-h5 text-lg-h4 font-weight-bold mb-6">
          Restore your vehicle with expert painting.
        </h2>
        <p class="text-h6">
          Our expert painting and color matching will make your car look as good
          as new. We also provide auto detailing for customization needs.
        </p>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4">
        <div class="text-center mb-6">
          <v-icon size="96" color="green">{{ mdiHammerWrench }}</v-icon>
        </div>
        <h2 class="text-h5 text-lg-h4 font-weight-bold mb-6">
          Fix any body damage from accidents to crashes.
        </h2>
        <p class="text-h6">
          We excel at paintless dent removals, automotive glass replacement, and
          uni-body repair and straightening.
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiShieldCar, mdiSpray, mdiHammerWrench } from '@mdi/js'

export default {
  data() {
    return {
      brandHeight: 150,
      images: [],
      mdiShieldCar,
      mdiSpray,
      mdiHammerWrench,
    }
  },
  mounted() {
    this.importAll(
      require.context('@/assets/brand-logos/', true, /\.svg$|.png$|.jpg$/)
    )
  },
  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      )
    },
  },
}
</script>

<style scoped>
.hero-box {
  background-color: rgb(255, 255, 255, 0.75);
}
</style>
