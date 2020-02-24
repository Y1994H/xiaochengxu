// pages/detail/detail.js
const app = getApp();
const arr = app.arr;
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    video: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    image: [
      "/images/mate30pro01.jpeg",
      "/images/mate30pro02.jpeg",
      "/images/mate30pro03.jpg"
    ],
    detail:[
      "/images/detail01.png",
      "/images/detail02.png",
      "/images/detail03.png"
    ],
  },
  // 添加购物车的
  addCar(e){
 
    //将数据存储到本地的同步方法
    arr.push(e.currentTarget.dataset.id);
    wx.setStorageSync("arr", arr);
  //  wx.setStorageSync("id", this.data.productId);
   wx.showModal({
     title: '购物车提示',
     content: '产品添加到购物车成功',
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      productId:options.id,
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