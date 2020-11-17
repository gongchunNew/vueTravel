module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // 要转换的单位
      viewportUnit: 'vw', // 转换后的单位
      viewportWidth: 375 // 适口宽度
    }
  }
}
