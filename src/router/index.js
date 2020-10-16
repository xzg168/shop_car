import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("../views/Index.vue")
      },
      {
        path: "/shop",
        name: "Shop",
        component: () => import("../views/Goods.vue")
      },
      {
        path: "/car",
        name: "Car",
        component: () => import("../views/Car.vue")
      },
      {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
