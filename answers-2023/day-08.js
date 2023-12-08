let input = document.querySelector('pre').innerText.trim().split("\n")
const d = input[0].split('').map(d => ('R' === d) * 1)
const m={}
const sa = input.slice(2).map(l => {
    m[l.slice(0, 3)] = [l.slice(7, 10), l.slice(12, 15)]
    if (l[2] === 'A')
      return l.slice(0, 3)
}).filter(Boolean)
const steps = (s, a, ans = 0) => { 
    while ((a || s[2] !== 'Z') && s !== 'ZZZ') {
        d.map(d => s = m[s][d])
        ans++
    }
    return ans
}
const gcd = (a, b) => a ? gcd(b % a, a) : b
const lcm = (a, b) => a * b / gcd(a, b)
console.log(`Answer 1: ${steps('AAA', 1) * d.length}, Answer 2: ${sa.map(s => steps(s)).reduce(lcm) * d.length}`)
