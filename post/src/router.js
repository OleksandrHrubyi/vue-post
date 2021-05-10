import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./components/Posts.vue"),
    },
    {
      path: "/add",
      component: () => import("./components/AddPost.vue"),
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
