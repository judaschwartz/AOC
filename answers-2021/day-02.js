input = document.querySelector('pre').innerText.trim().split("\n")
ans = input.reduce((acc, m) => {
    acc[(m[0] === 'f') * 1] += m[m.length-1] * (m[0] !== 'u' || -1)
    acc[2] += (m[0] === 'f') * m[m.length-1] * acc[0]
    return acc
},[0,0,0])
console.log(`Answer 1: ${ans[0]*ans[1]}, Answer 2: ${ans[1]*ans[2]}`)