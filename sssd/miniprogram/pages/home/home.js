// pages/home/home.js

Page({

  /**
   * 页面的初始数据
   */

  data: {
    ass:"movielist2",
    movielist: [],
    movielist3: [],
    movielist4: [],
    active: 0,
    /**
 *页面的初始数据
 */
  
    banner_url: [{
      url:"http://img4.imgtn.bdimg.com/it/u=3050819233,4090048645&fm=26&gp=0.jpg"
    }, { url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562391398465&di=12cba44538d31feba009f439cd74d63f&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fent%2Ftransform%2F184%2Fw630h354%2F20190212%2F_4Op-hswimzy4836776.jpg" }, { url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562986120&di=6d3536eac059303a996f9c02f48d883a&imgtype=jpg&er=1&src=http%3A%2F%2Fimg5.178.com%2Fnewgame%2F201406%2F196976371203%2F196976555672.jpg"}],
      open: false,
      indicatorDots: true,//是否显示面板指示点
      autoplay: true,//是否开启自动切换
      interval: 3000,//自动切换时间间隔
      duration: 500//滑动动画时长

   
  },
 
  
 
 
  assd: function(e) {
    var id = e.target.dataset.id;
    wx.navigateTo({
      url: `/pages/common/common?id=${id}`,
    })
  },
  loadmore: function() {
    wx.cloud.callFunction({

      name: "movielist2",
      data: {
        start: this.data.movielist.length,
        count: 10
      }
    }).then(res => {
      // console.log(res);
      var obj = JSON.parse(res.result);
     // console.log(obj);
      this.setData({
        movielist: this.data.movielist.concat(obj.subjects)
      })
    }).catch(err => {
      console.log(err);
    })


  },
  loadmorea: function () {
    wx.cloud.callFunction({

      name: "jijiangshangying",
      data: {
        start: this.data.movielist3.length,
        count: 10
      }
    }).then(res => {
     
      var obj = JSON.parse(res.result);
      //console.log(obj);
      this.setData({
        movielist3: this.data.movielist3.concat(obj.entries)
      })
    }).catch(err => {
      console.log(err);
    })


  },
  loadmoreaa: function () {
    wx.cloud.callFunction({

      name: "top",
      data: {
        start: this.data.movielist4.length,
        count: 10
      }
    }).then(res => {
     
      var obj = JSON.parse(res.result);
      
      this.setData({
        movielist4: this.data.movielist4.concat(obj.subjects)
      })
     
    }).catch(err => {
      console.log(err);
    })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //调用云函数
    this.loadmore();
    this.loadmorea();
    this.loadmoreaa();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
     
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log(this.data.ass);
    this.loadmore();
    this.loadmorea();
    this.loadmoreaa();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})