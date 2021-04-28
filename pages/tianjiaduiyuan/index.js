// pages/tianjia/index.js
const $api = require('../../network/request.js').API;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name1:null,
    number1:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  
  handleInput(event){
    let type = event.currentTarget.dataset.type;
    this.setData({
      [type]: event.detail.value
    })
  },

  yes(){
    var obj={name:this.data.name1,number:this.data.number1}
    var arr=wx.getStorageSync('peoplearr');
    arr.push(obj);
    wx.setStorageSync('peoplearr', arr)
    //跳转到队伍填报页面
      wx.navigateBack({
        url:'/pages/tainbao/index'
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