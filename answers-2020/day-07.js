input = document.querySelector('pre').innerText.trim().split("\n")
ans1=[]
ans2 = 0
lvl=["shiny gold"]
while (lvl.length) {
    nextLvl = []
    lvl.forEach(l => {
        input.forEach(p => {
            bags = p.split(" bags contain ")
            bags[1] = bags[1].split(', ')
            if (bags[1].some(v => v.includes(l))) {
                nextLvl.push(bags[0])
                ans1.push(bags[0])
            }
        })
        lvl = nextLvl
    })
}
lvl=["shiny gold"]
while (lvl.length) {
    nextLvl = []
    lvl.forEach(l => {
        input.forEach(p => {
            bags = p.split(" bags contain ")
            if (bags[0] === l) {
                bags[1].split(', ').forEach(bag => {
                    b = bag.replace(' bags','').replace(' bag','').replace('.','')
                    Array(b.replace(/[^0-9]/gm,'')*1).fill().map(x=>nextLvl.push(b.replace(/[0-9] /gm,'')))
                    ans2 += b.replace(/[^0-9]/gm,'')*1
                })
            }
        })
        lvl = nextLvl
    })
}
console.log(`Answer 1: ${[...new Set(ans1)].length}, Answer 2: ${ans2}`)
