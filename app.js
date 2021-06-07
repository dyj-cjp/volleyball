// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    wx.setStorageSync('peoplearr', []);
    wx.setStorageSync('peoplearr1', []);
    wx.setStorageSync('teamName', []);
            //获取状态栏高度
            wx.getSystemInfo({
              success:(result)=>{
                this.globalData.statusBarHeight=result.statusBarHeight;
              }
            })
  },
  globalData: {
    userInfo: null,
    statusBarHeight:0  //全局保存顶部状态栏高度
  }
})
