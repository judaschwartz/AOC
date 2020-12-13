input = []
nextGen = document.querySelector('pre').innerText.trim().split('\n')
while (JSON.stringify(nextGen) != JSON.stringify(input)) {
    input = nextGen
    nextGen = []
    runGen(input)
}
function runGen(plane) {
    plane.forEach((l, row) => {
        newRow = ''
        l.split('').forEach((s, col) => {
            newRow += spotChecker(col, row)
        })
        nextGen.push(newRow)
    })
}
function spotChecker(col, row) {
    if (input[row][col] === '.') {return '.'}
    empty = 0
    if (((input[row-1]||0)[col-1]||0) !== '#') {empty +=1}
    if (((input[row+1]||0)[col+1]||0) !== '#') {empty +=1}
    if (((input[row-1]||0)[col+1]||0) !== '#') {empty +=1}
    if (((input[row+1]||0)[col-1]||0) !== '#') {empty +=1}
    if (((input[row]||0)[col-1]||0) !== '#') {empty +=1}
    if (((input[row-1]||0)[col]||0) !== '#') {empty +=1}
    if (((input[row]||0)[col+1]||0) !== '#') {empty +=1}
    if (((input[row+1]||0)[col]||0) !== '#') {empty +=1}   
    if ((empty > 7) || (input[row][col] === '#' && empty > 4)) {return '#'}
    return 'L'
}
ans1 = nextGen.join('').replaceAll('L','').replaceAll('.','').length
console.log(`Answer 1: ${ans1}`)
