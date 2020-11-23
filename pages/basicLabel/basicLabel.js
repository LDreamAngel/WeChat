// pages/basicLabel/basicLabel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'(ง •_•)ง，李优秀！！！',
    num:100,
    bol:true,
    myInfo:{
      name:'李优秀',
      age:18,
      sex:'girl'
    },
    isChecked:false,
    list:[
      {name:'李优秀'},
      {name:'路聪明'},
      {name:'赵成功'},
      {name:'肖可以'},
      {name:'桑骄傲'}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    // onLoad发送异步请求来初始化页面数据
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
   * 页面跳转会触发当前页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载 也可以通过点击超链接来演示
   * 带"关闭"俩字儿的时候都会卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
    // 页面的数据 或者效果 重新 刷新
  },

  /**
   * 页面上拉触底事件的处理函数
   * 需要让页面 出现上下滚动才行
   */
  onReachBottom: function () {
    console.log('onReachBottom')
    // 上拉加载下一页数据
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 页面滚动 就可以触发
   */
  onPageScroll: function () {
    
  },

  /**
   * 页面的尺寸发生改变的时候 触发
   * 小程序发生了，横屏竖屏切换的时候触发(在json文件里面配置)
   */
  onResize: function () {

  },

  /**
   * 1 必须要求当前页面 也是tabbar页面
   * 2 点击的自己的tab item的时候才触发
   */
  onTabItemTap: function () {

  }
})