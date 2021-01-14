/* util */
const { log } = console
const todourl = 'https://jsonplaceholder.typicode.com/todos/2'
let todoUrls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
]
const imgurl = `https://adom-wanlinlu-blog.oss-cn-hangzhou.aliyuncs.com/avatar.png`

/*
 *js语言基础
 */

/* 操作符和表达式 */
 
/* 语句 */

/* 
 * js 数据类型
 */
/* 数值 */
/* 字符串 */
/* 对象 */
/* 数组 */
/* 函数 */
/* Date日期 */
/* 正则表达式 */
/* JSON */
/* Symbol */
/* Set & WeakSet */
/* Map & WeakMap */

/* 
 * js 进阶
 */
/* 类型进阶 */
/* deepClone */
/* function deepClone(obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }

  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }

  return result
}

let arr = [1, 2, 3]
let arr1 = arr
let arr2 = deepClone(arr)
arr1[0] = 1000
arr2[1] = 2000
log(arr) //[1000,2,3] */

/* myInstanceof */
/* function myInstanceof(left, right) {
  if (typeof left !== 'object' || left === null) return false
  
  let prototype = right.prototype
  
  while (true) {
    left = left.__proto__
    if (!left) return false
    if (left === prototype) return true
  }
}

log(myInstanceof([1,2],Array)) */

/* 函数进阶 */

/* 变量作用域进阶 */
/* this -> 箭头函数 */
/* const zhangsan = {
  name: 'zhangsan',
  sayHi() {
    //this 即当前对象
    console.log(this)
  },
  wait() {
    setTimeout(() => {
      //this 为当前对象
      console.log(this)
    })
  },
  see() {
    setTimeout(function () {
      //this timeout
      console.log(this)
    })
  },
}
zhangsan.sayHi()
zhangsan.wait()
zhangsan.see() */

/* 手写 bind */
/* Function.prototype.bind1 = function () {
  const args = Array.prototype.slice.call(arguments)

  const target = args.shift()
  const self = this

  return function () {
    return self.apply(target,args)
  }
}

let obj = {}
let smile = (info) => log(info)

let objSmile = smile.bind1(obj, 'lovely day!')
objSmile() */

/* 原型进阶 */
/* 原型链实例 */
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
  log('sleeping!')
}

log(zhangsan.sleep())
log(xiaoming.sleep())

log(xiaoming instanceof Student)
log(xiaoming instanceof People)
log(xiaoming instanceof Object)

/* 手写jQuery */
/* class jQuery {
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
    return this.each((elem) => {
      elem.addEventListener(type, fn, false)
    })
  }
}

jQuery.prototype.dialog = function (info) {
  alert(info)
}

class myJQuery extends jQuery {
  constructor(selector) {
    super(selector)
  }

  style(data) {
    log(data)
  }
}

const $p = new jQuery('p')
log($p.get(1))

$p.each((elem) => log(elem.nodeName))
$p.on('click', () => alert('click'))  */

/* 变量的解构赋值 */
/* Iterator(遍历器)和for-of循环 */
/* Proxy & Reflect */

/* Promise */

/* Generator */

/* async */

/* play-ground */
