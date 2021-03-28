// pages/ssCompetition/2018Reviews/2018Reviews.js
var util=require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['荣耀榜', '照片墙', '精彩集锦'],
    currentTab: 0,
    imgList: [{"img":"../images/2018_1.png","date":"2020/04/05 17:35:23","count":518},
              {"img":"../images/2018_2.png","date":"2020/04/05 17:35:23","count":518},
              {"img":"../images/2018_3.png","date":"2020/04/05 17:35:23","count":518},
              {"img":"../images/2018_4.png","date":"2020/04/05 17:35:23","count":518},
              {"img":"../images/2018_5.png","date":"2020/04/05 17:35:23","count":518},
              {"img":"../images/2018_6.png","date":"2020/04/05 17:35:23","count":518}
            ],
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  chooseSource: function() {
    var _this = this;
    wx.showActionSheet({
      itemList: ["拍照", "从相册中选择"],
      itemColor: "#F55438",
      success: function(res) {
        if(!res.cancel) {
          if(res.tapIndex == 0) {
            _this.imgWShow("camera")        //拍照
          } else if (res.tapIndex == 1) {
            _this.imgWShow("album")      //相册
          }
        }
      }
    })
  },
  // 点击调用手机相册/拍照
  imgWShow: function(type) {
    var _this = this;
    let len = 0;
    if(_this.data.imgList != null) {
      len = _this.data.imgList.length
    }   //获取当前已有的图片
    wx.chooseImage({
      count: 6-len,     //最多还能上传的图片数,这里最多可以上传5张
      sizeType: ['original', 'compressed'],        //可以指定是原图还是压缩图,默认二者都有
      sourceType: [type],             //可以指定来源是相册还是相机, 默认二者都有
      success: function(res) {
        wx.showToast({
          title: '正在上传...',
          icon: "loading",
          mask: true,
          duration: 1000
        })
        // 返回选定照片的本地文件路径列表,tempFilePaths可以作为img标签的scr属性显示图片
        var imgList = [{"img":res.tempFilePaths,"date":util.formatTime(new Date()),"count":0}]
        let tempFilePathsImg = _this.data.imgList
        // 获取当前已上传的图片的数组
        var tempFilePathsImgs = tempFilePathsImg.concat(imgList)
        _this.setData({
          imgList:tempFilePathsImgs
        })
      },
      fail: function () {
        wx.showToast({
          title: '图片上传失败',
          icon: 'none'
        })
        return;
      }
    })
  },
  // 预览图片
  previewImg: function(e) {
    let index = e.target.dataset.index;
    let _this = this;
    wx.previewImage({
      current: _this.data.imgList[index],
      urls: _this.data.imgList
    })
  },
  // 点击删除
  deleteImg: function(e) {
    var _this = this;
    var imgList = _this.data.imgList;
    var index = e.currentTarget.dataset.index;      //获取当前点击图片下标
    wx.showModal({
      title: '提示',
      content: '确认要删除该图片吗?',
      success: function(res) {
        if(res.confirm) {
          console.log("点击确定了")
          imgList.splice(index, 1);
        } else if (res.cancel) {
          console.log("点击取消了");
          return false
        }
        _this.setData({
          imgList
        })
      }
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