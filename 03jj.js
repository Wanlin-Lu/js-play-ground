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

/* 函数进阶 */
/* 变量作用域进阶 */
/* 原型进阶 */

/* 变量的解构赋值 */
/* Iterator(遍历器)和for-of循环 */
/* Proxy & Reflect */

/* Promise */

/* Generator */

/* async */
