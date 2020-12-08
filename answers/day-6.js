input = document.querySelector('pre').innerText.trim().split("\n\n")
ans1 = ans2 = 0
input.forEach(p => {
    ans1 += [...new Set(p.replace(/\s/g,''))].length
})
input.forEach(p => {
    lines = p.split("\n")
    all = [...(new Set(lines[0]))]
    lines.forEach(l => {
        la = [...(new Set(l))]
        all = la.filter(element => all.includes(element))
    })
    ans2 += all.length
})
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)
