// pages/common/common.js

const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:0,
       detail:[] ,
       content:"",
    score:0,
    images:[],
    fileIds:[],
  },
  submit() {
    //1.上传9张图片
    wx.showLoading({
      title: '评论中',
    });
    console.log(this.data.content + "_" + this.data.score);
    //2.上传图片到云存储
    //3.创建promise数组
    let promiseArr = [];
    //4.创建循环9次
    for (let i = 0; i < this.data.images.length; i++) {
      //5.创建promise  push数组中
      promiseArr.push(new Promise((reslove, reject) => {
        //5.1获取当前上传图片
        var item = this.data.images[i];
        //5.2创建正则表达式拆分文件后缀 .jpg .png
        let suffix = /\.\w+$/.exec(item)[0];
        //5.3上传图片
        wx.cloud.uploadFile({
          cloudPath: new Date().getTime() + suffix, //上传至云端的路径
          filePath: item,  //小程序临时路径
          success: res => {
            //console.log(res.fileID);
            //将当前文件id保存到data
            var ids = this.data.fileIds.concat(res.fileID);
            this.setData({
              fileIds: ids
            })
            //5.4上传成功将当前云存储fileID保存数组
            //5.5追加任务列表
            reslove();
          },
          fail: err => {
            console.log(err);
          }
        })
        //5.6失败显示出错信息
      }));
    }
    //6.一次性将图片  fileID，分数，内容  保存集合中[集合中一条记录]
    Promise.all(promiseArr).then(res => {
      //6.1添加数据
      db.collection("comment").add({
        data: {
          content: this.data.content,  //评论内容
          score: this.data.score,      //评论分数
          movieid: this.data.movieid,  //电影id
          fileIds: this.data.fileIds   //上传图片的id
        }
      }).then(res => {
        wx.hideLoading();   //隐藏加载框
        wx.showToast({      //显示提示框
          title: '评论成功',
        })
      }).catch(err => {
        wx.hideLoading();
        wx.showToast({
          title: '评论失败',
        })
      })
    })
  },
  onContentChange:function(e){
    var v=(e.detail);
    this.setData({ content: v})
  },
  onScoreChange: function (e) {
   var c=(e.detail);
    this.setData({score:c})
  },
  //上传图片
  uploadimg:function(){
    //选择图片 
    wx.chooseImage({
      count: 9,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: res => {
        const tempFiles = res.tempFilePaths;
        //console.log(tempFiles);
        //预览：将用户选中的图片保存
        this.setData({
          images: tempFiles
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    this.setData({
      id: options.id
    })
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: "xiangqing",
      data: {
        id: options.id
      }
    }).then(res => {
       
      var obj = JSON.parse(res.result);
      this.setData({ detail: obj })
      wx.hideLoading();
  
    }).catch(err => {
      console.log(err);
      wx.hideLoading();
    })

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