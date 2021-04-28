// pages/ssCompetition/ssCompetition.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    i:['小组赛','8强','4强','半决赛','总决赛'],
    
    navbar: ['四人排', '院际赛', '校队'],
    currentTab: 0,
    hot:['小组赛','信院男排1队','经院男排1队','10月5日  7:30']
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  totianbao: function(){
    wx.navigateTo({
      url:"/pages/tainbao/index"
    })
  },
  toxinxi: function(){
    wx.navigateTo({
      url:"/pages/xinxi/index"
    })
  },
  rmss:function(){
    wx.navigateTo({
      url:"/pages/hotgame/hotgame"
    })
  },
  wjhg:function(){
    wx.navigateTo({
      url:"/pages/wjReviews/wjReviews"
    })
  },
  bssj:function(){
    wx.navigateTo({
      url:"/pages/matchdata/matchdata"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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