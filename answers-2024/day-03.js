const input = document.querySelector('pre').innerText.trim()
let ans1 = mul(input)
let ans2 = 0
input.split('do()').forEach(d => ans2 += mul(d.split("don't()")[0]))

console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)

function mul(str) {
  let result = 0
  const regex = /mul\((\d+),\s*(\d+)\)/g
  while ((match = regex.exec(str)) !== null) {
    result += match[1] * match[2]
  }
  return result
}
