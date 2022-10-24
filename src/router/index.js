import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import EventClick from "@/views/EventClick";
import EventChange from "@/views/EventChange";
import ComputedTest from "@/views/ComputedTest";
import WatchTest from "@/views/WatchTest";
import NestedComponent from "@/components/NestedComponent";
import ParentComponent from "@/components/ParentComponent";
import SlotUseModalLayout from "@/views/SlotUseModalLayout";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/eventclick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/eventchange',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/computed',
    name: 'ComputedTest',
    component: ComputedTest
  },
  {
    path: '/watch',
    name: 'WatchTest',
    component: WatchTest
  },
  {
    path: '/nested',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/parent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path: '/slot',
    name: 'SlotUseModalLayout',
    component: SlotUseModalLayout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
