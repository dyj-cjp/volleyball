// pages/ssCompetition/2018Reviews/2018Reviews.js
const $api = require('../../network/request.js').API;
var util=require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['照片墙','荣耀榜'],
    currentTab: 0,
    date:"2018届",
    item:null,
    item1:{
      manlist:[
        {
          name:"冠军 经济",
          img:'http://172.81.245.195:8888/group1/M00/00/02/rFH1w2C9WkiAen2EAAkFSq8pyn0447.jpg'
        },
        {
          name:"亚军 地旅",
          img:'http://172.81.245.195:8888/group1/M00/00/02/rFH1w2C9WmCAPTRBAAil_X0yDdI221.jpg'
        },
        {
          name:"季军 地旅",
          img:'http://172.81.245.195:8888/group1/M00/00/02/rFH1w2C9WnCAA0EsAAiNaZs9BD4670.jpg'
        }
      ],
      womanlist:[
        {
          name:"冠军 人文",
          img:'http://172.81.245.195:8888/group1/M00/00/02/rFH1w2C9WoOACAM9AAnWJlZTaeg866.jpg'
        },
        {
          name:"亚军 法学",
          img:'http://172.81.245.195:8888/group1/M00/00/02/rFH1w2C9WpSAQ7tqAAk19SHo5Ic856.jpg'
        },
        {
          name:"季军 财税",
          img:'http://172.81.245.195:8888/group1/M00/00/02/rFH1w2C9WqWABOgWAAjqvuq4vFk851.jpg'
        }
      ]
    },
    item2:{
      manlist:[
        {
          name:"冠军 地旅",
          img:'http://172.81.245.195:8888/group1/M00/00/02/rFH1w2C9WTmAXOW3AAcqIRMIPOI998.jpg'
        },
        {
          name:"亚军 信院",
          img:'http://172.81.245.195:8888/group1/M00/00/02/rFH1w2C9WVSAdQ21AAcxO0gPlN4301.jpg'
        },
        {
          name:"季军 地旅",
          img:'http://172.81.245.195:8888/group1/M00/00/02/rFH1w2C9WWSAJHvcAAb-LhIanW0087.jpg'
        }
      ],
        womanlist:[
        {
          name:"冠军 金融",
          img:'http://172.81.245.195:8888/group1/M00/00/02/rFH1w2C9WXiAOHaeAAK2IWLSg2A048.jpg'
        },
        {
          name:"亚军 人文",
          img:'http://172.81.245.195:8888/group1/M00/00/02/rFH1w2C9WYuAAyoCAALV5Az_M0U435.jpg'
        },
        {
          name:"季军 统数",
          img:'http://172.81.245.195:8888/group1/M00/00/02/rFH1w2C9WZ-ARx6cAALWkIXOZDg693.jpg'
        }
      ]
    },
    item3:{
      manlist:[
        {
          name:"冠军 经济",
          img:'http://172.81.245.195:8888/group1/M00/00/02/rFH1w2C9Vz6ARI9rAAOQASToPck814.jpg'
        },
        {
          name:"亚军 金融",
          img:'http://172.81.245.195:8888/group1/M00/00/02/rFH1w2C9V2uAJSwHAAOJApm3UD0204.jpg'
        }
      ],
      womanlist:[
        {
          name:"冠军 地旅",
          img:'http://172.81.245.195:8888/group1/M00/00/02/rFH1w2C9V4KAXTuQAAOiqELh8vg924.jpg'
        },
        {
          name:"亚军 数院",
          img:'http://172.81.245.195:8888/group1/M00/00/02/rFH1w2C9V5-AfZoCAAOfgORu_6E917.jpg'
        },
      ]
    },
    num:null,
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
          url:'https://www.cauliflowerlucky.com/ball/file/upload',//上传图片地址
          success:function(res){
            console.log(res);
            $api.addReview({
              session:that.data.date,
              img:res.data,
              imglike:"0",
            }).then(res=>{
              console.log(res);
              let session=that.data.num;
              wx.showToast({
                title: '添加成功',
              })
              wx.redirectTo({
                url: '/pages/2018Reviews/2018Reviews?id='+session,
              })
            }).catch(err=>{
              console.log(err);
            })

        //     var imgList=[{'id':35,'session':"2018届",'img':res.data,'imgtime':util.formatTime(new Date()),"imglike":0,"video":"无"}]
        //     let tempFilePathsImg = that.data.imgList
        // // 获取当前已上传的图片的数组
        // var tempFilePathsImgs = tempFilePathsImg.concat(imgList)
        // that.setData({
        //   imgList:tempFilePathsImgs
        // })
            // $api.upDateCollegeImg({//调一下相关更改图片接口，将线上数据库图片字段修改，注意接口可变
            //   id:35,
            //   faceimg:res.data
            // }).then(res=>{
            //   console.log(res);
            // }).catch(err=>{
            //   console.log(err);
            // })
          }
        })
      }
    })

  },
  addzan:function(e){
    var that = this;
    console.log(e.currentTarget.dataset.id);
    console.log(e.currentTarget.dataset.count);
      $api.upDateDianZan({  //get请求
        id:e.currentTarget.dataset.id,
        like:++e.currentTarget.dataset.count,
      }).then(res=>{
        console.log("res=>",res);
        that.onShow();
      }).catch(err=>{
        console.log(err);
      })
  
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      date:options.id+'届',
      num:options.id,
    });

    if(this.data.date=="2019届"){
      this.setData({
        item:this.data.item1
      })
    }else if(this.data.date=="2018届"){
      this.setData({
        item:this.data.item2
      })
    }else if(this.data.date=="2017届"){
      this.setData({
        item:this.data.item3
      })
    }
    console.log(this.data.date);
    var pagee =this;
    var currenTime=util.formatTime(new Date());
    this.setData({
      currenTime:currenTime
    });
    $api.getMessage({  //get请求
      session:pagee.data.date,
      page:0,
      size:25
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
    var pagee =this;
    $api.getMessage({  //get请求
      session:pagee.data.date,
      page:0,
      size:25
    }).then(res=>{
      console.log("res=>",res.data.content);
      pagee.setData({
        imgList:res.data.content
      });
    }).catch(err=>{
      console.log("err=>",err);
    });
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