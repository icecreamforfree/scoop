<template>
  <v-navigation-drawer id="side-nav-bar" :clipped="true" app>
    <v-list-item two-line>
      <v-list-item-content>
        <p class="overline">Account</p>

        <v-list-item-title>
          {{ "JJ Lee" }}
        </v-list-item-title>

        <v-list-item-subtitle>
          {{ "JJ@enkeldigital.com" }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list dense>
      <v-list-item
        exact
        ripple
        v-for="item in items"
        :key="item.title"
        :to="item.link"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- @todo Add support for child groups -->
      <!-- <v-list-group
        v-if="item.children"
        :key="item.text"
        v-model="item.model"
        :prepend-icon="item.model ? item.icon : item['icon-alt']"
        append-icon=""
      >
        <v-list-item v-for="(child, i) in item.children" :key="i" link>
          <v-list-item-action>
            <v-icon>{{ child.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ child.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group> -->

      <!-- Logout button at the bottom -->
      <v-list-item ripple hover @click="logout">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// UI reference link https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/layouts/layouts/demos/google-contacts.vue

// @todo Rewrite component to code the controls into the template directly.

import logout from "@/controllers/logout";

export default {
  name: "side-nav-bar",
  data() {
    return {
      items: [
        {
          icon: "mdi-view-dashboard",
          text: "Dashboard",
          link: { name: "home" }
        },
        {
          icon: "mdi-cash-usd",
          text: "Earnings",
          link: { name: "earnings" }
        },
        {
          icon: "mdi-calendar",
          text: "View Schedule",
          link: { name: "view-schedule" }
        },
        {
          icon: "mdi-plus",
          text: "Add New product",
          link: { name: "new-product" }
        },
        {
          icon: "mdi-view-week",
          text: "View all Products",
          link: { name: "all-products" }
        },
        {
          icon: "mdi-account-group-outline",
          text: "View Reviews",
          link: { name: "view-reviews" }
        },
        {
          icon: "mdi-settings",
          text: "Settings",
          link: { name: "settings" }
        },
        {
          icon: "mdi-account",
          text: "Contact Support",
          link: { name: "contact-support" }
        },
        {
          icon: "mdi-help-circle",
          text: "FAQs",
          link: { name: "faq" }
        },
        {
          icon: "mdi-message",
          text: "Send feedback",
          link: { name: "feedback" }
        },
        {
          icon: "mdi-cellphone-link",
          text: "App downloads",
          link: { name: "downloads" }
        }
      ]
    };
  },
  methods: {
    logout
  }
};
</script>

<style scoped>
#side-nav-bar {
  text-align: left;
}
</style>
