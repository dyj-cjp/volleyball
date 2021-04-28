// pages/tainbao/index.js
const $api = require('../../network/request.js').API;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: [],//用户信息
    memberArr: [],
    teamsrc: null,
    teamName: null,
    teamInfo: null,
    teamCollege: null,
    teamImg: null
  },
  // addnumber(){
  //   userInfo1: [{"name1":"姓名","number1":"学号"},{"name1":"姓名","number1":"学号"}]
  // },

  bindKeyInput: function (e) {
    // var that = this;
    // wx.setStorageSync('teamName', e.detail.value);
    // let teamName = wx.getStorageSync('teamName');
    console.log(e)
    
    $api.addTeam({  //post请求
      teamName:"未知",
    }).then(res=>{
      console.log(res);
      this.setData({
        teamName: e.detail.value
      })
    }).catch(err=>{
      console.log(err);
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //读取用户信息
    let arr1 = wx.getStorageSync('peoplearr1');
    console.log(arr1)
    that.setData({
      userInfo: arr1
    })
    let arr = wx.getStorageSync('peoplearr');
    that.setData({
      memberArr: arr
    })
  },
  addTeam() {
    $api.addTeam({  //post请求
      teamName: "",
      teamInfo: "",
      teamCollege: "",
      teamImg: ""
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  addnumber() {
    wx.navigateTo({
      url: '../../pages/tianjiaduiyuan/index',
    })
  },
  tianjiaxinxi() {
    wx.navigateTo({
      url: '../../pages/tianjia/index',
    })
  },
  createTeam() {
    var teamName = this.detail.teamName;
    console.log(teamName);
    wx.setStorageSync('peoplearr', [])
  },
  addimg() {
    var that = this;
    wx.chooseImage({//选择图片
      success: function (res) {
        console.log(res);
        wx.uploadFile({//上传图片
          filePath: res.tempFilePaths[0],
          name: 'file',
          url: 'http://172.81.245.195:8080/ball/file/upload',//上传图片地址
          success: function (res) {
            console.log(res);
            that.setData({
              teamsrc: res.data
            })
            $api.addTeam({//调一下相关更改图片接口，将线上数据库图片字段修改，注意接口可变
              id: 11,
              faceimg: res.data
            }).then(res => {
              console.log(res);
            }).catch(err => {
              console.log(err);
            })
          }
        })
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
    let arr1 = wx.getStorageSync('peoplearr1');
    console.log(arr1)
    this.setData({
      userInfo: arr1
    })
    let arr = wx.getStorageSync('peoplearr');
    console.log(arr);
    this.setData({
      memberArr: arr
    })
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