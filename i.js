/* util */
const { log } = console
const todourl = 'https://jsonplaceholder.typicode.com/todos/2'
const imgurl = `https://adom-wanlinlu-blog.oss-cn-hangzhou.aliyuncs.com/avatar.png`

/* play-ground */
function multi(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000);
  }) 
}

function test1() {
  const arr = [1, 2, 3];
  arr.forEach(async x => {
    const res = await multi(x)
    log(res)
  })
}

test1()

async function test2() {
  const arr = [1, 2, 3];
  for (let x of arr) {
    const res = await multi(x)
    log(res)
  }
}

test2()
