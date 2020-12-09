input = document.querySelector('pre').innerText.trim().split("\n").map(Number)
ans1 = ans2 = 0
for (i=25;i<input.length; i++) {
    invalid =true
    input.slice(i-25,i).some(f => {
        input.slice(i-25,i).some(s => {
            if (input[i] === f+s) {return invalid = false}
        })
    })
    if (invalid) {ans1 = input[i]; i = input.length}
}
input.some((f, ind) => {
    total = input[ind]
    for (i=ind+1;i<input.length; i++) {
        total += input[i]
        if (total === ans1) {
            return ans2 = Math.max(...input.slice(ind, i)) + Math.min(...input.slice(ind, i))
        }
    }
})
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)
