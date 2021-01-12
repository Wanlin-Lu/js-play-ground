/* util */
const { log } = console
const todourl = 'https://jsonplaceholder.typicode.com/todos/2'
const imgurl = `https://adom-wanlinlu-blog.oss-cn-hangzhou.aliyuncs.com/avatar.png`

/* play-ground */
let todoUrls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
]

async function loadOrder(urls) {
  for (let url of urls) {
    const response = await fetch(url)
    log(await response.json())
  }
}

// loadOrder(todoUrls)

async function loadOrderBF(urls) {
  const jsonPromises = urls.map(async url => {
    const response = await fetch(url)
    return response.json()
  })

  for (let jsonPromise of jsonPromises) {
    log(await jsonPromise)
  }
}

loadOrderBF(todoUrls)