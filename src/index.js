import observe  from "./observe.js" 

const obj = {
  x: {
    y: {
      z: "hello"
    }
  },
  m: [1, "oolp", {test: "hahah"}]
}

observe(obj)
obj.m.push({huhu: "mmm"})
const last = (obj.m)[3].huhu
console.log(last)