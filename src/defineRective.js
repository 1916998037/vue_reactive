import observe from "./observe"
export default function defineRective(obj, key, val) {
  if(arguments.length === 2) {
    val = obj[key]
  }
  observe(val)
  Object.defineProperty(obj, key, {
    get() {
      console.log("正在访问" + key + "属性")
      return val
    },
    set(newValue) {
      console.log("正在改变" + key + "属性")
      val = newValue
      observe(newValue)
    }
  })
}