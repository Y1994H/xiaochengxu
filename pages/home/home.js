// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[],
    productList:[],
    selected: 0,
    list: ['上衣', '裤子', '套装', '女鞋'],
    image:[
      "/images/temp/banner1.jpg",
      "/images/temp/banner2.jpg",
      "/images/temp/banner3.jpg",
      "/images/temp/banner4.jpg"
    ]
  },
  getNavList:function () {
    let that = this;
    wx.request({
      url: 'http://www.hengyishun.cn/login/navlist',
      success(res){
        that.setData({
          navList:res.data
        })
      }
    })
  },
  getProductList:function(){
    let that = this;
    wx.request({
      url: 'http://www.hengyishun.cn/login/getProductList',
      success(res) {
        that.setData({
          productList: res.data
        })
      }
    })
  },
  btn(event) {
    console.log(event)
  },
  selected: function (e) {
    console.log(e)
    let that = this
    let index = e.currentTarget.dataset.index
    console.log(index)
    if (index == 0) {
      that.setData({
        selected: 0
      })
    } else if (index == 1) {
      that.setData({
        selected: 1
      })
    } else if (index == 2) {
      that.setData({
        selected: 2
      })
    } else {
      that.setData({
        selected: 3
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getProductList();
    wx.request({
      url: '',
      success: function (res) {
        console.log(res)
      }
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
  //向下滑动
  onPageScroll: function () {

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