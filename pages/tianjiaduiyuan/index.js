// pages/tianjia/index.js
const $api = require('../../network/request.js').API;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name1:null,
    number1:null,
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

  yes(){
    var obj={name:this.data.nickname,number:this.data.studynumber}
    var arr=wx.getStorageSync('peoplearr');
    arr.push(obj);
    wx.setStorageSync('peoplearr', arr);
    var that=this;
    console.log(that.data);
    $api.addTeamMember({  //post请求
      teamName:that.data.teamname,
      type:"false",
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
  back:function(e){
    wx.navigateBack({
      delta: 1,
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