/* util */
const { log } = console
const todourl = 'https://jsonplaceholder.typicode.com/todos/2'
const imgurl = `https://adom-wanlinlu-blog.oss-cn-hangzhou.aliyuncs.com/avatar.png`

/* play-ground */
let num = 123412341234214.123

function commafy(num) {
  return num && num
    .toString()
    .replace(/(\d)(?=(\d{3})+\.)/g, function ($1, $2) {
    return $2 + ','
  })
}

log(commafy(num))
