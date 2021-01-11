/* util */
const { log } = console
const todourl = 'https://jsonplaceholder.typicode.com/todos/2'

/* play-ground */
/* function getData(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      success(data) {
        resolve(data)
      },
      fail(error) {
        reject(error)
      }
    })
  })
}

getData(todourl).then(data => {
  log(data)
}) */

function getData(url) {
  return new Promise((resolve, reject) => {
    const handler = function () {
      if (this.readyState !== 4) { return }
      if (this.status >= 200 && this.status < 300 || this.status == 304) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }

    let xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.onreadystatechange = handler
    xhr.response.Type = 'json'
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send(null)
  })
}

getData(todourl).then(data => { log(data)})
