// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
// 1.引入request-promise库
var rp = require("request-promise");
exports.main = async (event, context) => {
  // 2.返回豆瓣电影列表
  return rp(`http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${event.start}&count=${event.count}`).then(res=>{
    console.log(res);
    return res;
  }).catch(err=>{
    console.log(err);
  })
}