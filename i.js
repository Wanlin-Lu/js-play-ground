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
inner = 'window'

function say() {
  console.log(inner)
  console.log(this.inner)
}

var obj1 = (function () {
  var inner = '1-1'
  return {
    inner: '1-2',
    say: function () {
      console.log(inner)
      console.log(this.inner)
    },
  }
})()

var obj2 = (function () {
  var inner = '2-1'
  return {
    inner: '2-2',
    say: function () {
      console.log(inner)
      console.log(this.inner)
    },
  }
})()

say()
// window
// window
obj1.say()
// 1-1
// 1-2
obj2.say()
// 2-1
// 2-2
obj1.say = say
obj1.say()
// window
obj1.say = obj2.say
obj1.say() 
// 2-1
// 1-2
