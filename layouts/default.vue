<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" disable-resize-watcher right app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-img
        :src="require('@/assets/atc-logo.svg')"
        max-height="50"
        max-width="150"
      ></v-img>
      <v-spacer />
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          color="transparent"
          :aria-label="item.title"
          exact
          depressed
          nuxt
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <div class="nav-spacer hidden-sm-and-down"></div>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon
          color="white"
          aria-label="Show side navigation"
          @click.stop="drawer = !drawer"
        >
          <v-icon color="black">{{ mdiMenu }}</v-icon>
        </v-app-bar-nav-icon>
      </span>
    </v-app-bar>
    <v-main>
      <v-container class="pa-0" fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer class="default-footer">
      <v-container>
        <v-row justify="center">
          <v-col cols="6" sm="6" md="4" lg="2">
            <div>
              <h4 class="pb-6">Site Navigation</h4>
              <ul>
                <li v-for="item in items" :key="item.title" class="pb-6">
                  <nuxt-link :to="item.to" :aria-label="item.title">{{
                    item.title
                  }}</nuxt-link>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col class="hidden-sm-and-down" cols="6" sm="6" md="4" lg="2">
            <div>
              <h4 class="pb-6">Web Design</h4>
              <p class="pb-6 mb-0">Design by Oliver Vorasai</p>
              <p class="pb-6 mb-0">
                Visit at
                <a href="https://olivervorasai.com">www.olivervorasai.com</a>
              </p>
            </div>
          </v-col>
          <v-col cols="6" sm="6" md="4" lg="2">
            <div>
              <h4 class="pb-6">Contact Information</h4>
              <p class="pb-6 mb-0">
                {{ $store.state.business_info.telephone_pretty }}
              </p>
              <p class="pb-6 mb-0">
                {{ $store.state.business_info.address_street }},
                {{ $store.state.business_info.address_locality }},
                {{ $store.state.business_info.address_region }},
                {{ $store.state.business_info.postal_code }}
              </p>
              <h4 class="pb-6">Hours</h4>
              <p class="pb-6 mb-0">Monday - Friday</p>
              <p class="pb-6 mb-0">
                {{ $store.state.business_info.open_hour }} -
                {{ $store.state.business_info.close_hour }}
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" sm="12" md="6" lg="6">
            <p class="mb-0">
              Stock images sourced from
              <a href="https://www.freepik.com/">www.freepik.com</a>
            </p>
            <p class="mb-0">
              Copyright &copy; 2020 {{ $store.state.business_info.name }}, All
              Rights Reserved.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { mdiMenu, mdiHome, mdiMap, mdiCompare } from '@mdi/js'

export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: mdiHome,
          title: 'Home',
          to: '/',
        },
        {
          icon: mdiCompare,
          title: 'Before & After',
          to: 'before-and-after',
        },
        {
          icon: mdiMap,
          title: 'Location',
          to: '/location',
        },
      ],
      title: 'Vuetify.js',
      mdiMenu,
    }
  },
}
</script>

<style scoped lang="scss">
.default-footer {
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
}
.nav-spacer {
  width: 150px;
}
</style>
