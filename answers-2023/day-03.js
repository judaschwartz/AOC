let input = document.querySelector('pre').innerText.trim().split("\n")
input = [new Array(input[0].length + 2).fill('.').join(''), ...input.map(l => `.${l}.`), new Array(input[0].length + 2).fill('.').join('')]
let ans1 = 0
const ans2 = {}
input.reduce((s, l, i) => {
    let n = ''
    l.split('').forEach((c, ci) => {
      if (!isNaN(c)) {
        n += c
      } else {
        const t = [l[ci - n.length-1], input[i-1]?.slice(ci - n.length-1, ci+1), c, input[i+1]?.slice(ci - n.length-1, ci+1)]
        if (n && t.join('')?.replaceAll('.', '')) {
          ans1 += Number(n)
          let ind = ''
          t[0] === '*' && (ind = `${i}-${ci - n.length - 1}`)
          t[1].indexOf('*') > -1 && (ind = `${i-1}-${ci - n.length-1 + t[1].indexOf('*')}`)
          t[2] === '*' && (ind = `${i}-${ci}`)
          t[3].indexOf('*') > -1 && (ind = `${i+1}-${ci - n.length - 1 + t[3].indexOf('*')}`)
          ind && (ans2[ind] = ans2[ind] ? [...ans2[ind], n] : [n])
        }
        n = ''
      }
    })
},0)
console.log(`Answer 1: ${ans1}, Answer 2: ${Object.values(ans2).reduce((a, v) => v.length === 2 ? a+(v[0]*v[1]) : a, 0)}`)
