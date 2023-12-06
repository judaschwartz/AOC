const input = document.querySelector('pre').innerText.trim().split("\n").map(l => l.split(/ +/g).slice(1))
const wins = (t, d) => {
  let lo = 0, hi = t
  while (1 + lo < hi) {
    const mi = lo + ((hi - lo) >> 1)
    mi * (t-mi) > d ? (hi = mi) : (lo = mi)
  }
  return t - (hi * 2) + 1
}
let ans1 = 1
for (let i = 0; i < input[0].length; i++) {
  ans1 *= wins(Number(input[0][i]), Number(input[1][i]))
}
console.log(`Answer 1: ${ans1}, Answer 2: ${wins(Number(input[0].join('')), Number(input[1].join('')))}`)