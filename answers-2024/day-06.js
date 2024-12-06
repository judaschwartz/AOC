let ans1 = 0, ans2 = 0, og = []
const input = document.querySelector('pre').innerText.trim().split("\n").map((s, i) => {
    s = s.split('')
    s.forEach((p, j) => !'.#'.includes(p) && (og = [i, j, p]))
    return s
}), cols = input.length, rows = input[0].length

function march(g, maxx = cols * rows) {
  let steps = {}, count=0
  while (g[0] > -1 && g[1] > -1  && g[0] < rows  && g[1] < cols && count++ < maxx) {
    steps[g.slice(0, 2).join('-')] = true
    switch (g[2]) {
      case '^':
        g = input[g[0]-1]?.[g[1]] === '#' ? [g[0], g[1], '>'] : [g[0]-1, g[1], '^']
        break
      case '>':
        g = input[g[0]][g[1]+1] === '#' ? [g[0], g[1], 'v'] : [g[0], g[1]+1, '>']
        break
      case 'v':
        g = input[g[0]+1]?.[g[1]] === '#' ? [g[0], g[1], '<'] : [g[0]+1, g[1], 'v']
        break
      case '<':
        g = input[g[0]][g[1]-1] === '#' ? [g[0], g[1], '^'] : [g[0], g[1]-1, '<']
        break
    }
  }
  return { loop: (count > maxx) * 1, steps }
}
const { steps } = march(og)
ans1 = Object.keys(steps).length
for (let spot of Object.keys(steps)) {
    spot = spot.split('-')
    input[spot[0]][spot[1]] = '#'
    ans2 += march(og).loop
    input[spot[0]][spot[1]] = '.'
}

console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)