input = document.querySelector('pre').innerText.trim().split("\n\n")
let ans = [0, 0, 0]
input.forEach(i => {
    const f = i.split("\n").reduce((a, b) => parseInt(a) + parseInt(b), 0)
    if (f > ans[0]) {
        ans[0] = f
        ans.sort((a, b) => a - b)
    }
})
console.log(`Answer 1: ${ans[2]}, Answer 2: ${ans.reduce((a, b) => a+b)}`)