const input = document.querySelector('pre').innerText.trim().split("\n").map(l => l.split(' '))
const ans1 = input.filter(l => l.slice(1).reduce((p, n) => safe(p, n), [Number(l[0]), 0])).length
const ans2 = input.filter(l => l.slice(1).reduce((p, n, i) => safe(p, n, i, l), [Number(l[0]), 0])).length

console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)

function safe(p, n, i = -1, l = []) {
  if (Array.isArray(p)) {
    n = Number(n)
    const d = n - p[0]
    if (
      (d && Math.abs(d) < 4 && !p[1]) ||
      (p[1] < 0 && d < 0 && d > -4) ||
      (p[1] > 0 && d > 0 && d < 4)
    ) {
      p = [n, d]
    } else if (i > -1) {
      p = !![...l.slice(0, i - 1), ...l.slice(i)].slice(1).reduce((p, n) => safe(p, n), [Number(l[!i - 1 ? 1 : 0]), 0]) ||
        !![...l.slice(0, i), ...l.slice(i + 1)].slice(1).reduce((p, n) => safe(p, n), [Number(l[!i ? 1 : 0]), 0]) ||
        !![...l.slice(0, i + 1), ...l.slice(i + 2)].slice(1).reduce((p, n) => safe(p, n), [Number(l[0]), 0])
    } else {
      p = false
    }
  }
  return p
}
