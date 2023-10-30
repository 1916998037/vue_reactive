import def from "./utils/def.js"

const methodsNeedChange = ["pop","push", "unshift", "shift", "splice", "reverse", "sort"]
const arrayPrototype = Array.prototype

export const arrayMethods = Object.create(arrayPrototype)

methodsNeedChange.forEach(methodName => {
  const orginal = arrayPrototype[methodName]
  def(arrayMethods, methodName, function() {
    const result = orginal.apply(this, arguments)
    const ob = this.__ob__
    const argArr = Array.from(arguments)
    let inserted = []
    switch (methodName) {
      case "push":
      case "unshift":
        inserted = argArr
        break
      case "splice":
        inserted = argArr.slice(2)
        break
    }

    if(inserted) {
      console.log("进来了：", inserted)
      ob.observeArray(inserted)
    }

    console.log("触发包装过的数组方法...")

    return result
  }, false)
})