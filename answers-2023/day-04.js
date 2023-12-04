const input = document.querySelector('pre').innerText.trim().split("\n")
const ans2 = new Array(input.length).fill(1)
const ans1 = input.reduce((a, l, i) => {
  const arr = l.split(' ').slice(2).filter(t => t && t !== '|')
  const matches = arr.length - [...new Set(arr)].length
  for (let m = matches; m; m--) {
    ans2[i+m] && (ans2[i+m] += ans2[i])
  }
  return a + Math.floor(2**(matches - 1))
}, 0)
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2.reduce((a, b) => a + b, 0)}`)