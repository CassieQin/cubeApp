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
      path: '/label',
      component: resolve => require(['@/components/pages/labels/label.vue'], resolve)
    },{
      path: '/mine',
      component: resolve => require(['@/components/pages/mine/mine.vue'], resolve)
    },{
      path: '/login',
      component: resolve => require(['@/components/pages/login.vue'], resolve)
    }
  ],
  mode:'history'
})
