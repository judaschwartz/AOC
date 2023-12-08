let input = document.querySelector('pre').innerText.trim().split("\n").map(l => l.split(' '))
const hand = (h, j) => {
    m = {}
    c = {T: 10, J: j ? 1 : 11, Q: 12, K: 13, A: 14}
    h = h.split('').map(l => {
        l = c[l] || l * 1
        m[l] = m[l] ? m[l] + 1 : 1
        return l
    })
    if (j && m['1'] && m['1'] < 5) {
        a = Object.entries(m).reduce((a, e) => e[0] !== '1' && a[1] < e[1] ? e : a, ['', 0])
        m[a[0]] += m['1']
        delete m['1']
    }
    return [...Object.values(m).sort().reverse(), ...h]
}
const ans = (j) => input.sort((a,b) => {
    h1 = hand(a[0], j)
    h2 = hand(b[0], j)
    d = h1.findIndex((n,i) => n !== h2[i])
    return ((h1[d] > h2[d]) * 2) - 1
}).reduce((a, b, i) => a + (b[1] * (i + 1)), 0)
console.log(`Answer 1: ${ans()}, Answer 2: ${ans(true)}`)
