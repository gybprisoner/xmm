// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 3.5,
    movielist:[], //保存电影列表
    movielist4: [],
    movielist3: [],
  },
 ac:function(){
   wx.cloud.callFunction({
     name: "movielist2",
     data: {
       start: 0,
       count: 10,
     }
   }).then(res => {
     // 将字符串转JS对象
     var obj = JSON.parse(res.result);
     console.log(obj);
     this.setData({
       movielist: obj.subjects
     });
   }).catch(err => {
     console.log(err);
   })
 },
  cc: function () {
    wx.cloud.callFunction({
      name: "movielist2",
      data: {
        start: 10,
        count: 10,
      }
    }).then(res => {
      // 将字符串转JS对象
      var obj = JSON.parse(res.result);
      console.log(obj);
      this.setData({
        movielist3: obj.subjects
      });
    }).catch(err => {
      console.log(err);
    })
  },
  bc: function () {
    wx.cloud.callFunction({
      name: "movielist2",
      data: {
        start: 20,
        count: 10,
      }
    }).then(res => {
      // 将字符串转JS对象
      var obj = JSON.parse(res.result);
      console.log(obj);
      this.setData({
        movielist4: obj.subjects
      });
    }).catch(err => {
      console.log(err);
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.调用云函数
    this.ac()
    this.bc()
    this.cc()
    // 2.将云函数返回的电影列表保存
    // 3.显示当前组件
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})