let input = document.querySelector('pre').innerText.trim().split("\n").map(l => l.split(' '))
let ans2 = 0
const hand = (h) => {
    m = {}
    c = {T: 10, J: 11, Q: 12, K: 13, A: 14}
    h = h.split('').map(l => {
        m[l] = m[l] ? m[l] + 1 : 1
        return c[l] || l * 1
    })
    return [...Object.values(m).sort().reverse(), ...h]
}
const ans1 = input.sort((a,b) => {
    h1 = hand(a[0])
    h2 = hand(b[0])
    d = h1.findIndex((n,i) => n !== h2[i])
    return ((h1[d] > h2[d]) * 2) - 1
}).reduce((a, b, i) => a + (b[1] * (i + 1)), 0)
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)
