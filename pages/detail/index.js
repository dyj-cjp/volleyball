// pages/detail/index.js
const $api = require('../../network/request.js').API;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numberDetail:[],
    teamName:null,
    name:null,
    TeamInfoList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    let index = options.teamName;
    this.setData({
      teamName:index
    })
    // console.log(this.data.teamName)

    this.getTeamSpcByTnList();
    this.getTeamInfoList();
    
  },
  getTeamSpcByTnList(){
    var that = this;
    console.log(that)
    var teamName = that.data.teamName
    $api.getTeamSpcByTn({  //get请求
      teamName:teamName,
      page:0,
      size:5,
    }).then(res=>{
      console.log("res=>",res);	
      that.setData({
        numberDetail:res.data.content
      })										
    }).catch(err=>{
      console.log("err=>",err);
    })
  },
  getTeamInfoList(){
    var that = this;
    console.log(that)
    var teamName = that.data.teamName
    $api.getTeamInfo({  //get请求
      name:teamName,
    }).then(res=>{
      console.log("res=>",res);	
      that.setData({
        TeamInfoList:res.data
      })										
    }).catch(err=>{
      console.log("err=>",err);
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