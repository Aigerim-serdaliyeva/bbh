import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const vueRouter = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: 'main',
      component: () => import("./sections/SectionMain.vue")
    },
    {
      path: "/advantage",
      name: 'advantage',
      component: () => import('./sections/SectionAdvantage.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('./sections/SectionGallery.vue')
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('./sections/SectionLayout.vue')
    },
    {
      path: '/stages',
      name: 'stages',
      component: () => import('./sections/SectionStages.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./sections/SectionContact.vue')
    },
  ]
})

export default vueRouter;