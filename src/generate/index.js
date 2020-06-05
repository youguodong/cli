/*
 * @Author: last order
 * @Date: 2020-06-02 14:01:46
 * @LastEditTime: 2020-06-02 14:41:09
 */
const fs = require('fs')
const fsPromise = fs.promises

fsPromise.readFile('../lib/index.js', {
  encoding: 'utf-8'
}).then(res => {
  console.log(res)
})
