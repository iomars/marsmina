
import _conf from '../../mars/conf/config'

Page({
  data: {
    catelogimg:'/snap.png'
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: _conf.share_info.title, // 分享标题
      desc: _conf.share_info.desc, // 分享描述
      path: _conf.share_info.path // 分享路径
    }
  },

})
