import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieView from '../views/MovieView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'movie',
    component: MovieView
  
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/VideoView.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/MineView.vue')
  },
  {
    path: '/watched',
    name: 'watched',
    component: () => import('../views/WatchedView.vue')
  },
  {
    path: '/assess/:ids',
    name: 'assess',
    props: true,
    component: () => import('../views/AssessView.vue')
  },
  {
    path: '/discuss',
    name: 'discuss',
    props:true,
    component: () => import('../views/DiscussView.vue')
  },
  {
    path: '/film/:id',
    name: 'film',
    props: true,
    meta: {
      hideNav: true,
    },
    component: () => import('../views/filmView.vue')
  },
  {
    path: '/seemore2',
    name: 'seemore2',
    props: true,
    meta: {
      hideNav: true,
    },
    component: () => import('../views/SeeMoreView2.vue')
  },
  {
    path: '/seemore1',
    name: 'seemore1',
    props: true,
    meta: {
      hideNav: true,
    },
    component: () => import('../views/SeeMoreView1.vue')
  },
  {
    path: '/hotWel',
    name: 'hotWel',
    meta: {
      hideNav: true,
    },
    component: () => import('../views/HotWelcomeView.vue')
  },
  {
    path: '/search',
    name: 'search',
    meta: {
      hideNav: true,
      keepAlive: true,
    },
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/dMovie/:i',
    name: 'dMovie',
    props: true,
    meta: {
      hideNav: true,
    },
    component: () => import('../views/DetailOfMovie.vue')
  },
  {
    path: '/videodetailview',
    name: 'videodetailview',
    props: true,
    meta: {
      hideNav: true,
    },
    component: () => import('../views/VideoDetailView.vue')
  },
  {
    path: '/cinemadetail/:id',
    name: 'cinemadetail',
    props:true,
    meta: {
      hideNav: true,
    },
    component:()=>import('../views/CinemaDetail.vue')
  },

  {
    path: '/cinemadetail2/:id',
    name: 'cinemadetail2',
    props: true,
    meta: {
      hideNav: true,
    },
    component: () => import('../views/CinemaDetail2.vue')
  },
  
  {
    path: '/choose',
    name: 'choose',
    meta: {
      hideNav: true,
    },
    component:()=>import('../views/Choose.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
