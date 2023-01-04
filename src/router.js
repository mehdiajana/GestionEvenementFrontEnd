import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import ListeUsers from './components/ListeUsers'
import addDemande from './components/addDemande'
import ListeDemande from './components/ListeDemande'
import ListeDemandes from './components/ListeDemandes'
import createMotif from './components/createMotif'









export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next('/');
        } else {
          next();
        }
      }
    },
    {
      path: '/register',
      component: Register,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next('/');
        } else {
          next();
        }
      }
    }, { 
      path: '/GestionUsers',
      component: ListeUsers,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next();
          console.log(localStorage.getItem('token'))
        } else {
          next('/');
        }
      }
    }, {
      path: '/adddemande',
      component: addDemande,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next();
          console.log(localStorage.getItem('token'))
        } else {
          next('/');
        }
      } 
    }, {
      path: '/mydemandes',
      component: ListeDemande,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next();
          console.log(localStorage.getItem('token'))
        } else {
          next('/');
        }
      }
    }, {
      path: '/demandes',
      component: ListeDemandes,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next();
          console.log(localStorage.getItem('token'))
        } else {
          next('/');
        }
      }
    } ,{
      path: '/addMotif',
      component: createMotif,
      name: 'addMotif',
      props: true,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next();
          console.log(localStorage.getItem('token'))
        } else {
          next('/');
        }
      }
    }
  ]
})

Vue.use(Router)
