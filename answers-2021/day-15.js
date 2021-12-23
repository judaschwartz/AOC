const input = document.querySelector('pre').innerText.trim().split`\n`.map(e=>e.split``.map(Number))
const largeInput = input.map(l=>{return [...l, ...l.map(e=>(e%9)+1), ...l.map(e=>((e+1)%9)+1), ...l.map(e=>((e+2)%9)+1), ...l.map(e=>((e+3)%9)+1)]})
const hugeInput = [...largeInput, ...largeInput.map(l=>l.map(e=>(e%9)+1)), ...largeInput.map(l=>l.map(e=>((e+1)%9)+1)), ...largeInput.map(l=>l.map(e=>((e+2)%9)+1)), ...largeInput.map(l=>l.map(e=>((e+3)%9)+1))]
function findShortestPath(map) {
  let ans = {"0-0": 0}
  map.forEach((l,ri)=>{
    l.forEach((p, ci)=>{
      if (ci && (ans[(ci-1)+'-'+ri]+p < ans[ci+'-'+ri] || !ri)) {
        ans[ci+'-'+ri] = ans[(ci-1)+'-'+ri]+p
      }
      ans[ci+'-'+(ri+1)] = ans[ci+'-'+ri]+map[ri+1]?.[ci]
    })
  })
  return ans[`${map.length-1}-${map.length-1}`]
}
console.log(`Answer 1: ${findShortestPath(input)}, Answer 2: ${findShortestPath(hugeInput)}`)
// this does not account for a path that goes up or back so it might not work for all data sets