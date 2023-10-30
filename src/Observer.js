import defineRective from "./defineRective.js"
import def from "./utils/def.js"
import { arrayMethods } from "./array.js"
import observe from "./observe.js"
export default class Observer {
  constructor(value) {
    // 给自身挂上不可枚举的__ob__属性
    def(value, "__ob__", this, false)
    
    if(Array.isArray(value)) {
      Object.setPrototypeOf(value, arrayMethods)
      this.observeArray(value)
    } else {
      this.walk(value)
    }
  }

  walk(val) {
    // 遍历一层属性，添加setter和getter
    const keys = Object.keys(val)
    keys.forEach(key => {
      defineRective(val, key)
    })
  }

  observeArray(val) {
    for(let i = 0, l = val.length; i < l; i++ ) {
      observe(val[i])
    }
  }
}