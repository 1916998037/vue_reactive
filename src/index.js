import observe  from "./observe.js" 

const obj = {
  x: {
    y: {
      z: "hello"
    }
  },
  m: 666
}

observe(obj)
console.log(obj.x.y.z);
obj.x.y.z = "hahaha"