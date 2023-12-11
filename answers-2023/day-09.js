const input = document.querySelector('pre').innerText.trim().split("\n").map(l => l.split(' ').map(Number))
const comp = (r) => {
  if (r.every(n => n === r[0]))
    return [r[0], r[0]]
  d = comp(r.map((n, i) => n - r[i-1]).filter(n => !Number.isNaN(n)))
  return [d[0] + r.at(-1), r[0] - d[1]]
}
const ans = input.reduce((a, r) => [a[0] + (n = comp(r))[0], a[1] + n[1]], [0, 0])
console.log(`Answer 1: ${ans[0]}, Answer 2: ${ans[1]}`)
