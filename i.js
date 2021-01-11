/* util */
const { log } = console
const todourl = 'https://jsonplaceholder.typicode.com/todos/2'
const imgurl = `https://adom-wanlinlu-blog.oss-cn-hangzhou.aliyuncs.com/avatar.png`

/* play-ground */
const $p1 = $('<p>一段文字</p>')
const $p2 = $('<p>一段文字</p>')
const $p3 = $('<p>一段文字</p>')

$('#root').append($p1).append($p2).append($p3)

log('length', $('#root').children().length)

alert('本次call stack结束，DOM已经更新，但是尚未触发渲染')

setTimeout(() => {
 alert('定时器回调函数执行，意味着第二次call stack，就能看到dom了。') 
});
