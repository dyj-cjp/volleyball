// pages/xinxi/index.js
const $api = require('../../network/request.js').API;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tname:"信院",
    CollegeTeamList:null,
    teamList:null,
    currentIndex:1,
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    if(options.tname){
      if(options.tname=="信院"){
        this.setData({
          currentIndex:1
        })
      }
      if(options.tname=="法学"){
        this.setData({
          currentIndex:2
        })
      }
      if(options.tname=="人文"){
        this.setData({
          currentIndex:3
        })
      }
      if(options.tname=="经济"){
        this.setData({
          currentIndex:4
        })
      }
      if(options.tname=="地旅"){
        this.setData({
          currentIndex:5
        })
      }
      if(options.tname=="数院"){
        this.setData({
          currentIndex:6
        })
      }
      if(options.tname=="工商"){
        this.setData({
          currentIndex:7
        })
      }
      if(options.tname=="财税"){
        this.setData({
          currentIndex:8
        })
      }
      if(options.tname=="公管"){
        this.setData({
          currentIndex:9
        })
      }
      this.setData({
        tname:options.tname
      })
    }
    this.getCollegeTeamList();
    this.getTeamList();

  },
  activeNav(){
    this.setData({
      tname:"信院",
      currentIndex:1
      
    })
    this.getCollegeTeamList();
    this.getTeamList();
  },
  activeFaxue(){
    this.setData({
      tname:"法学",
      currentIndex:2
    })
    this.getCollegeTeamList();
    this.getTeamList();
  },
  activeRenwen(){
    this.setData({
      tname:"人文",
      currentIndex:3
    })
    this.getCollegeTeamList();
    this.getTeamList();
  },
  activeJingji(){
    this.setData({
      tname:"经济",
      currentIndex:4
    })
    this.getCollegeTeamList();
    this.getTeamList();
  },
  activeDilv(){
    this.setData({
      tname:"地旅",
      currentIndex:5
    })
    this.getCollegeTeamList();
    this.getTeamList();
  },
  activeShuyuan(){
    this.setData({
      tname:"数院",
      currentIndex:6
    })
    this.getCollegeTeamList();
    this.getTeamList();
  },
  activeGongshang(){
    this.setData({
      tname:"工商",
      currentIndex:7
    })
    this.getCollegeTeamList();
    this.getTeamList();
  },
  activeCaisui(){
    this.setData({
      tname:"财税",
      currentIndex:8
    })
    this.getCollegeTeamList();
    this.getTeamList();
  },
  activeGongguaun(){
    this.setData({
      tname:"公管",
      currentIndex:9
    })
    this.getCollegeTeamList();
    this.getTeamList();
  },
  getCollegeTeamList(){
    var that = this;
    var tname=that.data.tname;
    $api.getCollegeTeam({  //get请求
      collegeName:tname
    }).then(res=>{
      console.log("res=>",res);	
      that.setData({
        CollegeTeamList:res.data
      })										
    }).catch(err=>{
      console.log("err=>",err);
    })
  },
  getTeamList(){
    var that = this;
    var tname=that.data.tname;
    $api.getTeam({  //get请求
      name:tname,
      page:0,
      size:10,
    }).then(res=>{
      console.log("res=>",res);	
      that.setData({
        teamList:res.data.content
      })										
    }).catch(err=>{
      console.log("err=>",err);
    })
  },
  getdetail(e) {
    console.log(e)
    var teamName = e.currentTarget.dataset.index
    console.log(teamName)

    wx.navigateTo({
      url: '../../pages/detail/index?teamName='+teamName,
    })
    wx.setNavigationBarTitle({
      title: teamName
   })
  },
  tianbao:function(){
    wx.navigateTo({
      url: '/pages/tainbao/index',
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