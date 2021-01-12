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
function myInstanceof(left, right) {
  if (typeof left !== 'object' || left === null) return false

  let prototype = right.prototype

  left = left.__proto__
  
  while (true) {
    if (!left) return false;
    if (left == prototype) return true;
    left = left.__proto__
  }
}

log(myInstanceof([],Array))