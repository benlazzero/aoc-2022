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

const makeTwoArr = (arr :Array<string>) => {
  const half = arr.length / 2 
  let arr1 = []
  let arr2 = []
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (i >= half) {
      arr2.push(arr[i])
      continue
    } 
    arr1.push(arr[i])
  }
  result.push(arr1)
  result.push(arr2)
  return result
}

// [letter, arr1 index, arr2 index] 
const findDupe = (arr2d :Array<Array<string>>) => {
  let result = []
  for (let i = 0; i < arr2d[0].length; i++) {
    for (let j = 0; j < arr2d[1].length; j++) {
      if (arr2d[0][i] === arr2d[1][j]) {
        result.push(arr2d[0][i]) 
        result.push(i) 
        result.push(j) 
        return result
      }
    }
  }
  return ['p']
}

let result = 0
for (let i = 0; i < dataArr.length; i++) {
  let current = dataArr[i].split('')
  let spliter = makeTwoArr(current)
  const dupe = findDupe(spliter)
  const points = charToPoints(dupe[0])
  result += points
}

console.log(result)
