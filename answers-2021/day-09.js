input = document.querySelector('pre').innerText.trim().split`\n`.map(n=>[9,...n.split(''),9])
ans1=0;
p = [input[0].map(e=>9), ...input, input[0].map(e=>9)]
input.map((r, ri)=>{
  r.slice(1,-1).map((c, ci)=>{
    if (p[ri+1][ci] >c && p[ri][ci+1] >c && p[ri+1][ci+2] >c && p[ri+2][ci+1] > c) {
     ans1 += (c*1) +1
    }
  })
})
console.log(`Answer 1: ${ans1}, Answer 2: ...`)