import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import Vuex from 'vuex'//vuex存值
//Vue.use(Vuex);
import MintUI from 'mint-ui'//1.引入mint-UI所有的组件：完整引入
import'mint-ui/lib/style.css'//2.单独引入mint-UI样式文件
Vue.use(MintUI)//3.将mint-ul组件注册vue实例中


import axios from "./axios.js"//引入axios


Vue.config.productionTip = false

// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
/*
const myStore=new Vuex.Store({//Vuex数据库
  state:{//数据
    ysgPrice:0,
  },
  getters:{//让组件读取
    myprice(state){
      return state.ysgPrice;
    }
  },
  mutations:{//对值修改
    priceadd(state,value){
      // console.log(state.ysgPrice);
    },
  },
  
});
*/
//import './font/iconfont.css'//引入图标文件

new Vue({
  router,
  //store:myStore,
  render: h => h(App)
}).$mount('#app')
