const input = document.querySelector('pre').innerText.trim().split("\n")
const r = input.map(p => Number(p.split('   ')[1])).sort()
const l = input.map(p => Number(p.split('   ')[0])).sort()
const ans1 = r.reduce((a, n, i) => a + Math.abs(n - l[i]), 0)
const ans2 = l.reduce((a, n) => a + (n * r.filter(s => s === n).length), 0)

console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)
