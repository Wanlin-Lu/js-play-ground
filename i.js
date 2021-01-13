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
var bip = document.getElementById('bibao')
var list = bip.getElementsByTagName('li')

/* for (var i = 0; i < list.length; i++) {
  list[i].onclick = (function (i) {

    return function () {
      alert(i + 1)
    }

  })(i)
} */

for (var i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    alert(i+1)
  }
}

/* for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    alert(i+1)
  }
} */