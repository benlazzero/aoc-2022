const fs = require('node:fs')

let data = fs.readFileSync('./input1.txt', 'utf8')
data = data.replace(/\n/g, '/')
const dataArr = data.split('/')

const rangesToArr = (range :string) => {
  const ranges = range.split(',') 
  const range1 = ranges[0].split('-')
  const range2 = ranges[1].split('-')
  const r1floor = Number(range1[0])
  const r1cel = Number(range1[1])
  const r2floor = Number(range2[0])
  const r2cel = Number(range2[1])
  let result1 = []
  let result2 = []
  
  for (let i = r1floor; i <= r1cel; i++) {
    result1.push(i) 
  }

  for (let i = r2floor; i <= r2cel; i++) {
    result2.push(i) 
  }
  
  return [result1, result2]
}

const doesOverlap = (arr1: Array<number>, arr2: Array<number>) => {
  let arr3 = arr1.concat(arr2)
  const arr3unique = [...new Set(arr3)]
  if (arr3.length === arr3unique.length) {
    return false
  }
  return true
}

let amount = 0
for (let i = 0; i < dataArr.length; i++) {
  const ranges = rangesToArr(dataArr[i])
  const isOverlap = (doesOverlap(ranges[0], ranges[1]))
  if (isOverlap) {
    amount += 1
  }
}

console.log(amount)
