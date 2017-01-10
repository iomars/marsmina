
var _app = getApp()

Page({
  data: {
    menuitems: [
      { text: '优惠券', url: '', icon: '/public/images/benefit.png', tips: '提示语' },
      { text: '服务', url: '', icon: '/public/images/service.png', tips: '提示语' },
      { text: '宠物', url: '', icon: '/public/images/cat.png', tips: '提示语' },
      { text: '更多', url: '', icon: '/public/images/more.png', tips: '提示语' }
    ]
  },
  onLoad: function (options) {
    let that = this
    _app.getUsrInfo(function (usrinfo) {
      console.log(usrinfo)
      that.setData({
        usrinfo: usrinfo,
      })
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})