input = [0].concat(document.querySelector('pre').innerText.trim().split("\n").map(Number).sort((a, b) => a - b))
input.push(input[input.length-1]+3)
one=three=cnt=0
input.forEach ((n,ind) => {
    if (n - input[ind - 1] === 1){one++}
    if (n - input[ind - 1] === 3){three++}
})
ans2=1
function trib(n) {
    if (n < 3) {return 0} 
    if (n !== 3) {
        return trib(n - 1) + trib(n - 2) + trib(n - 3)
    } else {return 1}
}
input.forEach ((n,ind) => {
    if (n - input[ind - 1] === 1){cnt++}
    if (n - input[ind - 1] === 3){
        ans2 *= trib(cnt+3)
        cnt=0
    }
})
console.log(`Answer 1: ${one*(three)}, Answer 2: ${ans2}`)
