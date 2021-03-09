import { createRouter, createWebHistory } from 'vue-router';
const Home = ()=> import('../views/home/Home.vue');
const Search = ()=> import('../views/search/Search.vue');
const Cart = ()=> import('../views/cart/Cart.vue');
const Profile = ()=> import('../views/profile/Profile.vue');
const Detail = ()=> import('../views/detail/Detail.vue');

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
