const input = document.querySelector('pre').innerText.trim().split("\n")
const colsToRows = input.map((l, i) => l.split('').map((_, a) => input[a]?.[i]).join(''))
const diag = getDiagonals(input)
let ans1 = 0, ans2 = 0
for (let grid of [input, colsToRows, diag]) {
  grid.forEach(l => ans1 += l.split('XMAS').length + l.split('SAMX').length - 2)
}
input.map((l, i) => l.split('').map((c, j) => {
  if (c === 'A') {
    if (['MS', 'SM'].includes(`${input[i-1]?.[j-1]}${input[i+1]?.[j+1]}`) && ['MS', 'SM'].includes(`${input[i+1]?.[j-1]}${input[i-1]?.[j+1]}`)) ans2++
  }
}))
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)

function getDiagonals(arr) {
  const diag = [], cols = arr[0].length, rows = arr.length
  for (let c = 0; c < cols + rows; c++) {
    diag.push(...arr.reduce((a, r, i) => [a[0] + (r[c - (rows - i)] || ''), a[1] + (r[c - i] || '')], ['', '']))
  }
  return diag
}
