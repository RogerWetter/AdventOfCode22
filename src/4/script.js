import {readFileSync} from 'fs';


let split = readFileSync('input.txt', 'utf-8').split(/\r?\n/)
let res = 0
let res1 = 0

split.forEach((value) => {
  const sectionPair = value.split(',')
  const firstPairNumb = sectionPair[0].split('-')
  const secondPairNumb = sectionPair[1].split('-')
  if ((parseInt(firstPairNumb[0]) <= parseInt(secondPairNumb[0]) && parseInt(secondPairNumb[1]) <= parseInt(firstPairNumb[1])) || (parseInt(firstPairNumb[0]) >= parseInt(secondPairNumb[0]) && parseInt(secondPairNumb[1]) >= parseInt(firstPairNumb[1]))) res++
  if ((parseInt(firstPairNumb[0]) <= parseInt(secondPairNumb[0]) && parseInt(secondPairNumb[0]) <= parseInt(firstPairNumb[1])) || (parseInt(firstPairNumb[1]) >= parseInt(secondPairNumb[1]) && parseInt(secondPairNumb[1]) >= parseInt(firstPairNumb[0])) || (parseInt(firstPairNumb[0]) >= parseInt(secondPairNumb[0]) && parseInt(secondPairNumb[1]) >= parseInt(firstPairNumb[1]))) res1++
})

console.log(res)
console.log(res1)