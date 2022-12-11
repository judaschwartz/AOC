input = document.querySelector('pre').innerText.trim().split("\n\n").map(m=>m.split("\n").slice(1))
m = setup()
z = m.reduce((a, b)=> a*b[2], 1)
for (q=0; q<20; q++) { round(3) }
ans1 = m.map(i=>i[5]).sort((a,b) => b-a)
m = setup()
for (let q=0; q<10000; q++) { round(1) }
ans2 = m.map(i=>i[5]).sort((a,b) => b-a)

console.log(`Answer 1: ${ans1[0]*ans1[1]}, Answer 2: ${ans2[0]*ans2[1]}`)

function setup () {
  const a = []
  input.forEach (i => {
    a.push([
      i[0].split(':')[1].split(',').map(Number),
      i[1].split('= old ')[1].split(' '),
      Number(i[2].split('by ')[1]),
      Number(i[3].split('ey ')[1]),
      Number(i[4].split('ey ')[1]),
      0
    ])
  })
  return a
}

function round (r) {
  for (let i of m) {
    i[5] += i[0].length
    i[0].forEach (w => {
      if (i[1][0] === '*') {
        w = Math.floor((w * (i[1][1] === 'old' ? w : i[1][1]))/r)
      } else if (i[1][0] === '+') {
        w = Math.floor((w + (i[1][1] === 'old' ? w : Number(i[1][1])))/r)
      }
      m[i[4 - Number(!(w%i[2]))]][0].push(w%z)
    })
    i[0]=[]
  }
}
