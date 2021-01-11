/* util */
const { log } = console
const todourl = 'https://jsonplaceholder.typicode.com/todos/2'
const imgurl = `https://adom-wanlinlu-blog.oss-cn-hangzhou.aliyuncs.com/avatar.png`

/* play-ground */
const loadImg = url => {
  const promise = new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      const err = new Error(`图片加载失败 ${url}`)
      reject(err)
    }

    img.src = url
  })

  return promise
} 

loadImg(imgurl).then(img => {
  log(img.width)
}).catch(error => {
  log(error)
})

loadImg('imgurl').then(img => {
  log(img.width)
}).catch(error => {
  log(error)
})
