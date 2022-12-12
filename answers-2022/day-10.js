input = document.querySelector('pre').innerText.trim().split("\n")
ans1 = c = x = 0
x++
ans2="\n"
for (i of input) {
  tick(0)
  i.split(' ')[0] === 'addx' && tick(Number(i.split(' ')[1]))
}

console.log(`Answer 1: ${ans1}, Answer 2: ${ans2.replace(/(.{40})/g, "$1\n")}`)

function tick (addx) {
    ans1 += !((c+20)%40) ? c*x : 0
    ans2 += [x-1,x,x+1].includes(c%40) ? "#" : "."
    c++
    x += addx
}
