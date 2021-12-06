input = document.querySelector('pre').innerText.trim().split("\n")
result = input.reduce((acc, b) => {
    b.split('').forEach((n,i)=>{acc[i]+=(n*1)})
    return acc
}, new Array(12).fill(0)).map(r=>(r>input.length/2)*1)
ans1 = parseInt(result.join(''),2)*parseInt(result.map(i=>!i*1).join(''),2)
console.log(`Answer 1: ${ans1}, Answer 2: ...`)