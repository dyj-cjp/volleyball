// pages/matchdata/matchdata.js
const $api = require('../../network/request.js').API;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['小组赛', '8强','4强','总决赛'],
    currentTab: 0,
        listDataA:[],
        listDataB:[],
        listData8:[],
        listData4:[],
        listzong:[]
    
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
    
    var page =this;
    $api.getMatchGroup({  //get请求
      group:"男排A组排行版",
      game:"小组赛",
      page:0,
      size:5
    }).then(res=>{
      page.setData({
        listdataA:res.data.content
      });
      console.log("res=>",res.data.content);
    }).catch(err=>{
      console.log("err=>",err);
    });
    
    $api.getMatchGroup({  //get请求
      group:"男排B组排行版",
      game:"小组赛",
      page:0,
      size:5
    }).then(res=>{
      page.setData({
        listdataB:res.data.content
      });
      console.log("res=>",res.data.content);
    }).catch(err=>{
      console.log("err=>",err);
    });

    $api.getMatchGroup({  //get请求
      group:"男组8强",
      game:"8强",
      page:0,
      size:8
    }).then(res=>{
      page.setData({
        listdata8:res.data.content
      });
      console.log("res=>",res.data.content);
    }).catch(err=>{
      console.log("err=>",err);
    });

    $api.getMatchGroup({  //get请求
      group:"男组4强",
      game:"4强",
      page:0,
      size:4
    }).then(res=>{
      page.setData({
        listdata4:res.data.content
      });
      console.log("res=>",res.data.content);
    }).catch(err=>{
      console.log("err=>",err);
    });

    $api.getMatchGroup({  //get请求
      group:"男组决赛",
      game:"决赛",
      page:0,
      size:2
    }).then(res=>{
      page.setData({
        listzong:res.data.content
      });
      console.log("res=>",res.data.content);
    }).catch(err=>{
      console.log("err=>",err);
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