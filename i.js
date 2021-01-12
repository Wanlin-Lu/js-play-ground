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

function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector
    selector = null
  }

  elem.addEventListener(type, event => {
    const target = event.target
    if (selector) {
      if (target.matches(selector)) {
        fn.call(target, event)
      }
    } else {
      fn.call(target, event)
    }
  })
}

const pb = document.getElementById('pbox')
const cb = document.getElementById('cbox')
const items = document.getElementsByClassName('list')

bindEvent(items[0], 'click', e => log('li clicked!'))
bindEvent(pb, 'click', 'li', (e) => log('li clicked delegate'))

