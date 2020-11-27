// 自动引入所有的模块
const modules = require.context('./modules', false, /.js$/)
// 遍历文件名 分别引入
modules.keys().forEach(fileName => {
  const moduleName = fileName.replace(/\.\/(.*)\.js$/g, '$1')
  require(`./modules/${moduleName}`)
}, {})
