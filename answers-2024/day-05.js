const input = document.querySelector('pre').innerText.trim().split("\n\n")
const m = {}
input[0].split("\n").map(r => {
  r = r.split('|')
  if (!m[r[1]]) m[r[1]] = []
  m[r[1]].push(r[0])
})
let ans1 = 0, ans2 = 0

for (let p of input[1].split("\n").map(e => e.split(','))) {
  let correct = true
  for (i = 0; i < p.length; i++) {
    const move = []
    m[p[i]]?.map(n => p.slice(i).map((e, ind) => e === n && move.push(...p.splice(i + ind, 1))))
    if (move.length) p.splice(i--, 0, ...move) && (correct = false)
  }
  ans1 += p[Math.floor(p.length /2)] * correct
  ans2 += p[Math.floor(p.length /2)] * !correct
}
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)
