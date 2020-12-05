<template>
  <v-container>
    <div class="text-center">
      <h1>Hours &amp; Location</h1>
    </div>
    <div class="text-center mt-6 mb-12">
      <p class="my-0 text-h5">Monday - Friday</p>
      <p class="my-0 text-h5">
        {{ $store.state.business_info.open_hour }} -
        {{ $store.state.business_info.close_hour }}
      </p>
      <p class="my-0 mt-6 font-weight-bold text-h5">
        <a
          href="https://g.page/AtcAutobody?share"
          target="_blank"
          rel="noopener"
          aria-label="Open ATC Autobody on Google Maps"
          >{{ $store.state.business_info.address_full }}</a
        >
      </p>
      <p class="my-0 mt-2 font-weight-bold text-h5">
        <a
          :href="'tel:' + $store.state.business_info.telephone"
          aria-label="Call ATC Autobody"
          >{{ $store.state.business_info.telephone_pretty }}</a
        >
      </p>
    </div>

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

    <v-row justify="center">
      <v-progress-circular
        v-show="!iframe.loaded"
        indeterminate
        color="red"
        size="250"
        width="10"
      ></v-progress-circular>
    </v-row>

    <transition name="fade">
      <iframe
        v-show="iframe.loaded"
        :src="iframe.src"
        frameborder="0"
        allowfullscreen="false"
        aria-hidden="false"
        tabindex="0"
        title="ATC Autobody Google Maps"
        @load="iframe.loaded = true"
      ></iframe>
    </transition>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      iframe: {
        src:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.554092097378!2d-122.58215488420171!3d45.51905423780213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a106e1c31f9f%3A0x550dc6a16d9c152b!2sATC%20AutoBody%20Inc!5e0!3m2!1sen!2sus!4v1605922692671!5m2!1sen!2sus',
        loaded: false,
      },
      images: [],
      brandHeight: 300,
    }
  },
  created() {
    this.importAll(
      require.context('@/assets/building-images/', true, /\.svg$|.png$|.jpg$/)
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

<style scoped lang="scss">
iframe {
  background-color: lightgray;
  width: 100%;

  @media screen and (max-width: 960px) {
    height: 50vh;
  }
  @media screen and (min-width: 961px) {
    height: 80vh;
  }
  border: 0;
}
</style>
