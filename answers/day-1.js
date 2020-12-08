input = document.querySelector('pre').innerText.trim().split("\n")
ans1 = 0
ans2 = 0
input.filter(v=>{input.filter(z=>{if (z*1+v*1 == 2020) {ans1 = z*v}})})
input.filter(v=>{input.filter(x=>{input.filter(z=>{if (z*1+v*1+x*1 == 2020) {ans2 = z*v*x}})})})
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)
