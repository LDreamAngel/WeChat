// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      // 1.标签字符串[最常用的]
      html:'<div class="sc-bxivhb ALWfo"><div class="sc-ifAKCX iLINIY"><a class="sc-EHOje jXFKFG" href="https://www.tmall.com/wow/z/heybox/heyboxrax/heybox?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.1&amp;scm=1007.home_icon.tmallxp.d&amp;wh_biz=tm&amp;disableNav=YES"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">天猫新品</p></a><a class="sc-EHOje hrPgER" href="https://huodong.m.taobao.com/act/snipcode.html?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.6&amp;scm=1007.home_icon.chongzzx.d&amp;_wml_code=Vfw8V4IdfflvFcsPv2fKDCLgFlhCoOQ406ZO9WKS70zNVh2FhuClrYZQHV%2BUj8rweMrPJgOrvqON3zeUHJMIALqc03AQZnf3hmtKmJM2g5PuR9UuzwivVDM%2Bil4nBDGBPXlfSqZZA3CdATGQpVOeZMO8SbyJvaZdoC89%2B2Gg8FZsD4wqDUKs7VcgTjZxbgdE&amp;subSource=stcz_1"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">充值中心</p></a></div><div class="sc-ifAKCX iLINIY"><a class="sc-EHOje jXFKFG" href="https://huodong.m.taobao.com/act/snipcode.html?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.2&amp;scm=1007.home_icon.juhs.d&amp;_wml_code=9XZq%2Bt%2FxdGk2vxtkbZvNtxIRr1Fl5o%2F4JYkxzjiABZCkN0X4ug9ejN%2FEA0XumFdlCJmui3oZzrfxu2OjRTO%2FUldTSbERTDFnNVuaq4bGXYarnsLycd1U6o4btoe8H%2FSSeBk5iibFKlpytcA4vdUvH%2BU%2BttvWBrsoV0Txewchwr8%3D"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">今日爆款</p></a><a class="sc-EHOje hrPgER" href="https://h5.m.taobao.com/trip/home/index.html?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.7&amp;scm=1007.home_icon.lvx.d&amp;_wx_tpl=http%3A%2F%2Fh5.m.taobao.com%2Fapp%2Ftriprxhome%2Fpages%2Fhome%2Findex.weex.js&amp;wx_navbar_hidden=true&amp;ttid=12mtb0000155"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB1O_AyVwHqK1RjSZFPXXcwapXa-183-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">机票酒店</p></a></div><div class="sc-ifAKCX iLINIY"><a class="sc-EHOje jXFKFG" href="https://pages.tmall.com/wow/z/import/tmg-rax-home/tmallimportHomewupr-index?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.3&amp;scm=1007.home_icon.tmallgj.d&amp;wh_biz=tm&amp;wh_pid=tmg-rax-home%2FtmallimportHome&amp;disableNav=YES"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">天猫国际</p></a><a class="sc-EHOje hrPgER" href="https://market.m.taobao.com/app/tmall-wireless/tjb-2018/index/index.html?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.8&amp;scm=1007.home_icon.lingjb.d&amp;disableNav=YES#/tjb"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB19yZJVBLoK1RjSZFuXXXn0XXa-183-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">金币庄园</p></a></div><div class="sc-ifAKCX iLINIY"><a class="sc-EHOje jXFKFG" href="https://h5.ele.me/msite/taobaomsiterouter?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.4&amp;scm=1007.home_icon.elm.d"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB1DaMyVpzqK1RjSZFoXXbfcXXa-185-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">饿了么</p></a><a class="sc-EHOje hrPgER" href="https://market.m.taobao.com/app/pm/rax-tesla/pages/index-tao?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.9&amp;scm=1007.home_icon.paim.d&amp;wh_weex=true&amp;wx_navbar_transparent=true&amp;data_prefetch=true&amp;wx_navbar_hidden=true"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB16ZYDk4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">阿里拍卖</p></a></div><div class="sc-ifAKCX iLINIY"><a class="sc-EHOje jXFKFG" href="https://chaoshi.m.tmall.com/?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.5&amp;scm=1007.home_icon.tmallcs.d2&amp;_ig=shoutao"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB1FucwVwHqK1RjSZFgXXa7JXXa-183-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">天猫超市</p></a><a class="sc-EHOje hrPgER" href="https://huodong.m.taobao.com/act/snipcode.html?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.10&amp;scm=1007.home_icon.taobch.d&amp;_wml_code=6WHamsDC%2B8ca9ElMubUiQjsRC0O2j4yGgKPCJIKXglo%3D"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB19dcwVyrpK1RjSZFhXXXSdXXa-183-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">淘宝吃货</p></a></div><div class="sc-ifAKCX iLINIY"><a class="sc-EHOje jXFKFG" href="https://market.m.taobao.com/app/tbsearchwireless-pages/new-catemap/p/s-nx-categories?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.11&amp;scm=1007.home_icon.fenl.d&amp;wh_weex=true"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB1nBktVxTpK1RjSZR0XXbEwXXa-183-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">分类</p></a><a class="sc-EHOje hrPgER" href="https://huodong.m.taobao.com/act/snipcode.html?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.12&amp;scm=1007.home_icon.xiany.d&amp;_wml_code=2RLfNbB12QpISV%2BL7aiHZwm5noZrOPbYmjwLhlOAmgeK3XKiEERT7ZdlL5lwWrfH8vrxje8x3wcjpFnTBn2bZuI6VIVmz1Ww1SxKMPNxdKnSxkM02klo1Wq1PvanB8MPDB7%2Fxfoi8vf2ert4z%2BOYjJBMsIILVspKvgSN8SN%2BsCg%3D"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB1CoEwVrvpK1RjSZFqXXcXUVXa-185-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">闲鱼</p></a></div><div class="sc-ifAKCX iLINIY"><a class="sc-EHOje jXFKFG" href="https://huodong.m.taobao.com/act/snipcode.html?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.13&amp;scm=1007.home_icon.tmallsx.d&amp;_wml_code=uxMdTqOeZt4IfBD8ssl15zR25nV9irif72OvYZHv66PlUxWwFw7AI3Y4j1t%2FGJXQYDZlDvAssH0HSvvBn2twyr3u7MVHWWGQZIVPwerViJM0j60YHvZMcG3JG1ZCBQswmg48wSD9%2BC%2FgFzZX0JcgQenoXJca%2B2FpGgRDcldUh%2F4mrO0cKrXo5rF%2Fsyo7cH7G"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB1fcOKXkCy2eVjSZSyXXXukVXa-183-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">天猫美食</p></a><a class="sc-EHOje hrPgER" href="https://pages.tmall.com/wow/a/act/tmall/dailygroup/18/wupr?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.14&amp;scm=1007.home_icon.88vip.d&amp;wh_pid=daily-186355&amp;disableNav=YES"><img class="sc-bZQynM iEnsRn" src="https://img.alicdn.com/tfs/TB1FyEazAY2gK0jSZFgXXc5OFXa-183-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">会员中心</p></a></div><div class="sc-ifAKCX iLINIY"><a class="sc-EHOje jXFKFG" href="https://pages.tmall.com/wow/yao/20485/aljkmh?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.15&amp;scm=1007.home_icon.alijk.d&amp;wh_biz=tm"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB1tikBVAPoK1RjSZKbXXX1IXXa-183-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">阿里健康</p></a><a class="sc-EHOje hrPgER" href="https://m.duanqu.com?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.16&amp;scm=1007.home_icon.zdxh.d&amp;_ariver_appid=6158543"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB1xcTYxFT7gK0jSZFpXXaTkpXa-183-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">造点新货</p></a></div><div class="sc-ifAKCX iLINIY"><a class="sc-EHOje jXFKFG" href="https://huodong.m.taobao.com/act/snipcode.html?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.17&amp;scm=1007.home_icon.koubsh.d&amp;_wml_code=qeLJPHY5ySO3lef1quOfGhXh%2B8UW1yf1hl95h8wZUjlFlGFkyop3K4Hb%2B95myeqeJT4BYa03LO60S6xd8wO18LZ3%2FVvg2pTGoYLZvdSZu8bbze9cO%2FiQDU%2F6LiQkOXRW6f4DA%2FMN2L81ERi%2Bbsad%2Fk%2BxIGTGkv98p4M7sIG2SpI%3D"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB1h1MnVCrqK1RjSZK9XXXyypXa-183-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">口碑生活</p></a><a class="sc-EHOje hrPgER" href="https://m.duanqu.com?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.18&amp;scm=1007.home_icon.tuhuo.d&amp;_ariver_appid=17570832"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB11tFkr7L0gK0jSZFxXXXWHVXa-183-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">土货鲜食</p></a></div></div>',
      // 2.对象数组
      htmlObj:[{
        // div标签 name属性来指定
        name:'div',
        // 标签上有哪些属性
        attrs:{
          class:'my_div',
          style:'color:red;'
        },
        // 子节点 children 要接收的数据类型和nodes第二种渲染方式的数据类型一致
        children:[{
          name:'p',
          attr:{},
          // 放文本
          children:[{
            type:'text',
            text:'(ง •_•)ง，李优秀！'
          }]
        }]
      }],
      num:0,
      gender:'',
      fruits:[{
          name:'🍎',
          value:'apple'
        },{
          name:'🍇',
          value:'grape'
        },{
          name:'🍌',
          value:'bananer'
        }],
      checkedList:[]
    },
  // 输入input事件的执行逻辑
  handleInput(e){
    console.log("😀")
    this.setData({
      num:e.detail.value
    })
  },
  // 加减按钮的事件
  handletap(e){
    // 获取自定义属性 operation
    // console.log(e)
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num:this.data.num + operation
    })
  },
  // 单选框
  handleChange(e){
    // console.log(e)
    let gender = e.detail.value;
    this.setData({
      gender: gender
    })
  },
  // 多选框
  handleItemChange(e){
    console.log(e)
    let checkedList = e.detail.value;
    this.setData({
      checkedList: checkedList
    })
  },
  // 获取用户的手机号码信息
  getPhoneNumber(e){
    console.log("用户的手机号码信息")
    console.log(e)
  },
  // 获取用户的个人信息
  getUserInfo(e){
    console.log("用户的个人信息")
    console.log(e)
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