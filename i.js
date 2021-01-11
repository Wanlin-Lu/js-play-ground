/* util */
const { log } = console

/* play-ground */
class People {
  constructor(name) {
    this.name = name;
  }
  walk() {
    log(this.name,' walking!')
  }
}

class Student extends People {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  study() {
    log(`${this.name} number is ${this.number}, is study!`)
  }
}

const zhangsan = new People('zhangsan')
log(zhangsan.walk())

const xiaoming = new Student('xiaoming', 1000)
log(xiaoming)
log(xiaoming.study())
log(xiaoming.walk())

log(xiaoming.__proto__ === Student.prototype)
log(zhangsan.__proto__ === People.prototype)
log(Student.__proto__ === People)
log(Student.prototype.__proto__ === People.prototype)

xiaoming.__proto__.__proto__.sleep = function () {
  console.log('sleeping!')
}
log(zhangsan.sleep())
log(xiaoming.sleep())

log(xiaoming instanceof Student)
log(xiaoming instanceof People)
log(xiaoming instanceof Object)