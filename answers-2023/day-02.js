const input = document.querySelector('pre').innerText.trim().split("\n")
const ans1 = input.reduce((a, l) => {
  const id = l.match(/\d+/)
  if (l.split(/,|;|:/).slice(1).every(c => {
    if (c.match(/red/)) {
        return c.match(/\d+/) * 1 < 13
    } else if (c.match(/green/)) {
        return c.match(/\d+/) * 1 < 14
    } else if (c.match(/blue/)) {
        return c.match(/\d+/) * 1 < 15
    }
  })) {
    return a + Number(id)
  } else {return a}
}, 0)

const ans2 = input.reduce((a, l) => {
  const powers = 0
  const cubes = {red: 0, green: 0, blue: 0}
  l.split(/,|;|:/).slice(1).forEach(c => {
    c = c.split(' ')
    cubes[c[2]] = c[1] * 1 > cubes[c[2]] ? c[1] * 1 : cubes[c[2]]
  })
  return a += cubes.red * cubes.green * cubes.blue
}, 0)
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)