input = document.querySelector('pre').innerText.trim().split("\n")
ans1 = 0
c=0
x=1
for (i of input) {
  t = i.split(' ')
  c++
  if (t[0] === 'addx') {
    c++
    if ([0,1].includes((c+20)%40) ) {
      ans1 += (c -((c+20))%40)*x
    }
    x += Number(t[1])
  } else {
    ans1 += !((c+20)%40) ? c*x : 0
  }
}

console.log(`Answer 1: ${ans1}, Answer 2: ${'not implemented'}`)
