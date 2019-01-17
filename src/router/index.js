import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function _import (path) {
  return () => import(`@/pages/${path}.vue`);
}

import Layout from '@/pages/layout.vue';
import Login from '@/pages/login.vue';
import Plan from '@/pages/plan/plan.vue';
import Melt from '@/pages/melt.vue';
import Cast from '@/pages/cast.vue';
import Ribbon from '@/pages/ribbon/ribbon.vue';
import User from '@/pages/user/user.vue';
import Roll from '@/pages/roll/roll.vue';
import Measure from '@/pages/measure/measure.vue';
import Storage from '@/pages/storage/storage.vue';
import Data from '@/pages/data/data.vue';

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      redirect: '/login',
      children: [
        {
          path: 'plan/:castId',
          name: 'plan',
          component: Plan,
          meta: { title: '生产计划', icon: 'plan' }
        },
        {
          path: 'melt/:castId',
          name: 'melt',
          component: Melt,
          meta: { title: '化钢记录表', icon: 'melt' }
        },
        {
          path: 'cast/:castId',
          name: 'cast',
          component: Cast,
          meta: { title: '喷带记录表', icon: 'cast' }
        },
        {
          path: 'ribbon',
          name: 'ribbon',
          component: Ribbon,
          meta: { title: '带材牌号管理', icon: 'ribbon' }
        },
        {
          path: 'user',
          name: 'user',
          component: User,
          meta: { title: '用户管理', icon: 'user' }
        },
        {
          path: 'roll/:castId',
          name: 'roll',
          component: Roll,
          meta: { title: '重卷记录表', icon: 'roll' }
        },
        {
          path: 'measure/:castId',
          name: 'measure',
          component: Measure,
          meta: { title: '检测记录表', icon: 'measure' }
        },
        {
          path: 'storage/:castId',
          name: 'storage',
          component: Storage,
          meta: { title: '库房记录表', icon: 'storage' }
        },
        {
          path: 'data/:castId',
          name: 'data',
          component: Data,
          meta: { title: '统计中心', icon: 'data' }
        }
      ]
    }
  ]
})
