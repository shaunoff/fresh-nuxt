import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _0b2fde7f = () => import('../../../src/pages/landing_pages/_landing_page_id/retailers/_retailer_id.vue' /* webpackChunkName: "pages/landing_pages/_landing_page_id/retailers/_retailer_id" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/landing:pages?/:landing_page_id?/retailers/:retailer_id?",
			component: _0b2fde7f,
			name: "landingpages-landing_page_id-retailers-retailer_id"
		}
    ],
    fallback: false
  })
}
