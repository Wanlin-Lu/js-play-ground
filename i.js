/* util */
const { log } = console

/* play-ground */
function createCache() {
  const data = {}
  return {
    set(k, v) {
      data[k] = v
      log(k,' setted!')
    },
    get(k) {
      return data[k]
    }
  }
}

const c = createCache()
log(c.set('name', 'xiaoming'))
log(c.get('name'))