import Vue from 'vue'
import Router from 'vue-router'
//import HelloContainer from "./components/HelloWorld.vue"
// import Mvstore from './components/Mvstore.vue'
import Mvysg from './components/Mvysg.vue'
import Mvshopping from './components/Mvshopping.vue'
import Mvcinema from './components/Mvcinema.vue'
import Mvseat from './components/Mvseat.vue'
import Mvguan from './components/Mvguanying.vue'

import zhuce from './components/denglu/zc.vue'
import denglu from './components/denglu/dl.vue'
import mvhome from './components/tuijian/Mvhome.vue'
import qz from './components/tuijian/quanzi.vue'
import dyxq from './components/dianyingxq/dyxx.vue'
import mvydxq from './components/dianyingxq/MvyueduXq.vue'//阅读详情


import Setup from './components/musheng/Setup.vue'
import about from './components/musheng/common/aboutUs'
import fee from './components/musheng/common/Feedback'

import city from './components/CityPage'
import acti from './components/Activity'
import ying from './components/Mvying'
import dt from './components/Mvdt'
import quanzhi from './components/Mvquanzhi'
import swxq from './components/Mvshiwuxq'

//我的
import help from './components/my/Mvhelp'//帮助中心
import li from './components/my/Mvli'//礼券中心
import money from './components/my/Mvmoney'//我的钱包
import home from './components/my/Mvmyhome'//我的主页
import info from './components/my/Mvinfo'//消息通知
import culture from './components/my/Mvculture'//文化
import foot from './components/my/Mvfootprint'//足迹

// import Thead from './components/TitleBar.vue'


Vue.use(Router)

export default new Router({
  routes: [
     //{path:'/mvstore',component:Mvstore},//商店
     {path:'/mvysg',component:Mvysg},//逸速购
     {path:'/mvshopping',component:Mvshopping},//购物车,
     {path:'/mvcinema',component:Mvcinema},//影院
     {path:'/mvseat',component:Mvseat},//选座
     {path:'/mvguan',component:Mvguan},//观影套餐
     {path:'/',redirect:"/mvhome"},//选择影院

    {path:'/zc',component:zhuce},
    {path:'/dl',component:denglu},
    {path:'/mvhome',component:mvhome},//主页
    {path:'/qz',component:qz},
    {path:'/dyxq',component:dyxq},
    {path:'/mvydxq',component:mvydxq},

    {path:"/setup",component:Setup},//设置
    {path:"/about",component:about},//关于我们
    {path:"/fee",component:fee},//关于我们
    //{path:"/thead",component:Thead},//设置

    {path:"/city",component:city},//城市页面
    {path:"/acti",component:acti},//圈子活动详情
    {path:"/ying",component:ying},//逸速购的影院
    {path:"/dt",component:dt},//地图
    {path:"/quanzhi",component:quanzhi},//全益卡
    {path:"/mvswxq",component:swxq},//食物详情

    {path:"/mvhelp",component:help},//帮助中心
    {path:"/mvli",component:li},//礼券
    {path:"/mvmoney",component:money},//我的钱包
    {path:"/mvmyhome",component:home},//我的主页
    {path:"/mvinfo",component:info},//消息中心
    {path:"/mvculture",component:culture},//文化
    {path:"/mvfoot",component:foot},//足迹
   
  ],
})
