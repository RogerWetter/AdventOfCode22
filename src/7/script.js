import {readFileSync} from 'fs';

let test = false

let split = readFileSync(test ? 'testInput.txt' : 'input.txt', 'utf-8').split(/\r?\n/)
let res = 0
let res1 = []
let activeDir = 0
let dirs = []
let spaceNeeded

function checkAndSaveDir(dir) {
  if (dir < 100000)  res += dir
  if (dir > spaceNeeded) res1.push(dir)
}

function gaBack() {
  checkAndSaveDir(activeDir)
  activeDir += dirs.pop()
}

function goOutermostDir() {
  while (dirs.length > 0) {
    gaBack()
  }
}

const handleCommand = (words) => {
  if (words[1] === 'cd') {
    switch (words[2]) {
      case '..':
        gaBack()
        break
      case '/':
        goOutermostDir();
        break
      default:
        dirs.push(activeDir)
        activeDir = 0
    }
  }
}
const handleNumber = (words) => {
  activeDir += parseInt(words[0])
}

let spaceUsed = 0
split.forEach((line) => {
  let i = 0
  while (!isNaN(line.at(i)) && !isNaN(parseFloat(line.at(i)))) i++
  if (i) {
    spaceUsed += parseInt(line.slice(0, i))
  }
})

spaceNeeded = spaceUsed -40000000
split.forEach((line) => {
  let words = line.split(" ")
  switch (words[0]) {
    case '$':
      handleCommand(words)
      break
    case 'dir':
      break
    default:
      if (!isNaN(words[0]) && !isNaN(parseFloat(words[0]))) handleNumber(words)
  }
})
goOutermostDir()
res1.push(activeDir)


console.log(res)
console.log(Math.min(...res1))