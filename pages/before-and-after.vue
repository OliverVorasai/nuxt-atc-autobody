<template>
  <v-container>
    <v-row justify="center">
      <v-col col="12" class="text-center">
        <h1>Before & After</h1>
        <p>
          Please slide between images to see before and after auto repair
          completions.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="item in $store.state.before_and_afters"
        :key="item.id"
        cols="12"
        sm="12"
        md="4"
      >
        <v-card class="mx-auto">
          <v-carousel
            hide-delimiters
            :show-arrows-on-hover="!$vuetify.breakpoint.xs"
            :prev-icon="mdiChevronLeft"
            :next-icon="mdiChevronRight"
            height="100%"
          >
            <v-carousel-item>
              <v-img :src="item.before.url"></v-img>
            </v-carousel-item>
            <v-carousel-item>
              <v-img :src="item.after.url"></v-img>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'

export default {
  data() {
    return {
      mdiChevronLeft,
      mdiChevronRight,
    }
  },
}
</script>

<style scoped></style>
