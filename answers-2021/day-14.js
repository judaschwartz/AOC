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
// refactored from brute force for part2 so it can scale
pairs = input.slice(2).reduce((a,l,i)=>{
  map = l.split` -> `
  a[map[0]] = {}
  a[l.split` -> `[0]].count = input[0].split(map[0]).length - 1
  a[l.split` -> `[0]].newA = map[0][0] + map[1]
  a[l.split` -> `[0]].newB = map[1] + map[0][1]
  return a
},{})
for (i=0;i<40;i++) {
    pairs = Object.keys(pairs).reduce((a,k,i)=>{
      if (!a[pairs[k].newA]) {
        a[pairs[k].newA] = JSON.parse(JSON.stringify(pairs[pairs[k].newA]))
        a[pairs[k].newA].count = pairs[k].count
      } else {a[pairs[k].newA].count += pairs[k].count}
      if (!a[pairs[k].newB]) {
        a[pairs[k].newB] = JSON.parse(JSON.stringify(pairs[pairs[k].newB]))
        a[pairs[k].newB].count = pairs[k].count
      } else {a[pairs[k].newB].count += pairs[k].count}
      return a
    },{})
}
ans2 = Object.values(Object.keys(pairs).reduce((a,n)=>{
  if (a[n[0]]) {
    a[n[0]] += pairs[n].count
  } else {a[n[0]] = pairs[n].count}
  if (a[n[1]]) {
    a[n[1]] += pairs[n].count
  } else {a[n[1]] = pairs[n].count}
  return a
},{}))
console.log(`Answer 1: ${Math.max(...ans1) - Math.min(...ans1)}, Answer 2: ${Math.round(Math.max(...ans2)/2) - Math.round(Math.min(...ans2)/2)}`)
