input = document.querySelector('pre').innerText.trim().split`\n`
start = input[0].split``
rules = input.slice(2).reduce((a,l,i)=>{
  a[l.split` -> `[0]] = l.split` -> `[1]
  return a
},{})
for (i=0;i<10;i++) {
    start = start.reduce((a,l,i)=>{
      a.push(l)
      a.push(rules[l+start[i+1]])  
      return a
    },[]).filter(Boolean)
}
ans1 = Object.values(start.reduce((a,n)=>{
  a[n] = a[n] ? a[n]+1 : 1
  return a  
},{}))
console.log(`Answer 1: ${Math.max(...ans1) - Math.min(...ans1)}, Answer 2: ...`)