<template>
  <v-app id="app">
    <SideNavBar v-if="signedInRoute && showDrawer" />

    <v-app-bar
      v-if="signedInRoute"
      app
      dark
      flat
      :clipped-left="true"
      color="blue darken-2"
    >
      <!-- No toggling for now -->
      <v-app-bar-nav-icon @click.stop="showDrawer = !showDrawer" />

      <v-toolbar-title @click="$router.push({ name: 'home' })">
        SCOOP Admin Panel
      </v-toolbar-title>

      <v-spacer />

      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
      />

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Router view for the main view -->
    <router-view />
  </v-app>
</template>

<script>
import AuthType from "@/router/AuthType";
import SideNavBar from "@/components/SideNavBar";

export default {
  name: "App",
  components: {
    SideNavBar
  },
  data() {
    return {
      showDrawer: true
    };
  },
  computed: {
    // Compute if user is on a route that is only available after signing in.
    signedInRoute() {
      return this.$route.meta.Auth_requirements !== AuthType.public_only;
    }
  }
};
</script>

<style scoped>
/* Basic default styles applied throughout the app */
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
