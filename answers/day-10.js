input = [0].concat(document.querySelector('pre').innerText.trim().split("\n").map(Number).sort((a, b) => a - b))
input.push(input[input.length-1]+3)
one=three=cnt=0
input.forEach ((n,ind) => {
    if (n - input[ind - 1] === 1){one++}
    if (n - input[ind - 1] === 3){three++}
})
ans2=1
input.forEach ((n,ind) => {
    if (n - input[ind - 1] === 1){cnt++}
    if (n - input[ind - 1] === 3){
// this is a sub-optimal sulution, if I have time I will come back and work out the algorithm for a random run of ones any length
        if (cnt === 2) {ans2 *= 2}
        if (cnt === 3) {ans2 *= 4}
        if (cnt === 4) {ans2 *= 7}
        if (cnt === 5) {ans2 *= 13}
        cnt=0
    }
})
console.log(`Answer 1: ${one*(three)}, Answer 2: ${ans2}`)
