/* util */
const { log } = console

/* play-ground */
class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector)
    const length = result.length 
    for (let i = 0; i < length; i++) {
      this[i] = result[i]
    }
    this.length = length
    this.selector = selector
  }

  get(index) {
    return this[index]
  }

  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i]
      fn(elem)
    }
  }

  on(type, fn) {
    return this.each(elem => {
      elem.addEventListener(type, fn, false)
    })
  }
}

jQuery.prototype.dialog = function (info) {
  log(info)
}

class myjQuery extends jQuery {
  constructor(selector) {
    super(selector)
  }

  style(data) {
    log(data)
  }
}

const $p = new jQuery('p')
log($p.get(1))
$p.each(elem => console.log(elem.nodeName))
$p.on('click', () => alert('click'))