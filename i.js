/* util */
const { log } = console
const todourl = 'https://jsonplaceholder.typicode.com/todos/2'
let todoUrls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
]
const imgurl = `https://adom-wanlinlu-blog.oss-cn-hangzhou.aliyuncs.com/avatar.png`;

/**
 * ! js语言基础
 */

/* 操作符和表达式 */
 
/* 语句 */

/* 
 * js 数据类型
 */
/* 数值 */
/* 字符串 */
/* 对象 */
/**
 * !数组
 */
/* 数组 flat */
/* function flaten(arr) {
  const isDeep = arr.some(item => item instanceof Array)
  if (!isDeep) {
    return arr
  }

  const res = Array.prototype.concat.apply([], arr)
  return flaten(res)
}
const res = flaten([1, 3, [2, 3, 4, [5, 6, [7, 8]], [2, 3, [56]]]])
log(res) */

/* 函数 */
/* Date日期 */
/**
 * !正则表达式 
 */
/* 数字千分位分隔符 */
/* let number = 999888777666.555
function commafy(num) {
  return num && num.toString().replace(
    /(\d)(?=(\d{3})+\.)/g, function ($1, $2) {
      return $2 + ','
    }
  )
}
log(commafy(number)) */

/* JSON */
/* Symbol */
/* Set & WeakSet */
/* Map & WeakMap */

/**
 * ! js 进阶
 */
/**
 * !类型进阶 
 */
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

/* 手写isEqual */
function isEqual(obj1, obj2) {
  function isObject(obj) {
    return typeof obj === 'object' && obj !== null
  }

  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2
  }

  if (obj1 === obj2) {
    return true
  }

  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)

  if (obj1Keys !== obj2Keys) {
    return false
  }

  for (let key in obj1) {
    const res = isEqual(obj1[key], obj2[key])
    if (!res) {
      return false
    }
  }

  return true
}
const obj1 = {
  a: 100,
  b: {
    x: 200,
    y: 300,
  },
}
const obj2 = {
  a: 100,
  b: {
    x: 200,
    y: 300,
  },
  c: 3000,
}
log(isEqual(obj1, obj2))
log(Object.is(obj1,obj2))


/**
 * !函数进阶
 */
/* function func(a, b, c) {
  return a + b + c
}
function func1(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
let func2 = a => b => c => a + b + c
log(func(1, 2, 3))
log(func1(1)(2)(3))
log(func2(1)(2)(3)) */

/**
 * !变量作用域进阶
 */
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

/* 闭包场景 */
/* 闭包隐藏数据，只提供API */
/* function createCache() {
  const data = {}
  return {
    set: function (key, val) {
      data[key] = val
    },
    get: function (key) {
      return data[key]
    }
  }
}
const c = createCache()
c.set('number', 10000)
log(c.get('number')) */

/* 闭包循环产生，记录循环词法环境中的i */
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
  a.onclick = (function(i) {
    // e.preventDefault()
    alert(i)
  })(i)
  document.body.appendChild(a)
} */

/* for (var i = 0; i < 10; i++) {
  const a = document.createElement('a')
  a.innerHTML = i + '<br>'
  a.onclick = (function (i) {
    // 这是重点
    return function () {
      alert(i)
    }
  })(i)
  document.body.appendChild(a)
}  */



/* 原型进阶 */
/* 原型链实例 */
/* class People {
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
log(xiaoming instanceof Object) */

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

/**
 * !变量的解构赋值
 */
/* fibonacci */
/* function fibonacci(n) {
  if(n === 1 || n === 2) return 1
  let [a, b] = [1, 1]
  for (let i = 2; i < n; i++) {
    [a,b] = [b, a+b]
  }
  return b
}
log(fibonacci(9)) //34 */

/**
 * !Iterator(遍历器)和for-of循环
 */
/* for-of vs forEach */
/* function muti(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}
function test1() {
  let arr = [1, 2, 3]
  arr.forEach(async x => {
    const res = await muti(x)
    log(res)
  })
}
async function test2() {
  let arr = [1, 2, 3]
  for (let v of arr) {
    const res = await muti(v)
    log(res)
  }
}
// test1()
test2() */



/**
 * ! Proxy & Reflect
 */
/* 最简单的观察者模式 */
/* let queuedObservers = new Set()
let observe = fn => queuedObservers.add(fn)
let observable = obj => new Proxy(obj, { set })
function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver)
  queuedObservers.forEach(observer => observer())
  return result
}

let obj = {}
let print = function () { log('printed') }

observe(print)
let obj1 = observable(obj)
obj1.name = 'asang'
log(obj1.name) */

/**
 * ! Promise
 */
/* promise 包装Ajax */
/* function getData(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      success(data) {
        resolve(data)
      },
      fail(error) {
        reject(error)
      },
    })
  })
}
getData(todourl).then(data => log(data)) */

/* promise 包装xhr */
/* function getData(url) {
  const promise = new Promise((resolve, reject) => {
    const handler = function () {
      if (this.readyState !== 4) return 
      if (this.status >= 200 && this.status < 300 || this.status == 304) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }

    let xhr = new XMLHttpRequest()
    xhr.open('GET',url)
    xhr.onreadystatechange = handler
    xhr.responseType = 'json'
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send(null)
  })
  return promise
}
getData(todourl).then(data => log(data)) */

/* Promise.all */
/* const promises = [1, 2, 3, 4, 5].map((id) =>
  getData(`https://jsonplaceholder.typicode.com/todos/${id}`)
)
Promise.all(promises).then(jsons => jsons.forEach(json => log(json))).catch(err => console.error(error)); */

/* promise 异步加载图片 */
/* function loadImgAsync(url) {
  const promise = new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      const err = new Error(`图片加载失败：${url}`)
      reject(err)
    }
    img.src = url
  })
  return promise
}
loadImgAsync(imgurl).then(img => {
  log(img.width)
}).catch(err => {
  log(err)
})
loadImgAsync('imgurl').then(img => {
  log(img.width)
}).catch(err => {
  log(err)
}) */

/**
 * ! Generator
 * * 异步状态机
 * TODO 继续学习
 */
/* Generator 和自动执行器 */
/* function getFoo() {
  return new Promise((resolve, reject) => {
    resolve('luwanlin')
  })
}
function* myGenerator() {
  try {
    const foo = yield getFoo()
    console.log(foo)
  } catch (err) {
    console.error(err)
  }
}
let mg = myGenerator()
mg.next().value.then(data => log(data))
mg.next().value.then(data => log(data))


function run(gen) {
  let it = gen()
  function go(result) {
    if (result.done) return result.value
    return result.value.then(value => {
      return go(it.next(value))
    }).catch(err => go(it.throw(e)))
  }
  go(it.next())
}
run(myGenerator) */

/* 没有异步的Generator，自动执行 */
/* let generator1 = function* () {
  yield 1
  yield* [2, 3, 4]
  yield 5
}

function runWithoutPromise(gen) {
  let it = gen()
  let res = it.next()
  while (!res.done) {
    log(res.value)
    res = it.next()
  }
}
runWithoutPromise(generator1) */

/* Generator flat 数组 */
/* let flat = function* (arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i] instanceof Array) {
      yield* flat(arr[i])
    } else {
      yield arr[i]
    }
  }
}
let arr = [1, [2, [3, [4], [5, 6], [7, 8]]]]
log(flat(arr))
log([...flat(arr)])

for (let v of flat(arr)) {
  log(v)
}

function rflat(arr) {
  let newarr = []
  for (let v of flat(arr)) {
    newarr.push(v)
  }
  return newarr
}
log(rflat(arr)) */

/**
 * ! async/await
 */
/* 休眠语法 */
/* function sleep(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve,interval)
  })
}
async function one2five() {
  for (let i = 1; i < 6; i++) {
    log(i) 
    await sleep(1000)
  }
}
one2five() */

/* async/await 调用 promise-异步加载图片 */
/* function loadImgAsync(url) {
  const promise = new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      const err = new Error(`图片加载失败：${url}`)
      reject(err)
    }
    img.src = url
  })
  return promise
}

(async function () {
  try {
    const img = await loadImgAsync(imgurl)
    log(img.width)
    const img1 = await loadImgAsync(imgurl+';')
    log(img1.height)
  } catch (err) {
    console.error(err)
  }
})() */

/* async/await | map | for-of 实现并发，顺序输出 */
/* async function loadOder(urls) {
  for (let url of urls) {
    const response = await fetch(url)
    log(await response.json())
  }
}
// loadOder(todoUrls)

async function loadOderBF(urls) {
  const JSONpromises = urls.map(async url => {
    const promise = await fetch(url)
    return promise.json()
  })

  for (let promise of JSONpromises) {
    log( await promise)
  }
}
loadOderBF(todoUrls) */


/* async/await ---> await */
/* async function fun() {
  const p1 = Promise.resolve(100)
  const res = await p1
  log(res)
}
fun() */

/* (async function() {
  const p1 = Promise.resolve(100)
  const res = await p1
  log(res)
})() */

/* (async function () {
  const p1 = new Promise(() => { })
  await p1
  log('p1',p1)
})() */

/* async/await === 执行顺序题 */
/* async function async1() {
  log('async1 start')
  await async2()
  log('async1 end')
}
async function async2() {
  log('async2')
}
log('script start')
async1()
log('script end') */

/* async function async1 () {
  console.log('async1 start') 
  await async2()
  console.log('async1 end')   
  await async3()
  console.log('asyn1 end 2')  
}
async function async2 () {
  console.log('async2')   
}
async function async3 () {
	console.log('async3')   
}
console.log('script start') 
async1()
console.log('script end') */

/**
 * ! event-loop
 */
/* event-loop 和DOM 渲染的关系 */
/* const $p1 = $('<p>一段文字</p>')
const $p2 = $('<p>一段文字</p>')
const $p3 = $('<p>一段文字</p>')
$('#root').append($p1).append($p2).append($p3)
log('length:', $('#root').children().length)
alert('本次callStack结束，DOM已经更新，但是尚未渲染')
setTimeout(() => {
  alert('定时器回调函数执行，意味着第二次call stack，就能看到dom了。')
}); */

/* 微任务/宏任务/DOM渲染 */
/* const $p1 = $('<p>一段文字</p>')
const $p2 = $('<p>一段文字</p>')
const $p3 = $('<p>一段文字</p>')
$('#root').append($p1).append($p2).append($p3)

Promise.resolve().then(() => {
  const length = $('#root').children().length
  alert(`微任务 完成，${length}`)
})

setTimeout(() => {
  const length = $('#root').children().length
  alert(`宏任务 完成，${length}`)
})  */


/* play-ground */

/**
 * !DOM树
 */

/**
 * !DOM事件
 */
/* 通用的事件绑定函数 */
/* function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector
    selector = null
  }

  elem.addEventListener(type, event => {
    const target = event.target
    if (selector) {
      if (target.matches(selector)) {
        fn.call(target, event)
      }
    } else {
      fn.call(target, event)
    }
  })
}
const pb = document.getElementById('pbox')
const cb = document.getElementById('cbox')
const items = cb.getElementsByClassName('list')
bindEvent(items[0], 'click', e => log('li clicked'))
bindEvent(pb,'click','li', e => log('li clicked, delegate.')) */

/**
 * ! chalenge
 */

