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
// let arr = [1, 2, 3]
// log(arr)
// arr.map(i => i + 2)
// let arr1 = arr.map((i) => i + 2)
// log(arr)
// log('arr1',arr1)

// let arr2 = []
// arr.map(i => arr2.push(i + 2))
// log(arr2)

let arr = [{a:2,b:3}, {a:2,b:3}, {a:2,b:3}]
log(arr)
arr.map((i) => i.a + 2)
let arr3 = arr.map((i) => ({ ...i, a: i.a + 2 }))
log(arr)
log('arr3',arr3)

let arr4 = []
arr.map((i) => arr4.push({...i,a: i.a + 2}))
log(arr4)