import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import NoFind from '@/components/NoFind'
import WorkList from '@/components/student/WorkList'
import StudentList from '@/components/student/StudentList'
import View from "@/components/view/View"
import MapView from "@/components/view/Map"
import Earth from "@/components/view/Earth"
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      hidden:true,
      component: Login
    },
    {
      path: '/home',
      name: '学生管理',
      hidden:false,
      component: Home,
      fonticon:"fa fa-users",
      children:[
        {
          path: '/home/student',
          name: '学生信息',
          fonticon:"fa fa-address-card",
          component: StudentList,
        },
        {
          path: '/home/work',
          name: '学生作业',
          fonticon:"fa fa-bar-chart",
          component: WorkList,
        }
      ]
    },
    {
      path: '/home',
      name: '视图管理',
      hidden:false,
      component: Home,
      fonticon:"fa fa-area-chart",
      children:[
        {
          path: '/home/view',
          name: '视图作业',
          fonticon:"fa fa-book",
          component: View,
        },
        {
          path: '/home/map',
          name: '地图信息',
          fonticon:"fa fa-bar-chart",
          component: MapView,
        },
        {
          path: '/home/earth',
          name: '速度视觉',
          fonticon:"fa fa-bar-chart",
          component: Earth,
        }
      ]
    },
    {
      path: '*',
      hidden:true,
      name: 'NoFind',
      component: NoFind
    },
  ]
})