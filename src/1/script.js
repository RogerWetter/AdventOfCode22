import {readFileSync} from 'fs';


let cal = readFileSync('input.txt', 'utf-8').split(/\r?\n/)
let counter = 0
let res = []
cal.forEach((value) => {
  if (value) {
    counter += parseInt(value)
  } else {
    res.push(counter)
    counter = 0
  }
})
console.log(Math.max(...res))
console.log(res.sort((a, b) => a-b).slice(-3).reduce((partialSum, a) => partialSum + a, 0))