import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '../layouts/MainLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'

import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import FoodDetails from '../views/FoodDetails.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import OrderSuccess from '../views/OrderSuccess.vue'
import Orders from '../views/Orders.vue'
import OrderDetails from '../views/OrderDetails.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'

import Dashboard from '../views/admin/Dashboard.vue'
import AdminOrders from '../views/admin/Orders.vue'
import Products from '../views/admin/Products.vue'
import ProductForm from '../views/admin/ProductForm.vue'
import Categories from '../views/admin/Categories.vue'
import Customers from '../views/admin/Customers.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'home', component: Home },
      { path: 'menu', name: 'menu', component: Menu },
      { path: 'menu/:id', name: 'food-details', component: FoodDetails },
      { path: 'cart', name: 'cart', component: Cart },
      { path: 'checkout', name: 'checkout', component: Checkout },
      { path: 'order-success', name: 'order-success', component: OrderSuccess },
      { path: 'orders', name: 'orders', component: Orders },
      { path: 'orders/:id', name: 'order-details', component: OrderDetails },
      { path: 'profile', name: 'profile', component: Profile }
    ]
  },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: '', name: 'admin-dashboard', component: Dashboard },
      { path: 'orders', name: 'admin-orders', component: AdminOrders },
      { path: 'products', name: 'admin-products', component: Products },
      { path: 'products/create', name: 'admin-product-create', component: ProductForm },
      { path: 'products/:id/edit', name: 'admin-product-edit', component: ProductForm },
      { path: 'categories', name: 'admin-categories', component: Categories },
      { path: 'customers', name: 'admin-customers', component: Customers }
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})