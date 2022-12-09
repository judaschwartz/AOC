input = document.querySelector('pre').innerText.trim().split("\n")
map1 = {"0-0": 1}
map2 = {"0-0": 1}
h = [0, 0]
t = [0, 0]
m = [...Array(9)].map(e=>[0, 0])
for (c of input) {
  move = c.split(' ')
  for (s=0; s< move[1]; s++) {
    if (move[0] === 'R') {
      h[0]++
    } else if (move[0] === 'L') {
      h[0]--
    } else if (move[0] === 'U') {
      h[1]++
    } else {
      h[1]--
    }
    t = step(h, t)
    map1[t[0]+'-'+t[1]] = 1
    for (i=0; i < m.length; i++) {
      m[i] = step((i ? m[i-1] : h), m[i])
    }
    map2[m[8][0]+'-'+m[8][1]] = 1
  }
}

console.log(`Answer 1: ${Object.keys(map1).length}, Answer 2: ${Object.keys(map2).length}`)

function step(p, n) {
  dx = p[0] - n[0]
  dy = p[1]- n[1]
  if (Math.abs(dx) > 1) {
    return [n[0]+(dx/2), n[1] + (Math.abs(dy) === 2 ? dy/2 : dy)]
  } else if (Math.abs(dy) > 1) {
    return [n[0] + (Math.abs(dx) === 2 ? dx/2 : dx), n[1] + (dy/2)]
  }
  return n
}
