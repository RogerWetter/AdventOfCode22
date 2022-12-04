import {readFileSync} from 'fs';


let split = readFileSync('input.txt', 'utf-8').split(/\r?\n/)
let res = 0

let x
for (let i = 1; i < split.length; i += 3) {
  split[i-1].split('').forEach(arr => {
    if (split[i].includes(arr) && split[i+1].includes(arr))
      x = arr.charCodeAt(0) - ((arr === arr.toLowerCase())? 96 : (65 - 27))
  })
  res += x
}

console.log(res)