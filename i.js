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
a = [1,2,3,4,5,6]

Array.prototype.random = function () {
  return this.sort(() => Math.random() - 0.5)
}

log(a.random())
