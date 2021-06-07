// pages/drawresult/drawresult.js
const $api = require('../../network/request.js').API;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tips:"恭喜抽中啦！",
    main:'',
    createopenid:null,
    totalnum:null,
    selectnum:null,
    selectednum:null,
    drawpeople:null,
    drawArr:null,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    let dataArr = options.main.split(',');
    console.log(dataArr[0]);
    console.log(dataArr[1]);

    this.setData({
      main:dataArr[0],
      createopenid:dataArr[1]
    });

    $api.getDrawResult({
      a:that.data.createopenid,
      b:that.data.main
    }).then(res=>{
      console.log("res=>",res);
      that.setData({
        totalnum: res.data.totalnum,
        selectnum: res.data.selectnum,
        selectednum: res.data.selectednum,
        drawpeople: res.data.drawpeople,

      })
    }).catch(err=>{
      console.log("err=>",err);
    })

    $api.getProcess({
      a:that.data.createopenid,
      b:that.data.main,
      page:0,
      size:20,
    }).then(res=>{
      console.log("res=>",res);
      that.setData({
        drawArr: res.data.content
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