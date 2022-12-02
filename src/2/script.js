import {readFileSync} from 'fs';


let split = readFileSync('input.txt', 'utf-8').split(/\r?\n/)
let res = 0
let res2 = 0

const givePoints = (chosen, draw, win) => {
  switch (chosen) {
    case draw: {
      res += 3
      break
    }
    case win: {
      res += 6
      break
    }
  }
}

function getResult(X) {
  switch (X) {
    case 'A':
      return {
        win: 'Y',
        draw: 'X',
        lose: 'Z',
      }
    case 'B':
      return {
        win: 'Z',
        draw: 'Y',
        lose: 'X',
      }
    case 'C':
      return {
        win: 'X',
        draw: 'Z',
        lose: 'Y',
      }
  }
}

function givePoints2(result) {
  switch (result) {
    case 'X': {
      res2++
      break
    }
    case 'Y': {
      res2 += 2
      break
    }
    case 'Z': {
      res2 += 3
      break
    }
    default:
      console.error('Input has Wrong schema: ' + x[1])
  }
}

// A for Rock, B for Paper, and C for Scissors
// X for Rock, Y for Paper, and Z for Scissors
split.forEach((value) => {
  // The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors)
  // plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).
  let x = value.split(" ")
  let result = getResult(x[0])
  switch (x[1]) {
    case 'X': {
      res++
      givePoints(x[0], 'A', 'C')
      // lose
      givePoints2(result.lose)
      break
    }
    case 'Y': {
      res += 2
      givePoints(x[0], 'B', 'A')
      // draw
      givePoints2(result.draw)
      res2 += 3
      break
    }
    case 'Z': {
      res += 3
      givePoints(x[0], 'C', 'B')
      // win
      givePoints2(result.win)
      res2 += 6
      break
    }
    default:
      console.error('Input has Wrong schema: ' + x[1])
  }
})

console.log(res)
console.log(res2)