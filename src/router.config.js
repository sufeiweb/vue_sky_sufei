
import home from  './components/home.vue';
import login from  './components/login.vue';
import reg from  './components/reg.vue';
import user from  './components/user.vue';
const routes=[
  {path:'/home',component:home},
  {path:'/user/login',component:login},
  {path:'/user/reg',component:reg},
  {path:'/home',component:home},
  {path:'/user',component:user},
  {path:'/',redirect:'/user'}
];
export  default {
  routes
}
