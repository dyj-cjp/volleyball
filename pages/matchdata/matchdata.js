// pages/matchdata/matchdata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['小组赛', '8强','4强','半决赛','总决赛'],
    currentTab: 0,
    listData:[
      {"code":"1","team":"信院男排1队","win":"3","lose":"0","percent":"100%/0.0","add":"9"},
      {"code":"2","team":"经院男排1队","win":"3","lose":"0","percent":"100%/0.0","add":"9"},
      {"code":"3","team":"法学男排1队","win":"3","lose":"0","percent":"100%/0.0","add":"9"},
      {"code":"4","team":"地旅男排1队","win":"3","lose":"0","percent":"100%/0.0","add":"9"}
      ],
    listData2:[
      {"code":"1","team":"信院男排1队","win":"3","lose":"0","percent":"100%/0.0","add":"9"},
      {"code":"2","team":"经院男排1队","win":"3","lose":"0","percent":"100%/0.0","add":"9"},
      {"code":"3","team":"法学男排1队","win":"3","lose":"0","percent":"100%/0.0","add":"9"},
      {"code":"4","team":"地旅男排1队","win":"3","lose":"0","percent":"100%/0.0","add":"9"}
        ],
    
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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