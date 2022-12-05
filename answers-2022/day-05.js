input = document.querySelector('pre').innerText.split("\n")
stackLine = input.findIndex(l=>l.slice(0,2) === ' 1')
stacks = makeStacks(input.slice(0, stackLine))
steps = input.slice(stackLine+2, -1).map(l=>l.split(' ').map(Number))
for (let step of steps) {
    move9000(step[1], step[3]-1, step[5]-1)
}
ans1 = stacks.map(a=>a.slice(-1)[0]).join('')
stacks = makeStacks(input.slice(0, stackLine))
for (let step of steps) {
    move9001(step[1], step[3]-1, step[5]-1)
}
ans2 = stacks.map(a=>a.slice(-1)[0]).join('')
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)
function move9000(amt, from, to) {
    for (p=0; p<amt; p++) {
        stacks[to].push(stacks[from].pop())
    }
}
function move9001(amt, from, to) {
    stacks[to] = [...stacks[to], ...stacks[from].slice(-1*amt)]
    stacks[from] = stacks[from].slice(0,-1*amt)
}
function makeStacks(raw) {
    result = [...Array(Number(input[stackLine].slice(-2)))].map(e => [])
    for (l=raw.length-1; l>-1; l--) {
        for (c=raw[l].length-2; c>0; c-=4) {
            result[(c-1)/4].push(raw[l][c].trim())
        }
    }
    return result.map(r => r.filter(Boolean))
}
