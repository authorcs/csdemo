import Vue from 'vue'
import Router from 'vue-router'
import mMain from 'components/m-main/m-main'
import takeOut from 'components/take-out/take-out'
import deskInfo from 'components/desk-info/desk-info'
import orderContent from 'base/order-content'
import riLi from 'base/ri-li'
import riliPlate from 'base/rili-plate'
import dateRi from 'base/date-ri'
import payAll from 'components/pay-all/pay-all'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: mMain
    },
    {
      path: '/takeout',
      component: takeOut
    },
    {
      path: '/eatin',
      component: deskInfo
    },
    {
      path: '/des',
      component: orderContent
    },
    {
      path: '/rili',
      component: riLi
    },
    {
      path: '/plate',
      component: riliPlate
    },
    {
      path: '/date',
      component: dateRi
    },
    {
    	path: '/pay',
      component: payAll
    }
  ]
})
