// 通过 getApp 方法来引用全局对象
const App = getApp();

Page({
  // 定义好 userInfo 存储用户信息
  data: {
    userInfo: {},
  },
  // 在页面加载时调用 getUserInfo 方法
  onLoad: function() {
    this.getUserInfo();
  },
  // 获取全局对象中的 App.globalData.userInfo
  // 判断是否有昵称 nickName
  // 如果有，把用户信息设置到 Page.data.userInfo 内
  getUserInfo: function() {
    let userInfo = App.globalData.userInfo;
    if(userInfo.nickName){
      this.setData({
        logged: true,
        userInfo: userInfo
      })
    }
  },
  // 判断 e.detail.userInfo
  // 如果有，调取 App.getUserInfo 并把用户信息设置到全局 App.globalData.userInfo 中
  // 并且在成功之后再一次设置在 Page.data.userInfo 中。
  onGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      let userInfo = e.detail.userInfo;
      App.getUserInfo((res)=>{
        this.setData({
          userInfo: res.userInfo
        })
      })
    }
  }
})

