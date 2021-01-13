/* util */
const { log } = console
const todourl = 'https://jsonplaceholder.typicode.com/todos/2'
let todoUrls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
]
const imgurl = `https://adom-wanlinlu-blog.oss-cn-hangzhou.aliyuncs.com/avatar.png`

/* play-ground */
let arr = ['c', 'f', 'h', 'o']
let str = 'ab4de8glijklmn9'

var func = (function () {
  var count = 0
  return function () {
    return arr[count++];
  }
})()
let str1 = str.replace(/\d/g, func)
log(str1)

let str2 = str.replace(/\d/g, function () {
  var count = 0
  return function () {
    return arr[count++]
  }
})
log(str2) // wrong

let str3 = str.replace(/\d/g, (function () {
  var count = 0
  return function () {
    return arr[count++]
  }
})())
log(str3) // yes

// function replaceInput() {
//   let str4
//   for (let i of arr) {
//     str.replace(/\d/, arr[i])
//   }
//   return str4
// }
// replaceInput()
// log(str4)
// log(str)