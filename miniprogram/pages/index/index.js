// 通过 wx.cloud.database 方法，定义数据对象 db 。
const db = wx.cloud.database()

Page({
  // 在 Page.data 中定义 topics 数据为空数组。
  // 定义 fullScreen 为当前是否全屏播放视频。
  data: {
    fullScreen: false,
    topics: [],
  },
  // 在 onShow 生命周期中调用 getTopics 方法获取数据
  onShow: function() {
    this.getTopics()
  },
  // 定义 getTopics 方法接收参数 cb 
  // 通过 collection 方法连接 topic 云数据库集合
  // 使用 orderBy 按照 createTime 字段的 desc 方式倒序排列
  // 最后通过 get 方法的 success 成功回调获取到数据，并设置到 Page.data.topics 中
  // 在数据成功之后，我们判断 cb 参数的类型是否函数，如果是函数的话就调用
  // 如果获取失败，我们使用 showToast 方法提示并在控制台打印
  getTopics: function(cb) {
    db.collection('topic').orderBy('createTime', 'desc').get({
      success: res => {
        console.log('[数据库] [查询记录] 成功: ', res)
        let topics = res.data;
        this.setData({ topics })
        typeof cb === 'function' && cb();
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },
  onPullDownRefresh: function() {
    this.getTopics(()=>{
      wx.stopPullDownRefresh()
    })
  }
})