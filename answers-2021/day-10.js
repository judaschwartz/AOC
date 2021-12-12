input = document.querySelector('pre').innerText.trim().split`\n`
ans = input.map(r=>{
  open =[]
  r.split('').map(c=>{
    if (Array.isArray(open) && '[(<{'.includes(c)) {
      open.push(c)
    } else if (Array.isArray(open)) {
      if (c === '}') {
        if (open.pop() !== '{') {
          open = 1197
        }
      } else if (c === ']') {
        if (open.pop() !== '[') {
          open = 57
        }
      } else if (c === ')') {
        if (open.pop() !== '(') {
          open = 3
        }
      } else if (c === '>') {
        if (open.pop() !== '<') {
          open = 25137
        }
      }
    }
  })
  return open
})
ans1 = ans.filter(o=>!Array.isArray(o)).reduce((a,r)=>{return a + r}, 0)
ans2 = ans.filter(o=>Array.isArray(o)).map(r=>{
  return r.reverse().reduce((a,c)=>{
    if (c === '{') {
      return (a*5)+3
    } else if (c === '[') {
      return (a*5)+2
    } else if (c === '(') {
      return (a*5)+1
    } else if (c === '<') {
      return (a*5)+4
    }
  }, 0)
}).sort((a,b)=>{return a-b})
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2[Math.floor(ans2.length/2)]}`)