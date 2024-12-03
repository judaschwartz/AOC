const input = document.querySelector('pre').innerText.trim().split("\n").map(l => l.split(' ').map(Number))
const ans1 = input.filter(l => l.slice(1).reduce((p, n) => safe(p, n), [l[0], 0])).length
const ans2 = input.filter(l => l.slice(1).reduce((p, n, i) => safe(p, n, i, l), [l[0], 0])).length

console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)

function safe(p, n, i = -1, l = []) {
  if (Array.isArray(p)) {
    const d = n - p[0]
    p = Math.abs(d) < 4 && d && p[1] * d > -1 ? [n, d] : false
// part 2 check if removing the bad number or 1-2 before works
    if (!p && i > -1) {
      for (let j = i + 1; j > i - 2; j--) {
        if ([...l.slice(0, j), ...l.slice(j + 1)].slice(1).reduce((p, n) => safe(p, n), [l[!j * 1], 0])) p = true
      }
    }
  }
  return p
}
