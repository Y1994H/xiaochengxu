// pages/profile/profile.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    price:0,
    product: [],
    productList: [],
  },
  getProductList: function () {
    let that = this;
    wx.request({
      url: 'http://www.hengyishun.cn/login/getProductList',
      success(res) {
        that.setData({
          productList: res.data,
        })
      }
    })

  },
  
  getProduct(){
    var product = [];
    var that = this;
    var productId = wx.getStorageSync("id");
    var p = this.data.productList;
    for(var i = 0; i < p.length; i++){
      if(p[i].id == productId){
        product.push(p[i])
        that.setData({
          product: product
        })
      }
    }
    console.log(this.data.product);
  },
  //合并付款
  shangeboxChange(e){
    var sumPirce = 0;
    var id = e.currentTarget.id;
    var num = e.detail.value;
    var p = this.data.productList;
    //判断当前选中的元素是否被选中
    if(num != ''){
      for( var i = 0; i < p.length; i++){
        if (p[i].id == id){
          sumPirce = this.data.price + p[i].price
        }
      }
    }else{
      for (var i = 0; i < p.length; i++) {
        if (p[i].id == id) {    
          sumPirce = this.data.price - p[i].price
        }
      }
    }
    console.log(sumPirce)
    this.setData({
      price: sumPirce
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProductList();
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
   
    // this.getProduct();
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