// pages/draw/draw.js
const $api = require('../../network/request.js').API;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalnum:0,
    selectnum:0,
    main:'文字主题'

  },
  inputvalue:function(e){
    this.setData({
      main:e.detail.value
    })
  },
  buttonListener:function(){
    var that=this;
    let openid = wx.getStorageSync('openid');
    if(openid){
      $api.addDraw({
        title:that.data.main,
        totalnum:that.data.totalnum.toString(),
        selectnum:that.data.selectnum.toString(),
        createopenid:openid
      }).then(res=>{
        console.log("res=>",res);
        wx.showToast({
          title: '创建成功',
        })
        wx.navigateTo({
          url:'../drawing/drawing?main='+that.data.main
        })
      }).catch(err=>{
        console.log("err=>",err);
      })
    }
    else{
      wx.showModal({
        content: '未登录，请先登录',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  bindPlusTotal:function(){
    var a=++this.data.totalnum;
    this.setData({
      totalnum:a
    })
  },
  bindMinusTotal:function(){
    if(this.data.totalnum==0){
      this.setData({
        totalnum:0
      })
    }else{
      var a=--this.data.totalnum;
      this.setData({
        totalnum:a
      })
    }
  },
  bindPlus:function(){
    var a=++this.data.selectnum;
    this.setData({
      selectnum:a
    })
  },
  bindMinus:function(){
    if(this.data.selectnum==0){
      this.setData({
        selectnum:0
      })
    }else{
      var a=--this.data.selectnum;
      this.setData({
        selectnum:a
      })
    }
  },
  

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let openid = wx.getStorageSync('openid');
    if(!openid){
      wx.showModal({
        content: '未登录，请先登录',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.switchTab({
              url: '/pages/mine/index',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      注意
    }
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