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
const t = document.getElementById('div1')

t.addEventListener('trag', e => {
  // log(e)
  log(e.clientX,e.clientY)
})

t.addEventListener(
  'drag',
  throttle(function(e) {
    log(e)
    log(e.clientX, e.clientY)
  },1000)
)

function throttle(fn, delay) {
  let timer = null
  
  return function () {
    if (timer) {
      return
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

