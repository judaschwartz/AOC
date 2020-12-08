input = document.querySelector('pre').innerText.trim().split("\n")
ans1 = ans2 = 0
input.forEach(l => {
    str = l.split(" ")
    total = 0
    [...str[2]].forEach(c => {
        if (c === str[1].split(':')[0]) {total++}
    })
    if (total >= str[0].split('-')[0] && total <= str[0].split('-')[1]) {ans1++}
})
input.forEach(l => {
    str = l.split(" ");
    a = str[1].split(':')[0] === str[2][str[0].split('-')[0] - 1]
    b = str[1].split(':')[0] === str[2][str[0].split('-')[1] - 1]
    if (a+b===1) {ans2++}
})
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)
