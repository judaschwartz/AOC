input = document.querySelector('pre').innerText.trim().split("\n").map(c => c * 1)
p = input[0]
ans1 = ans2 = 0
input.slice(1).forEach(i => {ans1 += i>p; p=i;})
l1 = input[2]
l2 = input[1]
p = l1 + l2 + input[0]
input.slice(3).forEach(i => {
    ans2 += ((l1 + l2 + i) > p) * 1
    p = l1 + l2 + i
    l2 = l1
    l1 = i
})
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)