const input = document.querySelector('pre').innerText.trim().split("\n")
const r = (s) => s.split('').reverse().join('')
const i = {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9}
const ans = input.reduce((a, l) => {
  const s = l.match(RegExp(`\\d|${Object.keys(i).join('|')}`))
  const e = r(l).match(RegExp(`\\d|${r(Object.keys(i).join('|'))}`))
  return [a[0] + (l.match(/\d/) + r(l).match(/\d/)) * 1, a[1] + `${i[s] || s}${i[r(e[0])] || e}` * 1]
}, [0, 0])
console.log(`Answer 1: ${ans[0]}, Answer 2: ${ans[1]}`)