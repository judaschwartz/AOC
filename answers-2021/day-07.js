input = document.querySelector('pre').innerText.trim().split(',')
middle = input.sort((a, b) => {
    return a - b
})[input.length/2]
all = 0
ans1 = input.reduce((a,n)=>{
    all += n*1
    a += Math.abs(middle-n)
    return a  
},0)
avglow = Math.floor(all/input.length)
avgHigh = Math.ceil(all/input.length)
ans2 = input.reduce((a,n)=>{
    a[0] += Math.abs(avglow-n)*(Math.abs(avglow-n)+1)/2
    a[1] += Math.abs(avgHigh-n)*(Math.abs(avgHigh-n)+1)/2
    return a  
},[0,0])
console.log(`Answer 1: ${ans1}, Answer 2: ${Math.min(...ans2)}`)