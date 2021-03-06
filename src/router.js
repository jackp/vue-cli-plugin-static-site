import Vue from "vue";
import Router from "vue-router";
import Home from "./components/views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/components",
      name: "components",
      component: () =>
        import( /* webpackChunkName: "components" */ "./components/views/Components.vue")
    }
  ]
});
