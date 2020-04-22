import setupOutcome from "./setup"; // Returns either true or false

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import { initializeApp, auth } from "firebase";

import moment from "moment";
Vue.prototype.moment = moment;
Vue.config.productionTip = false;

// Register global custom directive called `v-autofocus`
import autofocus from "./directives/autofocus";
Vue.directive("autofocus", autofocus);

// firebaseConfig auto generated in project settings
initializeApp({
  apiKey: "AIzaSyAV6-5qgQ_-tiUaSuEH3540U7fGYC4dh48",
  authDomain: "cusreview-4f10e.firebaseapp.com",
  databaseURL: "https://cusreview-4f10e.firebaseio.com",
  projectId: "cusreview-4f10e",
  appId: "1:657764597177:web:741151f962cd486d2a8a68"
});

// Wait for firebase to finish initialization before creating the app.
// So that the router navigation wont break due to invalid auth
auth().onAuthStateChanged(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount("#app");
});
