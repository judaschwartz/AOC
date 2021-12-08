input = document.querySelector('pre').innerText.trim().split`\n`
map={}
for (line of input.map(l=>l.split` -> `.map(c=>c.split`,`.map(n=>String(n).padStart(3, '0'))))) {
  if (line[0][0] === line[1][0]){
    mapCoordinates([Math.min(line[0][1], line[1][1]), Math.max(line[0][1], line[1][1])], line[0][0], '')
  } else if (line[0][1] === line[1][1]){
    mapCoordinates([Math.min(line[0][0], line[1][0]), Math.max(line[0][0], line[1][0])], '', line[0][1])
  }
}
ans1=ans2=0
Object.keys(map).forEach(key => {
  if (map[key] > 1) ans1++
})
for (line of input.map(l=>l.split` -> `.map(c=>c.split`,`.map(n=>String(n).padStart(3, '0'))))) {
  if (line[0][1] > line[1][1] && line[0][0] > line[1][0]) {
    mapCoordinates([line[1][1], line[0][1]], line[1][0], '', 1)
  } else if (line[0][1] < line[1][1] && line[0][0] < line[1][0]) {
    mapCoordinates([line[0][1], line[1][1]], line[0][0], '', 1)
  } else if (line[0][1] > line[1][1] && line[0][0] < line[1][0]) {
    mapCoordinates([line[1][1], line[0][1]], line[0][0], '', 2)
  } else if (line[0][1] < line[1][1] && line[0][0] > line[1][0]) {
    mapCoordinates([line[0][1], line[1][1]], line[1][0], '', 2)
  }
}
Object.keys(map).forEach(key => {
  if (map[key] > 1) ans2++
})
function mapCoordinates(cords, x, y, d = 0) {
  for (i=cords[0]*1;i<=cords[1]*1;i++) {
    si = String(i).padStart(3, '0')
    xi = d ? String(x - (d<2 ? cords[0] - i : i-cords[1])).padStart(3, '0') : x
    map[xi+si+y] = map[xi+si+y] ? map[xi+si+y]+1 : 1
  }
}
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)