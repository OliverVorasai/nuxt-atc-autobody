<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" disable-resize-watcher app>
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
    <v-app-bar color="blue" flat app>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon
          color="white"
          aria-label="Show side navigation"
          @click.stop="drawer = !drawer"
        >
          <v-icon>{{ mdiMenu }}</v-icon>
        </v-app-bar-nav-icon>
      </span>
      <v-img
        :src="require('@/assets/atc-logo.svg')"
        max-height="50"
        max-width="150"
      ></v-img>
      <!--
      <v-toolbar-title v-text="$store.state.business_info.name" />
      -->
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
    </v-app-bar>
    <v-main>
      <v-container class="pa-0" fluid>
        <nuxt />
      </v-container>
    </v-main>
    <!--
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    -->
  </v-app>
</template>

<script>
import { mdiMenu, mdiHome } from '@mdi/js'

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
          icon: mdiHome,
          title: 'About Us',
          to: '/about',
        },
        {
          icon: mdiHome,
          title: 'Service',
          to: '/service',
        },
        {
          icon: mdiHome,
          title: 'Contact Us',
          to: '/contact',
        },
      ],
      title: 'Vuetify.js',
      mdiMenu,
    }
  },
}
</script>
