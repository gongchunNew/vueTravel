const globalConfig = {

  // 当前环境
  // 服务器地址
  // 页面地址
  // 页面路径，不带index.html
  // 平台
  // 百度统计id
  timeout: 180 * 1000,
  requestCount: 0, // 当前正在进行的请求总数

  // 微信公众号appid

  // navigation
  navKeyName: 'navKey', // navigation在url中挂载参数的名字

  ui: {
    designWidth: 375, // 设计稿宽度
    pxRadio: 1 // 当前设计稿宽度与屏幕宽度比例
  // ui相关
  ui: {
    designWidth: 375, // 设计稿宽度
    pxRadio: 1, // 当前屏幕宽度与设计稿宽度的比例

    // 尺寸相关
    initHeight: getClientHeight(), // 视口初始高度，为页面第一次进入的高度(为真实px值)
    clientWidth: 0, // 视口宽度，需动态计算(为真实px值)
    clientHeight: 0, // 视口高度，需动态计算(为真实px值)
    safeTop: 0, // 顶部安全距离，只在ios下的app中有不为0的值(为真实px值)
    topRemain: 0, // 顶部安全距离 + appBar高度(上部的保留高度，为真实px值)

    // 以下尺寸与vars.scss保持一致
    heightAppBar: 50, // app bar高度(为设计稿宽度下的px值)
    safeTopFullScreen: 44, // iphone全面屏顶部安全距离--状态栏高度为44px(为真实px值)
    safeBottomFullScreen: 83, // iphone全面屏底部安全距离(为真实px值)
    safeTopNormal: 20, // iphone其他机型顶部安全距离--状态栏高度为20px(为真实px值)
    safeTopIpad: 20, // ipad顶部安全距离--状态栏高度为20px(为真实px值)

    // 颜色相关
    colorTheme: "#ff7e57", // 主题色
    colorThemeJl: "#ff7e57", // 主题色
    colorThemeLight: "#00d5fd", // 主题色-亮
    colorThemeDark: "#e6b800", // 主题色-暗
    colorBg: "#ffffff", // 背景色
    colorSuccess: "#52c750", // 成功色
    colorError: "#ff3333", // 错误色
    colorWarn: "#fdd835" // 警告色
  },

  os: navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    ? "ios"
    : "android", // 当前的操作系统：ios或android
  inWechat:
    window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) ==
    "micromessenger", // 当前是否在微信中
  inWechatWork:
    window.navigator.userAgent.toLowerCase().match(/WxWork/i) == "wxwork", // 当前是否在企业微信中
  inApp: false, // 当前是否在app中
  showAppBar: true, //是否显示AppBar 有部分情况 在微信也需要显示AppBar
  inIPhone: /iphone/gi.test(window.navigator.userAgent), // 当前是否在iphone中
  inIPhoneFullScreen: isIphoneFullScreen(), // 当前是否在iphone全面屏中打开
  inIpad: /ipad/gi.test(window.navigator.userAgent) // 当前是否在ipad中
  }
}

export default globalConfig
