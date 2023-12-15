const input = document.querySelector('pre').innerText.trim().split(",")
let ans1 = input.reduce((a, l) => a + l.split('').reduce((cv, c) => ((c.charCodeAt() + cv) * 17) % 256, 0), 0)
console.log(`Answer 1: ${ans1}, Answer 2: ${0}`)
