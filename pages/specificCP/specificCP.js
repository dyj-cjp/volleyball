// pages/specificCP/specificCP.js
const $api = require('../../network/request.js').API;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['数据', '精彩锦集'],
    currentTab: 0,
    listData2:[
      {"team":"信院男排一队","one":"25","two":"22","three":"15","all":"2"},
      {"team":"经院男排一队","one":"20","two":"25","three":"12","all":"1"}
      ],
      listData:[],
      address:"https://y.qq.com/n/yqq/mv/v/d002559kt56.html",
      video:"http://172.81.245.195:8888/group1/M00/00/01/rFH1w2BvMeiAQEH4AC98p2Ii_q8114.mp4"
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  /**播放视屏 */
  play(e) {
    //执行全屏方法  
    var videoContext = wx.createVideoContext('myvideo', this);
    videoContext.requestFullScreen();
    this.setData({
        fullScreen:true
    })
 },
 /**关闭视屏 */
 closeVideo() {
   //执行退出全屏方法
   var videoContext = wx.createVideoContext('myvideo', this);
   videoContext.exitFullScreen();     
 },
 /**视屏进入、退出全屏 */
 fullScreen(e){
   var isFull = e.detail.fullScreen;
   //视屏全屏时显示加载video，非全屏时，不显示加载video
   this.setData({
     fullScreen:isFull
   })
 },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      aname:options.t1,
      bname:options.t2
    });
    var pagee =this;
    $api.getMatchDataById({  //get请求
      id:options.idd
    }).then(res=>{
      pagee.setData({
        listData:res.data
      });
      console.log("res=>",res.data);
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