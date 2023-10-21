import defineRective from "./defineRective.js"
import def from "./utils/def.js"
export default class Observer {
  constructor(value) {
    // 给自身挂上不可枚举的__ob__属性
    def(value, "__ob__", this, false)
    this.walk(value)
  }

  walk(val) {
    // 遍历一层属性，添加setter和getter
    const keys = Object.keys(val)
    keys.forEach(key => {
      defineRective(val, key)
    })
  }
}