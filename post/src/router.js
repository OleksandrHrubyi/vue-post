import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/add",
      component: () => import("./views/NewPost.vue"),
    },
    {
      path: "/users",
      component: () => import("./components/Users.vue"),
    },
    {
      path: "/:id",
      component: () => import("./components/PostInfo.vue"),
    },
  ],
});
