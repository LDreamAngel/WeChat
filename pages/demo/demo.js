// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus:[{
      title:'首页',
      isActive:true,
      value:''
    },{
      title:'原创',
      isActive:false,
      value:''
    },{
      title:'分类',
      isActive:false,
      value:''
    },{
      title:'关于',
      isActive:false,
      value:''
    }]
  },

  // 自定义事件 用来接收子组件传递的数据
  handelItemChange(e){
    console.log(e)
    const {index} = e.detail;
    // let menus = JSON.parse(JSON.stringify(this.data.menus));
    // 不要直接修改 this.data.数据
    let {menus} = this.data;
    // [].foreach 遍历数组 遍历数组的时候 修改了v,也会导致原数组被修改；
    menus.forEach((v,i) => i===index?v.isActive=true:v.isActive=false);
    this.setData({
      menus:menus
    })
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

  }
})