input = document.querySelector("pre").innerText.trim().split("\n")
ans1 = ans2 = 0
rows = [...Array(input.length)].map((e) => [-1, []])
cols = [...Array(input[0].length)].map((e) => [-1, []])
input.forEach((r, ri) => {
  r.split("").forEach((t, ci) => {
    v = 0
    if (Number(t) > rows[ri][0]) {
      v = 1
      rows[ri][0] = Number(t)
    }
    if (Number(t) > cols[ci][0]) {
      v = 1
      cols[ci][0] = Number(t)
    }
    rows[ri][1] = rows[ri][1].filter(
      (b) => Number(b.split(":")[1]) > Number(t)
    )
    cols[ci][1] = cols[ci][1].filter(
      (b) => Number(b.split(":")[1]) > Number(t)
    )
    if (!v) {
      cols[ci][1].push(ri + "-" + ci + ":" + t)
      rows[ri][1].push(ri + "-" + ci + ":" + t)
    }
    if (v) {
      ans1++
    }
    s = getScore(Number(ri), Number(ci), Number(t))
    ans2 = s > ans2 ? s : ans2
  })
})
ans1 += [...new Set([...cols.map((c) => c[1]).flat(), ...rows.map((r) => r[1]).flat()])].length

console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)

function getScore(r, c, h) {
  u = d = b = f = 0
  for (ir = r - 1; ir > -1; ir--) {
    u++
    if (h <= input[ir][c]) {
      ir = -1
    }
  }
  for (ir = r + 1; ir < input.length; ir++) {
    d++
    if (h <= input[ir][c]) {
      ir = input.length + 1
    }
  }
  for (ic = c - 1; ic > -1; ic--) {
    b++
    if (h <= input[r][ic]) {
      ic = -1
    }
  }
  for (ic = c + 1; ic < input.length; ic++) {
    f++
    if (h <= input[r][ic]) {
      ic = input.length + 1
    }
  }
  return u * d * b * f
}
