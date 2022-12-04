input = document.querySelector('pre').innerText.trim().split("\n")
ans1 = ans2 = 0
input.forEach(i => {
  ans1 += (i.slice(0,i.length/2).split('').find(l => i.slice(i.length/2).split('').includes(l)).charCodeAt(0)-38)%58
})
for (i=0; i<input.length; i+=3) {
  d=input[i].split('').filter(l => input[i+1].split('').includes(l))
  ans2 += (d.find(l => input[i+2].split('').includes(l)).charCodeAt(0)-38)%58
}
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)