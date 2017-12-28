// pages/start/start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  2048:function(){
    wx.navigateTo({
      url: '../2048/2048/2048',
    })
  },

  24: function () {
    wx.navigateTo({
      url: '../24/index/index',
    })
  },

  feibiao: function () {
    wx.navigateTo({
      url: '../feibiao/index/index',
    })
  },

  
 saolei: function () {
    wx.navigateTo({
      url: '../saolei/index/index',
    })
  },

  shishe: function () {
    wx.navigateTo({
      url: '../shishe/index/index',
    })
 },

 snake: function () {
   wx.navigateTo({
     url: '../snake/snake/snake',
   })
  },

  fanpai: function () {
    wx.navigateTo({
      url: '../fanpai/index/index',
    })
  }


})