import {readFileSync} from 'fs';


let split = readFileSync('input.txt', 'utf-8').split(/\r?\n/)
let res = 0


split.forEach((value) => {
  const first = value.slice(0, value.length/2)
  const second = value.slice(value.length/2, value.length)
  let x
  first.split('').forEach(arr => {
    if (second.includes(arr))
      x = arr
  });
  res += x.charCodeAt(0) - ((x === x.toLowerCase())? 96 : (65 - 27))
})

console.log(res)