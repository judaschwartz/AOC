input = document.querySelector('pre').innerText.trim().split("\n")
paths = [[1,1],[3,1],[5,1],[7,1],[1,2]]
ans = [0,0,0,0,0]
paths.forEach((p,i) => {
    row = col = 0
    while (row < input.length) {
        if (input[row][col%31] === "#") {ans[i]++;}
        col += p[0]
        row += p[1]
    }
})
console.log(`Answer 1: ${ans[1]}, Answer 2: ${ans.reduce((a, b) => a * b)}`)
