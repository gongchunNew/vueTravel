/**
 * 拷贝对象
 * @param {*} obj 要拷贝的对象
 */

export const copy = obj => {
  // 如果传入undefined
  if (obj === undefined) return undefined
  // 其他
  return JSON.parse(JSON.stringify(obj))
}

const create = {
  copy
}

export default create
