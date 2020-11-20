// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   * 里面存放的是，要从父组件中接收的数据
   */
  properties: {
    // 要接收的数据的名称
    menus:{
      // type 要接收的数据的类型
      type:Array,
      // value 默认值
      value:[]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    // menus:[{
    //   title:'首页',
    //   isActive:true,
    //   value:''
    // },{
    //   title:'原创',
    //   isActive:false,
    //   value:''
    // },{
    //   title:'分类',
    //   isActive:false,
    //   value:''
    // },{
    //   title:'关于',
    //   isActive:false,
    //   value:''
    // }]
  },

  /**
   * 组件的方法列表
   * 页面.js文件中，存放事件回调函数的时候 存放在data同层级下！！！
   * 组件.js文件种，存放事件回调函数的时候 必须存放在methods种！！！
   */
  methods: {
    handleItemTap(e){
      /**
       * 1. 绑定点击事件 需要在methods中绑定
       * 2. 获取被点击的索引
       * 3. 获取原数组
       * 4. 对数组循环
       *   - 给未选中的循环项的选中属性改为false
       *   - 给当前的索引的项添加激活选中的效果就可以了！！！
       * 5. 点击事件触发的时候
       *   - 触发父组件中的自定义事件，同时传递数据给父组件
       *   - this.triggerEvent("父组件自定义事件的名称",要传递的参数)
       */
       const {index} = e.currentTarget.dataset;
      /**
       * 组件调用自身数据的方法
      // 解构 对复杂类型进行解构的时候，相当于复制了一份 变量的引用而已
      // 最严谨的做法是重新拷贝一份数组，再对这个数组的备份进行处理
      // let menus = JSON.parse(JSON.stringify(this.data.menus));
      // 不要直接修改 this.data.数据
      let {menus} = this.data;
      // [].foreach 遍历数组 遍历数组的时候 修改了v,也会导致原数组被修改；
      menus.forEach((v,i) => i===index?v.isActive=true:v.isActive=false);
      this.setData({
        menus:menus
      })*/

      // 向父组件传值
      this.triggerEvent("itemChange",{index});
    }
  }
})
