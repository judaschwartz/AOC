let ans1 = 0, ans2 = 0
document.querySelector('pre').innerText.trim().split("\n").map(l => {
    p = l.split(': ')
    nums = p[1].trim().split(' ').map(Number)
    ans1 += !!either(nums[0], nums.slice(1), Number(p[0])) * p[0]
    ans2 += !!tri(nums[0], nums.slice(1), Number(p[0])) * p[0]
}, 0)

function either(a, b, ex) {
  if (b.length === 1) {
    if ((a * b[0] === ex) || (a + b[0] === ex)) return 1
  } else if (a + b[0] <= ex) {
    if (either(a * b[0], b.slice(1), ex) || either(a + b[0], b.slice(1), ex)) return 1
  }
  return 0
}
function tri(a, b, ex) {
  if (b.length === 1) {
    if ((a * b[0] === ex) || (a + b[0] === ex) || (Number(String(a) + b[0])) === ex) return 1
  } else if (a + b[0] <= ex) {
    if (tri(Number(String(a) + b[0]), b.slice(1), ex) || tri(a * b[0], b.slice(1), ex) || tri(a + b[0], b.slice(1), ex)) return 1
  }
  return 0
}

console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)
