# Advent of Code
My solutions for [Advent of Code](https://adventofcode.com), there are probably more elegant solutions but ¯\\\_(ツ)\_/¯

To print the answer for a days puzzle (might be helpful for checking your answer before submission)

Open the browsers console on an [input page](https://adventofcode.com/2020/day/1/input)
and paste in this line
```
url = window.location.pathname.split('/')
eval(await fetch(`https://raw.githubusercontent.com/judaschwartz/AOC/main/answers-${url[1]}/day-${url[3].padStart(2, 0)}.js`).then(r=>r.text()))
```
test
