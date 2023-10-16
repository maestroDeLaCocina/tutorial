import("../bootstrap");

import Vue from 'vue';

import App from './pages/App.vue'

import vuetify from './vuetify/vuetify';

export const bus = new Vue();

const admin = new Vue({
    el: "#admin",
    vuetify,
    render: (h) => h(App),
})