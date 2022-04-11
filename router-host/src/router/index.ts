import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// eslint-disable-next-line
// @ts-ignore
import { HomeView } from "../../../sfc-lib-a/dist/sfc-lib-a.es.js";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */
        // eslint-disable-next-line
        // @ts-ignore
        "../../../sfc-lib-b/dist/sfc-lib-b.es.js"
      ).then((module) => module.AboutView),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
