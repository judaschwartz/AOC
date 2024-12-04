const input = document.querySelector('pre').innerText.trim().split("\n")
const down = input.map((elem, i) => elem.split('').map((_, a) => input[a]?.[i]).join(''))
const diag = getDiagonals(input)
let ans1 = 0
let ans2 = 0
for (let grid of [input, down, diag]) {
  grid.forEach(l => ans1 += l.split('XMAS').length -1)
  grid.forEach(l => ans1 += l.split('SAMX').length -1)
}
input.map((l, i) => l.split('').map((c, j) => {
  if (c === 'A') {
    if (['MS', 'SM'].includes(`${input[i-1]?.[j-1]}${input[i+1]?.[j+1]}`) && ['MS', 'SM'].includes(`${input[i+1]?.[j-1]}${input[i-1]?.[j+1]}`)) ans2++
  }
}))
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)

function getDiagonals(arr) {
  const rows = arr.length
  const cols = Math.max(...arr.map(str => str.length))
  const diag = []
  for (let d = 0; d < rows + cols - 1; d++) {
    const diagonal1 = [], diagonal2 = []
    for (let row = 0; row < rows; row++) {
      const col1 = d - row
      if (col1 >= 0 && col1 < cols && arr[row][col1] !== undefined) diagonal1.push(arr[row][col1])
      const col2 = d - (rows - 1 - row)
      if (col2 >= 0 && col2 < cols && arr[row][col2] !== undefined) diagonal2.push(arr[row][col2])
    }
    if (diagonal1.length) diag.push(diagonal1.join(''))
    if (diagonal2.length) diag.push(diagonal2.join(''))
  }
  return diag
}
