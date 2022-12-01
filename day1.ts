const fs = require('node:fs')

const data = fs.readFileSync('./input1.txt', 'utf8')
const calorieArrayRaw = data.split(/\n\n/)
let elfMatrix = []
let elfTotals = []

for (let i = 0; i < calorieArrayRaw.length; i ++) {
  let currentElf = calorieArrayRaw[i].split(/\n/)
  elfMatrix.push(currentElf)
}

for (let i = 0; i < elfMatrix.length; i++) {
  let totalCals = 0
  for (let j = 0; j < elfMatrix[i].length; j++) {
    totalCals += Number(elfMatrix[i][j])
  }
  elfTotals.push(totalCals)
}

elfTotals.sort(function(a, b){return b-a})
console.log("part 1: " + elfTotals[0])
console.log("part 2: " + (elfTotals[0]+elfTotals[1]+elfTotals[2]))
