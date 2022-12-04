const input = document.querySelector('pre').innerText.trim().split("\n")
let ans1 = ans2 = 0
// TODO: logic for game instead of brute force
const k = {
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
const k2 = {
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
    ans1 += k[i]
    ans2 += k2[i]
})
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)