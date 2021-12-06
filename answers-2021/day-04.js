input = document.querySelector('pre').innerText.trim().split("\n\n")
calls = input[0].split(',')
callsMap = calls.reduce((acc, call, ind) => {
  acc[call] = ind
  return acc
},{})
boards = input.slice(1).map(b=>{
  return b.split('\n').map(l=>{
    return l.match(/.{1,3}/g).map(n=>n.trim())
  })
})
winOnTurns = boards.reduce((acc, b) => {
  acc.push(Math.min(...[...b, ...b.map((_, colIndex) => b.map(row => row[colIndex]))].reduce((a, l) => {
      a.push(Math.max(...l.map(n=>callsMap[n])))
      return a
  },[])))
  return acc
},[])
first=Math.min(...winOnTurns)
ans1 = boards[winOnTurns.indexOf(first)].flat().reduce((r,n) => {
  r += calls.slice(0,first+1).includes(n) ? 0 : n*1; 
  return r
}, 0) * calls[first]
last=Math.max(...winOnTurns)
ans2 = boards[winOnTurns.indexOf(last)].flat().reduce((r,n) => {
  r += calls.slice(0,last+1).includes(n) ? 0 : n*1; 
  return r
}, 0) * calls[last]
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)