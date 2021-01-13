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

/* play-ground */
const styleSheetList = document.styleSheets
const cssRules = ss[0].cssRules
const cssText = cssRules[0].cssText
const cssSelectorText = cssRules[0].selectorText

log(styleSheetList)
log(ss[0])
log(cssRules)
log(cssText)
log(cssSelectorText)