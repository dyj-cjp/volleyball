// pages/hotgame/hotgame.js
const $api = require('../../network/request.js').API;
var util=require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['全部', '信院','人文','经济','地旅','数院','工商','财税'],
    currentTab: 0,
      listData:[]
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  0:function(){
    wx.navigateTo({
      url:"/pages/specificCP/specificCP"
    })
  },
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var currenTime=util.formatTime(new Date());
    this.setData({
      currenTime:currenTime
    });
    var pagee =this;
    $api.getAllMatch({  //get请求
      page:0,
      size:20
    }).then(res=>{
      pagee.setData({
        listData:res.data.content
      });
      console.log("res=>",res.data.content);
    }).catch(err=>{
      console.log("err=>",err);
    });

    
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