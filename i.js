/* util */
const { log } = console

/* play-ground */
/* let i, a
for (i = 0; i < 10; i++) {
  a = document.createElement('a')
  a.innerHTML = i + '<br>'
  a.addEventListener('click', function (e) {
    e.preventDefault()
    alert(i)
  })
  document.body.appendChild(a)
} */

/* for (let i = 0; i < 10; i++) {
  const a = document.createElement('a')
  a.innerHTML = i + '<br>'
  a.addEventListener('click', function (e) {
    e.preventDefault()
    alert(i)
  })
  document.body.appendChild(a)
} */

/* for (var i = 0; i < 10; i++) {
  const a = document.createElement('a')
  a.innerHTML = i + '<br>'
  a.onclick = (function (i) {
    return function () {
      alert(i)
    }
  })(i)
  document.body.appendChild(a)
} */

for (let i = 0; i < 10; i++) {
  const a = document.createElement('a')
  a.innerHTML = i + '<br>'
  a.onclick = (function (i) {
    return function () {
      alert(i)
    }
  })(i)
  document.body.appendChild(a)
}