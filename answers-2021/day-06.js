input = document.querySelector('pre').innerText.trim().split`,`
fish=input.reduce((a,n)=>{
  a[n]++
  return a  
}, [0,0,0,0,0,0,0,0,0])
for (i=80;i>0;i--) {
  fish=[fish[1],fish[2],fish[3],fish[4],fish[5],fish[6],fish[0]+fish[7],fish[8],fish[0]]
}
ans1 = fish.reduce((a,n)=>{return a+n},0)
for (i=256-80;i>0;i--) {
  fish=[fish[1],fish[2],fish[3],fish[4],fish[5],fish[6],fish[0]+fish[7],fish[8],fish[0]]
}
ans2 = fish.reduce((a,n)=>{return a+n},0)
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)