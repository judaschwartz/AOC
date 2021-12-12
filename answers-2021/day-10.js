input = document.querySelector('pre').innerText.trim().split`\n`
ans1 = input.map(r=>{
open =[]
  return r.split('').map(c=>{
    if ('[(<{'.includes(c)) {
      open.push(c)
    } else {
      if (c === '}') {
        if (open.pop() !== '{') {
          return 1197
        }
      } else if (c === ']') {
        if (open.pop() !== '[') {
          return 57
        }
      } else if (c === ')') {
        if (open.pop() !== '(') {
          return 3
        }
      } else if (c === '>') {
        if (open.pop() !== '<') {
          return 25137
        }
      }
    }
  }).filter(Boolean)
}).filter(a=>a.length).reduce((a,r)=>{return a + r[0]}, 0)

input = document.querySelector('pre:last-of-type').innerText.trim().split`\n`
aa = input.map(r=>{
  open =[]
  r.split('').map(c=>{
    if (open && '[(<{'.includes(c)) {
      open.push(c)
    } else if (open) {
      if (c === '}') {
        if (open.pop() !== '{') {
          open = false
        }
      } else if (c === ']') {
        if (open.pop() !== '[') {
          open = false
        }
      } else if (c === ')') {
        if (open.pop() !== '(') {
          open = false
        }
      } else if (c === '>') {
        if (open.pop() !== '<') {
          open = false
        }
      }
    }
  })
return open
}).filter(Boolean)
ans2= aa.map(r=>{
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
return a
    }, 0)
}).sort((a,b)=>{return a-b})[Math.floor(aa.length/2)]
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)