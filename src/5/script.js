import {readFileSync} from 'fs';

let test = false

let split = readFileSync(test? 'testInput.txt' : 'input.txt', 'utf-8').split(/\r?\n/)
let res = ''
let res1 = ''

const testStacks = [['Z', 'N'], ['M', 'C', 'D'], ['P']]

const realStacks = [
  ['T', 'D', 'W', 'Z', 'V', 'P'],
  ['L', 'S', 'W', 'V', 'F', 'J', 'D'],
  ['Z', 'M', 'L', 'S', 'V', 'T', 'B', 'H'],
  ['R', 'S', 'J'],
  ['C', 'Z', 'B', 'G', 'F', 'M', 'L', 'W'],
  ['Q', 'W', 'V', 'H', 'Z', 'R', 'G', 'B'],
  ['V', 'J', 'P', 'C', 'B', 'D', 'N'],
  ['P', 'T', 'B', 'Q'],
  ['H', 'G', 'Z', 'R', 'C']]

const stacks = test? testStacks : realStacks
const stacks1 = stacks.map(function(arr) {
  return arr.slice();
});

split.forEach((value) => {
  const split1 = value.split(' ')
  let move = parseInt(split1[1])
  let from = parseInt(split1[3])-1
  let to = parseInt(split1[5])-1
  for (let i = 0; i < move; i++) {
    let x = stacks[from].pop()
    stacks[to].push(x)
  }
  let x = stacks1[from].splice(move * -1)
  stacks1[to].push(...x)
})
stacks.forEach(stack => res += stack[stack.length - 1])
stacks1.forEach(stack => res1 += stack[stack.length - 1])

console.log(res)
console.log(res1)