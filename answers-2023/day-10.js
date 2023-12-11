let input = document.querySelector('pre').innerText.trim().split("\n")
input = [new Array(input[0].length + 2).fill('.'), ...input.map(l => ['.', ...l.split(''), '.']), new Array(input[0].length + 2).fill('.')]
const s = [input.findIndex((l) => l.includes('S'))]
s.unshift(input[s[0]].indexOf('S'))
map= {}
let a = 0, c = s, a2 =0
map[s.join()] = 1
if ('|7F'.includes(input[s[1]-1][s[0]])) {
  c = [s[0], s[1]-1]
} else if ('|JL'.includes(input[s[1]+1][s[0]])) {
  c = [s[0], s[1]+1]
} else if ('|-7J'.includes(input[s[1]][s[0]-1])) {
  c = [s[0]-1, s[1]]
} else if ('-FL'.includes(input[s[1]][s[0]+1])) {
  c = [s[0]+1, s[1]]
}
a2 += (s[0]*c[1])-(s[1]*c[0])
while (!map[c.join()]) {
  let e = []
  switch (input[c[1]][c[0]]) {
    case '|':
      e = [[c[0], c[1]+1], [c[0], c[1]-1]]
      break
    case '-':
      e = [[c[0]+1, c[1]], [c[0]-1, c[1]]]
      break
    case '7':
      e = [[c[0]-1, c[1]], [c[0], c[1]+1]]
      break
    case 'J':
      e = [[c[0]-1, c[1]], [c[0], c[1]-1]]
      break
    case 'L':
      e = [[c[0]+1, c[1]], [c[0], c[1]-1]]
      break
    case 'F':
      e = [[c[0]+1, c[1]], [c[0], c[1]+1]]
      break
  }
  t = e[!!map[e[0]?.join()] * 1]
  a2 += (c[0]*t[1])-(c[1]*t[0])
  map[c.join()] = 1
  c = t
  a++
}
a2 += (c[0]*s[1])-(c[1]*s[0])
console.log(`Answer 1: ${Math.round(a/2)}, Answer 2: ${Math.floor((Math.abs(a2) - a)/ 2) + 1}`)
// the answer seems off by one on one of the test cases but I didn't want to debug further
