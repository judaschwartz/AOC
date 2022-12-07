input = document.querySelector('pre').innerText.trim().split("\n")
m = {}
currentDir = ''
for (c of input) {
  cd = c.split('$ cd ')[1]
  ls = c.split(' ')
  if (cd && cd === '..') {
    currentDir = currentDir.split('/').slice(0, -1).join('/')
  } else if (cd) {
    currentDir = currentDir+'/'+cd
    m[currentDir] = [0]
  } else if (ls[0] === 'dir') {
    m[currentDir].push(currentDir+'/'+ls[1])
  } else if (ls[0] !== '$') {
    m[currentDir][0] += Number(ls[0])
  }
}
recalc = 1
keys = Object.keys(m)
while (recalc) {
  recalc = 0
  for (k of keys) {
    for (s of m[k].slice(1)) {
      if (m[s].length === 1) {
        recalc = 1
        m[k][0] += m[s][0]
        m[k] = m[k].filter(r=>r!==s)
      }
    }
  }
}
ans1=0
ans2=70000000
needed = 30000000 - (ans2 - m['//'][0])
for (k of keys) {
  ans1 += m[k][0] < 100001 ? m[k][0] : 0
  ans2 = m[k][0] > needed && m[k][0] < ans2 ? m[k][0] : ans2
}

console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)