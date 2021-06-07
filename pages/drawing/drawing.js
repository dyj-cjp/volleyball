// pages/drawing/drawing.js
const $api = require('../../network/request.js').API;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    createopenid:'',
    isauth:false,
    totalnum:null,
    drawpeople:null,

  },
  gettotalnum:function(){
    var that=this;
    $api.getDrawResult({
      a:that.data.createopenid,
      b:that.data.id,
    }).then(res=>{
      console.log("res=>",res);
      that.setData({
        totalnum:res.data.totalnum,
        drawpeople:res.data.drawpeople,
      })
    }).catch(err=>{
      console.log("err=>",err);
    })
  },
  buttonListener:function(){
    var that=this;
    console.log(that.data.drawpeople,that.data.totalnum);
    if(that.data.drawpeople>=that.data.totalnum){
      wx.showModal({
        content: '抽签人数已满，不能再抽',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }else{
      let openid = wx.getStorageSync('openid');
      let faceurl = wx.getStorageSync('userInfo').avatarUrl;
      console.log(that.data.createopenid,"aaaa");
      if(openid){
        $api.addProcess({
          openid:openid,
          createopenid:that.data.createopenid,
          title:that.data.id,
          faceurl:faceurl
        }).then(res=>{
          console.log("res=>",res);
          wx.showToast({
            title: '抽签成功',
          })
          wx.navigateTo({
            url:'../drawresult/drawresult?main='+[that.data.id,that.data.createopenid]
          })
        }).catch(err=>{
          console.log("err=>",err);
        })
      }
    }
  },

  getauth:function(){
    var that=this;
    console.log("111")
    wx.getUserProfile({
      desc:'正在获取',
      success:function(res){
        console.log(res.userInfo);
        wx.setStorageSync('userInfo', res.userInfo);
        that.setData({
          isauth: true,
        })
        // 登录
        that.getLogin();
      },
      fail:function(err){
        console.log(err);
      }
    })
  },
  getLogin: function(){
    var that=this;
    wx.login({
      success: res => {
        console.log(res.code);
        if(res.code){
          $api.addUser({  //post请求
            code: res.code
          }).then(res=>{
            console.log(res);
            wx.setStorageSync('openid', res.data);
            that.setData({
              isauth:true
            })
          }).catch(err=>{
            console.log(err);
          })
        }
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    console.log(options);
    let userInfo=wx.getStorageSync('userInfo');
    if(userInfo){
      console.log("aaaaaa");
      this.setData({
        isauth:true
      })
      console.log(that.data.isauth);
      if(options.lotid){
        this.setData({
          id:options.title,
          createopenid:options.lotid,
        })
        this.gettotalnum();
      }else{
        let createopenid = wx.getStorageSync('openid');
        this.setData({
          id:options.main,
          createopenid:createopenid,
        });
        this.gettotalnum();
      }
    }else{
      if(options.lotid){
        this.setData({
          id:options.title,
          createopenid:options.lotid,
        })
        this.gettotalnum();
      }
      wx.showModal({
        content: '您未登录，请先授权登录',
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
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.gettotalnum();
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
  onShareAppMessage: function (res) {
    var that = this;
    return {
      title: that.data.id,
      path: 'pages/drawing/drawing?lotid=' + that.data.createopenid + '&title=' + that.data.id,
    }
  }
})