import { createRouter, createWebHistory } from "vue-router";
import Landing from "../pages/landing/index.vue";
import Login from "../pages/auth/login.vue";
import Register from "../pages/auth/register.vue";
import Dashboard from "../pages/admin/dashboard.vue";
import User from "../pages/admin/user.vue";
import Product from "../pages/admin/product.vue";
import Pesanan from "../pages/admin/pesanan.vue";
import Customer from "../pages/customer/ListProduct.vue";

const routes = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/user",
    component: User,
  },
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/pesanan",
    component: Pesanan,
  },
  {
    path: "/customer/:id",
    component: Customer,
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
