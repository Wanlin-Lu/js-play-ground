/* util */
const { log } = console
const todourl = 'https://jsonplaceholder.typicode.com/todos/2'
const imgurl = `https://adom-wanlinlu-blog.oss-cn-hangzhou.aliyuncs.com/avatar.png`

/* play-ground */

const flat = function* (a) {
  let len = a.length
  for (let i = 0; i < len; i++) {
    let item = a[i]
    if (item instanceof Array) {
      yield* flat(item)
    } else {
      yield item
    }
  }
}

const arr = [1, [2, [3, [4, 5], [6, 7]]]]
log([...flat(arr)])

for (let v of flat(arr)) {
  log(v)
}