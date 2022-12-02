const fs = require('node:fs')

let data = fs.readFileSync('./input1.txt', 'utf8')
data = data.replace(/\s/g, '')
data = data.trim()
let totalScore = 0

// A(Rock)B(Paper)C(Scissors)
// X(Rock)Y(paper)Z(Scissors)
// 1(Rock)2(paper)3(Scissors)
// 0(loss)3(Draw)6(win)

const game = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
  X: 'lose',
  Y: 'draw',
  Z: 'win'  
}

type ObjectKey = keyof typeof game;

for (let i = 0; i < data.length; i+=2) {
  let elfKey = data[i] as ObjectKey
  let meKey = data[i+1] as ObjectKey
  let elf = game[elfKey]
  let me = game[meKey]
  let hfScr = 0
  let fnScr = 0
  
  if (me === 'scissors') {
    hfScr = 3
  } else if (me === 'paper') {
    hfScr = 2
  } else {
    hfScr = 1
  }
  
  if (elf === me) {
    fnScr = 3
  } else if (elf === 'rock' && me === 'paper') {
    fnScr = 6
  } else if (elf === 'rock' && me === 'scissors') {
    fnScr = 0
  } else if (elf === 'scissors' && me === 'paper') {
    fnScr = 0
  } else if (elf === 'scissors' && me === 'rock') {
    fnScr = 6
  } else if (elf === 'paper' && me === 'rock') {
    fnScr = 0
  } else if (elf === 'paper' && me === 'scissors') {
    fnScr = 6
  }
  
  fnScr += hfScr
  console.log(fnScr)
  totalScore += fnScr
}

console.log(totalScore)
