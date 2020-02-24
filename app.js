App({
  arr:[],
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log(11)
    //异步调用
    // wx.getUserInfo({
    //   //数据拿到之后，在执行的
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 小程序界面显示出来执行的函数
   */
  onShow: function (options) {
    console.log(options)
    switch (options.scene) {
      case 1001:
        break;
      case 1005:
        break;
    }
    wx.getUserInfo({
      //数据拿到之后，在执行的
      success: function (res) {
        console.log(res)
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log(13)
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log(14)
  }
})
