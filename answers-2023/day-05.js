const input = document.querySelector('pre').innerText.trim().split("\n\n")
let nums = new Float64Array(input[0].split(' ').slice(1))
const maps = input.slice(1).map(i => i.split("\n").slice(1).map(l => l.split(' ').map(Number)))
const mappedNum = (n, map) => {
  const sorted = new Float64Array([n+.5, ...map.map(r=>r[1])]).sort()
  m = map.find(r => r[1] === sorted[sorted.indexOf(n+.5) - 1])
  return m && n < m[1] + m[2] ? n - m[1] + m[0] : n
}
for (let i = 0; i < maps.length; i++) {
  nums = nums.map(n => mappedNum(n, maps[i]))
}
console.log(`Answer 1: ${Math.min(...nums)}, Answer 2: ${0}`)
