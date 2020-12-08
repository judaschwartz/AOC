input = document.querySelector('pre').innerText.trim().split("\n")
used = []
ind = ans = 0
readLine(ind)
ans1 = ans
function readLine(num) {
    if (num === (input.length - 1)) {return true}
    if (used.indexOf(num) > -1) {return false}
    used.push(num)
    cmd = input[num].split(" ")
    ind++
    if (cmd[0] === "acc") {
        ans += cmd[1]*1
    } else if (cmd[0] === "jmp") {
        ind += (cmd[1]*1)-1
    }
    return readLine(ind)
}
input.some((p,index) => {
    ans=0
    if (p.substr(0,3) !== "acc") {
        used = []
        ind=0
        input[index] = (p.substr(0,3) === "nop" ? "jmp" : "nop") + p.substr(3)
        if (readLine(ind)) {input[index] = p; return true}
        input[index] = p
    }
})
console.log(`Answer 1: ${ans1}, Answer 2: ${ans}`)
