input = document.querySelector('pre').innerText.trim().split("\n")
ans1 = ans2 = 0
input.forEach(i => {
    e1=i.split(',')[0].split('-').map(Number)
    e2=i.split(',')[1].split('-').map(Number)
    if ((e1[0] >= e2[0] && e1[1] <= e2[1]) || (e2[0] >= e1[0] && e2[1] <= e1[1])) {
        ans1++
    }
    if (e1[1] >= e2[0] && e1[0] <= e2[1] || e2[1] >= e1[0] && e2[0] <= e1[1]) {
        ans2++
    }
})
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)