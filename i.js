/* util */
const { log } = console

/* play-ground */
function deepClone(obj) {
  if (typeof obj !== 'object' || typeof obj === null) {
    return obj
  }

  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {  //[1,2,3].hasOwnProperty(1) //true
      result[key] = deepClone(obj[key])
    }
  }

  return result
}
let arr = [1, 3, 4]
let arr1 = arr
let arr2 = deepClone(arr)
log(arr1)
log(arr2)
arr[0] = 1000
log(arr1)
log(arr2)