import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/pages/login.vue'], resolve)
    },{
      path: '/register',
      component: resolve => require(['@/components/pages/register.vue'], resolve)
    },{
      path: '/note',
      component: resolve => require(['@/components/pages/notes/note.vue'], resolve)
    },{
      path: '/noteDetail',
      component: resolve => require(['@/components/pages/notes/noteDetail.vue'], resolve)
    },{
      path: '/file',
      component: resolve => require(['@/components/pages/files/file.vue'], resolve)
    },{
      path: '/fileDetail',
      component: resolve => require(['@/components/pages/files/fileDetail.vue'], resolve)
    },{
      path: '/label',
      component: resolve => require(['@/components/pages/labels/label.vue'], resolve)
    },{
      path: '/mine',
      component: resolve => require(['@/components/pages/mine/mine.vue'], resolve)
    },{
      path: '/personal',
      component: resolve => require(['@/components/pages/mine/personalInfor.vue'], resolve)
    },{
      path: '/fontfamily',
      component: resolve => require(['@/components/pages/mine/fontFamily.vue'], resolve)
    },{
      path: '/fontsize',
      component: resolve => require(['@/components/pages/mine/fontSize.vue'], resolve)
    },{
      path: '/security',
      component: resolve => require(['@/components/pages/mine/security.vue'], resolve)
    },{
      path: '/us',
      component: resolve => require(['@/components/pages/mine/us.vue'], resolve)
    },{
      path: '/company',
      component: resolve => require(['@/components/pages/mine/company.vue'], resolve)
    },{
      path: '/software',
      component: resolve => require(['@/components/pages/mine/software.vue'], resolve)
    },{
      path: '/policy',
      component: resolve => require(['@/components/pages/mine/policy.vue'], resolve)
    },{
      path: '/score',
      component: resolve => require(['@/components/pages/mine/score.vue'], resolve)
    },{
      path: '/feedback',
      component: resolve => require(['@/components/pages/mine/feedback.vue'], resolve)
    },{
      path: '/login',
      component: resolve => require(['@/components/pages/login.vue'], resolve)
    }
  ],
  mode:'history'
})