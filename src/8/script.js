import {readFileSync} from 'fs';

let test = false

let split = readFileSync(test ? 'testInput.txt' : 'input.txt', 'utf-8').split(/\r?\n/)
let map = []
let res = 0
let res1 = []

split.forEach(line => map.push(line.split('')))
console.table(map)

map.forEach((line, indexLine) => line.forEach((tree, indexTree) => {
  if (indexLine === 0 || indexLine === map.length - 1 || indexTree === 0 || indexTree === line.length - 1) {
    res++
    return
  }
  let column = []
  map.forEach(line => column.push(line[indexTree]))
  if (line.slice(0, indexTree).every(testTree => tree > testTree)
    || line.slice(indexTree + 1).every(testTree => tree > testTree)
    || column.slice(0, indexLine).every(testTree => tree > testTree)
    || column.slice(indexLine + 1).every(testTree => tree > testTree)) res++

  function getScenicScore(trees) {
    let result = 0
    for (const i in trees) {
      result++
      if (tree <= trees[i]) break
    }
    return result
  }

  res1.push(getScenicScore(line.slice(0, indexTree).reverse())
    * getScenicScore(line.slice(indexTree + 1))
    * getScenicScore(column.slice(0, indexLine).reverse())
    * getScenicScore(column.slice(indexLine + 1)))
}))

console.log(res)
console.log(Math.max(...res1))
