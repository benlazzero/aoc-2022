const fs = require('node:fs')

let data = fs.readFileSync('./input1.txt', 'utf8')
data = data.replace(/\n/g, ',')
let dataArr = data.split(',')

const charToPoints = (char :any) => {
  const points = char.charCodeAt(0)
  let result = 0
  if (points >= 97) {
    result = points - 96
    return result
  }
  result = points - 38
  return result
}

// [letter, arr1 index, arr2 index] 
const findDupe = (arr2d :Array<Array<string>>) => {
  let result = []
  for (let i = 0; i < arr2d[0].length; i++) {
    for (let j = 0; j < arr2d[1].length; j++) {
      for (let k = 0; k < arr2d[2].length; k++) {
        if (arr2d[0][i] === arr2d[1][j] && arr2d[2][k] === arr2d[1][j]) {
          result.push(arr2d[0][i]) 
          result.push(i) 
          result.push(j) 
          result.push(k) 
          return result
        }
      }
    }
  }
  return ['p']
}

let result = 0
for (let i = 0; i < dataArr.length; i+=3) {
  let current = [dataArr[i].split(''), dataArr[i+1].split(''), dataArr[i+2].split('')]
  const dupe = findDupe(current)
  const points = charToPoints(dupe[0])
  result += points
}

console.log(result)
