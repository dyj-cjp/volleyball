// pages/tianjia/index.js
const $api = require('../../network/request.js').API;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:null,
     number:null,
     teamname:null,
     nickname:null,
     studynumber:null,
     number:null,
     position:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    console.log(options.teamName);
    that.setData({
      teamname:options.teamName
    })
  },
  back:function(){
    wx.navigateBack({
      delta: 1,
    })
  },
  nameInput:function(e){
    let name=e.detail.value;
    console.log(name);
    this.setData({
      nickname:name
    })
  },
  studyInput:function(e){
    let study=e.detail.value;
    this.setData({
      studynumber:study
    })
  },
  numberInput:function(e){
    let number=e.detail.value;
    this.setData({
      number:number
    })
  },
  positionInput:function(e){
    let position=e.detail.value;
    this.setData({
      position:position
    })
  },

  yess(){
    var obj1={name:this.data.nickname,number:this.data.studynumber}
    var arr1=wx.getStorageSync('peoplearr1');
    arr1.push(obj1);
    wx.setStorageSync('peoplearr1', arr1)

    var that=this;

    console.log(that.data);
    $api.addTeamMember({  //post请求
      teamName:that.data.teamname,
      type:"true",
      nickName:that.data.nickname,
      studyNumber:that.data.studynumber,
      number:that.data.number,
      position:that.data.position
    }).then(res=>{
      console.log(res);
          //跳转到队伍填报页面
          wx.navigateBack({
            url:'/pages/tainbao/index'
          })
    }).catch(err=>{
      console.log(err);
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