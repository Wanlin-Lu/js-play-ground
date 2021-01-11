/* util */
const { log } = console

/* play-ground */
Function.prototype.bind1 = function () {
  const args = Array.prototype.slice.call(arguments)
  const target = args.shift()
  const self = this

  return function () {
    return self.apply(target,args)
  }
}

const laugh = () => 'laugh'

const xiaoming = {}

const xml = laugh.bind1(xiaoming)

log(xml())