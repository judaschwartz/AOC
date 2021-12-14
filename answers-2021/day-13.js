input = document.querySelector('pre').innerText.trim().split`\n`.map(l=>l.split(''))
ans1=0
for (i=0;i<100;i++) {step(1)}
ans2=100
while (!input.every(r=>r.every(c=>!c))){ans2++; step(0)}
function step(add) {
  input = input.map(r=>r.map(c=>c*1+1))
  while (input.some(r=>r.some(c=>c > 9))){
    input.map((l,r)=>l.map((x,c)=>{
      if (input[r][c] > 9) {
        ans1+=add
        input[r][c] = 0
        if (r && c) input[r-1][c-1] += input[r-1][c-1] ? 1 : 0
        if (r) input[r-1][c] += input[r-1][c] ? 1 : 0
        if (r && c<9) input[r-1][c+1] += input[r-1][c+1] ? 1 : 0
        if (c) input[r][c-1] += input[r][c-1] ? 1 : 0
        if (c<9) input[r][c+1] += input[r][c+1] ? 1 : 0
        if (r<9 && c)input[r+1][c-1] += input[r+1][c-1] ? 1 : 0
        if (r<9)input[r+1][c] += input[r+1][c] ? 1 : 0
        if (r<9 && c<9)input[r+1][c+1] += input[r+1][c+1] ? 1 : 0
      }
    }))
  }
}
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)