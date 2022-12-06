import {readFileSync} from 'fs';

let split = readFileSync('input.txt', 'utf-8').split("")

const checkIfAllDifferent = (x) => {
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length; j++) {
      if (i===j)break
      if (x[i]===x[j]) return false
    }
  }
  return true
}
const getResult = (x) => {
  for (let i = x-1; i < split.length; i++) {
    if (checkIfAllDifferent(split.slice(i - x + 1, i + 1))) {
      return i + 1
    }
  }
}

console.log(getResult(4))
console.log(getResult(14))
