// pages/mine/index.js
const $api = require('../../network/request.js').API;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isauth:false,
    userInfo:null,
  },
  getauth:function(){
    var that=this;
    console.log("111")
    wx.getUserProfile({
      desc:'正在获取',
      success:function(res){
        console.log(res.userInfo);
        wx.setStorageSync('userInfo', res.userInfo);
        that.setData({
          isauth: true,
          userInfo: res.userInfo
        })
        // 登录
        that.getLogin();
      },
      fail:function(err){
        console.log(err);
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userinfo = wx.getStorageSync('userInfo');
    if(userinfo){
      this.setData({
        isauth:true,
        userInfo:userinfo
      })
    }
  },
  getLogin: function(){
    wx.login({
      success: res => {
        console.log(res.code);
        if(res.code){
          $api.addUser({  //post请求
            code: res.code
          }).then(res=>{
            console.log(res);
            wx.setStorageSync('openid', res.data);
          }).catch(err=>{
            console.log(err);
          })
        }
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
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