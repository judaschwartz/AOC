const [rules, input] = document.querySelector('pre').innerText.trim().split("\n\n").map(s => s.split("\n"))
const m = rules.reduce((a, r) => ([x, y] = r.split('|'), (a[y] = a[y] || []).push(x), a), {})
let ans1 = 0, ans2 = 0, t, oo = []
for (let p of input.map(e => e.split(','))) {
  let fix = false
  for (j = 0; j < Math.ceil(p.length/2); j++) {
    p.slice(j).map((e, i) => m[p[j]]?.includes(e) && oo.push(...p.splice(i + j, 1)))
    if (oo.length) p.splice(j--, 0, ...oo) && (fix = true, oo = [])
  }
  t = p[Math.floor(p.length/2)], ans1 += t * !fix, ans2 += t * fix
}

console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)
