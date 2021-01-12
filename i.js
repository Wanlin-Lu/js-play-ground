/* util */
const { log } = console
const todourl = 'https://jsonplaceholder.typicode.com/todos/2'
const imgurl = `https://adom-wanlinlu-blog.oss-cn-hangzhou.aliyuncs.com/avatar.png`

/* play-ground */
function sleep(interval) {
  return new Promise(resolve => {
    setTimeout(resolve,interval)
  })
}

async function one2five() {
  for (let i = 1; i < 6; i++) {
    console.log(i)
    await sleep(1000)
  }
}

one2five()