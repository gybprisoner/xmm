// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
var rp = require("request-promise");
// 云函数入口函数
exports.main = async (event, context) => {
  //2:返回豆瓣电影列表
  return rp(`http://api.douban.com/v2/movie/subject/${event.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`).
    then(res => {         //成功回调
      console.log(res);//只能日志控制台输出
      return res;
    }).catch(err => {
      console.log(err);
    })
}