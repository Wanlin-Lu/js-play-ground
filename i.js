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
/* let arr = [1, 2, 3]
log(arr)
arr.forEach(i => i + 2)
log(arr)

let arr1 = []
arr.forEach(i => arr1.push(i + 2))
log(arr1) */

let arr = [{a:2,b:3}, {a:2,b:3}, {a:2,b:3}]
log(arr)
arr.forEach((i) => i.a + 2)
log(arr)

let arr1 = []
arr.forEach((i) => arr1.push({...i,a: i.a + 2}))
log(arr1)