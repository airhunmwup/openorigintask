import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Events from '../views/events.vue'
import Live from '../views/live.vue'
import Teams from '../views/teams.vue'
import Leagues from '../views/leagues.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/events',
    name: 'events',
    component: Events
  },
  {
    path: '/live',
    name: 'live',
    component: Live
  },
  {
    path: '/teams',
    name: 'teams',
    component: Teams
  },
  {
    path: '/leagues',
    name: 'leagues',
    component: Leagues
  },
  {
    path: '/events',
    name: 'Events',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/events.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
