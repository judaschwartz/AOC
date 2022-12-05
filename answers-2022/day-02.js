input = document.querySelector('pre').innerText.trim().split("\n")
let ans1 = ans2 = 0
k1 = {
    "A X": 4,
    "A Y": 8,
    "A Z": 3,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 7,
    "C Y": 2,
    "C Z": 6
}
k2 = {
    "A X": 3,
    "A Y": 4,
    "A Z": 8,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 2,
    "C Y": 6,
    "C Z": 7
}
input.forEach(i => {
    ans1 += k1[i]
    ans2 += k2[i]
})
console.log(`Brute force:  Answer 1: ${ans1}, Answer 2: ${ans2}`)

ans1 = ans2 = 0
k = {A:1,B:2,C:3,X:1,Y:2,Z:3}
input.forEach(i => {
    e = k[i[0]]
    s = k[i[2]]
    ans1 += s + (e-s ? (2+e-s)%3*6 : 3)
    ans2 += ((e+s-2)%3 || 3) + (s-1)*3
})
console.log(`Logic method: Answer 1: ${ans1}, Answer 2: ${ans2}`)