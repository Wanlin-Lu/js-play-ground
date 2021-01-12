/* util */
const { log } = console
const todourl = 'https://jsonplaceholder.typicode.com/todos/2'
const imgurl = `https://adom-wanlinlu-blog.oss-cn-hangzhou.aliyuncs.com/avatar.png`

/* play-ground */
function func(a, b, c) {
  return a + b + c;
}

function fun(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

const fun1 = a => b => c => {
  return a + b + c
}

log(func(1, 2, 3))
log(fun(1)(2)(3))
log(fun1(1)(2)(3))