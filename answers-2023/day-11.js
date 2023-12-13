const input = document.querySelector('pre').innerText.trim().split("\n")
let ans = 0, ex = 0, emptyC = [], emptyR = [], g = []
for (let i = 0; i < input[0].length; i++) {emptyC.push(input.every(s => s[i] === '.'))}
input.map((l, r) => emptyR.push(l === '.'.repeat(input[0].length)) && l.split('').map((s, c) => s === '#' && g.map(p => {
      const cc = new Int16Array([c, p[1]]).sort()
      ans += (r - p[0]) + (cc[1] - cc[0])
      ex += [...emptyR.slice(p[0], r), ...emptyC.slice(...cc)].filter(Boolean).length
  }) && g.push([r, c])
))
console.log(`Answer 1: ${ans + ex}, Answer 2: ${ans + (ex * 999999)}`)
