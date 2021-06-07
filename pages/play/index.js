// pages/play/index.js
const $api = require('../../network/request.js').API;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[
    ],

  },
  getalldraw:function(){
    var that=this;
    let openid = wx.getStorageSync('openid');
    $api. getAllDraw({  
      a:openid,
      page:0,
      size:50
    }).then(res=>{
      console.log(res);
      that.setData({
        dataList:res.data.content
      })
    }).catch(err=>{
      console.log(err);
    })
  },
  itemclick:function(e){
    let title=e.currentTarget.dataset.title;
    let createopenid=wx.getStorageSync('openid');
    wx.navigateTo({
      url:'../drawresult/drawresult?main='+[title,createopenid]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getalldraw();
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