input = document.querySelector('pre').innerText.trim().split('')
console.log(`Answer 1: ${ans(input, 4)}, Answer 2: ${ans(input, 14)}`)

function ans(i, len) {
    let track = []
    for (l=0; l < i.length; l++) {
        ind = track.indexOf(i[l])
        if (ind === -1) {
            track.push(i[l])
        } else {
            track = [...track.slice(ind+1), i[l]]
        }
        if (track.length === len) {
            return l+1
        }
    }
}