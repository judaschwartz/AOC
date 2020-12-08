input = document.querySelector('pre').innerText.trim().split("\n")
ans1 = input.filter(v=>{input.filter(z=>{if (z*1+v*1 == 2020) {ans = z*v}})})
ans2 = input.filter(v=>{input.filter(x=>{input.filter(z=>{if (z*1+v*1+x*1 == 2020) {ans = z*v*x}})})})
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)
