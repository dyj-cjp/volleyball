// pages/ssCompetition/2018Reviews/2018Reviews.js
const $api = require('../../network/request.js').API;
var util=require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['荣耀榜', '照片墙', '精彩集锦'],
    currentTab: 0,
    date:"2018届",
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  
  addpic:function(){
    var that = this;
    wx.chooseImage({//选择图片
      success:function(res){
        console.log(res);
        wx.uploadFile({//上传图片
          filePath: res.tempFilePaths[0],
          name: 'file',
          url:'http://172.81.245.195:8080/ball/file/upload',//上传图片地址
          success:function(res){
            console.log(res);
            var imgList=[{'id':35,'session':"2018届",'img':res.data,'imgtime':util.formatTime(new Date()),"imglike":0,"video":"无"}]
            let tempFilePathsImg = that.data.imgList
        // 获取当前已上传的图片的数组
        var tempFilePathsImgs = tempFilePathsImg.concat(imgList)
        that.setData({
          imgList:tempFilePathsImgs
        })
            $api.upDateCollegeImg({//调一下相关更改图片接口，将线上数据库图片字段修改，注意接口可变
              id:35,
              faceimg:res.data
            }).then(res=>{
              console.log(res);
            }).catch(err=>{
              console.log(err);
            })
          }
        })
      }
    })

  },
  addzan:function(e){
    var that = this;
    console.log(e.currentTarget.dataset.id);
    console.log(e.currentTarget.dataset.count);
    console.log(e.currentTarget.dataset.if);
    var iflike=e.currentTarget.dataset.if;
    if(iflike==0){
      iflike=1;
      $api.upDateDianZan({  //get请求
        id:e.currentTarget.dataset.id,
        like:++e.currentTarget.dataset.count,
      }).then(res=>{
        console.log("res=>",res);
      }).catch(err=>{
        console.log("err=>",err);
      });
    }
    else{
      $api.upDateDianZan({  //get请求
        id:e.currentTarget.dataset.id,
        like:e.currentTarget.dataset.count-1,
      }).then(res=>{
        console.log("res=>",res);
    
      }).catch(err=>{
        console.log("err=>",err);
      });
    }
  
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      date:options.id+'届',
    });
    console.log(this.data.date);
    var pagee =this;
    var currenTime=util.formatTime(new Date());
    this.setData({
      currenTime:currenTime
    });
    $api.getMessage({  //get请求
      session:pagee.data.date,
      page:0,
      size:5
    }).then(res=>{
      console.log("res=>",res.data.content);
      pagee.setData({
        imgList:res.data.content
      });
    }).catch(err=>{
      console.log("err=>",err);
    });
      wx.setNavigationBarTitle({
      title:options.id+'届',
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