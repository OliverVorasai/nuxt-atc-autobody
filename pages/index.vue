<template>
  <div>
    <v-parallax
      :src="require('@/assets/stock-images/man-polish-car-garage-2.jpg')"
      height="800"
      alt=""
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
            Owner operated collision repair centered in the heart of Portland.
          </h2>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row class="my-12 mx-2" justify="center">
      <v-img
        v-for="image in images"
        :key="image.pathShort"
        :max-height="brandHeight"
        :max-width="brandIconMaxWidth"
        :src="image.pathLong"
        :class="brandIconClasses"
        :alt="image.pathShort"
        contain
      ></v-img>
    </v-row>
    <v-row class="mx-0">
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="6"
        class="pa-6 pa-md-16 blue lighten-5"
      >
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
          Customer satisfaction is our number one priority, so we strive to have
          your vehicle in and out as fast as possible while maintaining our
          reputation for high quality repairs.
        </p>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6" class="pa-0">
        <v-img
          :src="require('@/assets/stock-images/front-image-1.jpg')"
          height="100%"
          alt="ATC Auto Body Business Sign"
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
    <v-row justify="center" class="mx-6 mx-md-16 mt-6">
      <v-col cols="12">
        <h1 class="text-center blue--text">Warranty Guarantee</h1>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4">
        <div class="text-center mb-6">
          <v-icon size="96" color="orange darken-2">{{
            mdiCarShiftPattern
          }}</v-icon>
        </div>
        <h2 class="text-h5 text-lg-h4 font-weight-bold mb-6">
          Parts Warranty:
        </h2>
        <p class="text-h6">
          All parts will be guaranteed against defects of material and
          workmanship for the term of the manufacturer’s warranty with ATC Auto
          Body. Generally, parts will be covered for one year, but there may be
          some variations depending on the specific part.
        </p>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4">
        <div class="text-center mb-6">
          <v-icon size="96" color="teal">{{ mdiFormatPaint }}</v-icon>
        </div>
        <h2 class="text-h5 text-lg-h4 font-weight-bold mb-6">
          Paint Warranty:
        </h2>
        <p class="text-h6">
          You can be assured that your paint will meet the high standards we
          place on our work and will be backed by a nationwide paint warranty.
          Please contact us for more details on our paint warranty policy.
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {
  mdiShieldCar,
  mdiSpray,
  mdiHammerWrench,
  mdiCarShiftPattern,
  mdiFormatPaint,
} from '@mdi/js'

export default {
  data() {
    return {
      brandHeight: 150,
      images: [],
      mdiShieldCar,
      mdiSpray,
      mdiHammerWrench,
      mdiCarShiftPattern,
      mdiFormatPaint,
      structuredData: {
        '@context': 'https://schema.org/',
        '@type': this.$store.state.business_info.business_type,
        image: [require('@/assets/stock-images/front-image-1.jpg')],
        '@id': this.$store.state.business_info.url,
        name: this.$store.state.business_info.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: this.$store.state.business_info.address_street,
          addressLocality: this.$store.state.business_info.address_locality,
          addressRegion: this.$store.state.business_info.address_region,
          postalCode: this.$store.state.business_info.postal_code,
          addressCountry: this.$store.state.business_info.address_country,
        },
        url: this.$store.state.business_info.url,
        telephone: this.$store.state.business_info.telephone,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: this.$store.state.business_info.open_hour,
            closes: this.$store.state.business_info.close_hour,
          },
        ],
      },
    }
  },
  computed: {
    brandIconMaxWidth() {
      if (this.$vuetify.breakpoint.xs) {
        return '45%'
      } else {
        return this.brandHeight
      }
    },
    brandIconClasses() {
      if (this.$vuetify.breakpoint.xs) {
        return 'mx-2 my-6'
      } else {
        return 'mx-12 my-6'
      }
    },
  },
  created() {
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
  head() {
    return {
      title: 'Home',
      script: [
        {
          type: 'application/ld+json',
          json: this.structuredData,
        },
      ],
    }
  },
}
</script>

<style scoped>
.hero-box {
  background-color: rgb(255, 255, 255, 0.75);
}
</style>
