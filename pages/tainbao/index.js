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
    teamImg: null,
    array:['信院','人文','数院','法学','经济','地旅','工商','财税','公管'],
    type:0,
    choosevalue:'信院',
  },
  // addnumber(){
  //   userInfo1: [{"name1":"姓名","number1":"学号"},{"name1":"姓名","number1":"学号"}]
  // },
  teamnameinput:function(e){
    let name=e.detail.value;
    console.log(name);
    this.setData({
      teamName:name
    })
  },
  infoinput:function(e){
    let info=e.detail.value;
    console.log(info);
    this.setData({
      teamInfo:info
    })
  },
  bindPickerChange:function(e){
    var that=this;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      type: e.detail.value,
      choosevalue: that.data.array[e.detail.value],

    })

  },

  // bindKeyInput: function (e) {
  //   // var that = this;
  //   // wx.setStorageSync('teamName', e.detail.value);
  //   // let teamName = wx.getStorageSync('teamName');
  //   console.log(e)
    
  //   $api.addTeam({  //post请求
  //     teamName:"未知",
  //   }).then(res=>{
  //     console.log(res);
  //     this.setData({
  //       teamName: e.detail.value
  //     })
  //   }).catch(err=>{
  //     console.log(err);
  //   })
  // },
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
  // addTeam() {
  //   $api.addTeam({  //post请求
  //     teamName: "",
  //     teamInfo: "",
  //     teamCollege: "",
  //     teamImg: ""
  //   }).then(res => {
  //     console.log(res);
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // },
  tianbao:function(e){
    var that=this;
    console.log(that.data);
    $api.addTeam({  //post请求
      teamName:that.data.teamName,
      teamInfo:that.data.teamInfo,
      teamCollege:that.data.choosevalue,
      teamImg:that.data.teamsrc
    }).then(res=>{
      console.log(res);
      wx.setStorageSync('peoplearr', []);
      wx.setStorageSync('peoplearr1', []);
      wx.showToast({
        title: '创建成功',
      })
      wx.redirectTo({
        url: '/pages/xinxi/index?tname='+that.data.choosevalue,
      })
    }).catch(err=>{
      console.log(err);
    })
  },
  addnumber(e) {
    let teamName=e.currentTarget.dataset.param;
    wx.navigateTo({
      url: '../../pages/tianjiaduiyuan/index?teamName='+teamName,
    })
  },
  tianjiaxinxi(e) {
    console.log(e);
    let teamName=e.currentTarget.dataset.param;
    console.log(teamName);
    wx.navigateTo({
      url: '../../pages/tianjia/index?teamName='+teamName,
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
          url: 'https://www.cauliflowerlucky.com/ball/file/upload',//上传图片地址
          success: function (res) {
            console.log(res);
            that.setData({
              teamsrc: res.data
            })
            // $api.addTeam({//调一下相关更改图片接口，将线上数据库图片字段修改，注意接口可变
            //   id: 11,
            //   faceimg: res.data
            // }).then(res => {
            //   console.log(res);
            // }).catch(err => {
            //   console.log(err);
            // })
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