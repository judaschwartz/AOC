input = document.querySelector('pre').innerText.trim().split`\n\n`;
ans1 = [...new Set(input[0].split`\n`.map(i=>{
  split = i.split(',')
  fold = input[1].split`\n`[0].split`=`[1]
  return (split[0] > fold*1 ? fold*2 - split[0] : split[0])+','+split[1]
}))]
console.log(`Answer 1: ${ans1}, Answer 2: ...`)