# AOC-2020
My solutions for Advent of Code 2020, there are probaly more elegant sulutions but ¯\\\_(ツ)\_/¯

To print the answer for a days puzzle (might be helpful for checking your answer before submission)

Open the browsers console on the input page (i.e. https://adventofcode.com/2020/day/1/input)
and paste in this spript
```
eval(await fetch('https://raw.githack.com/judaschwartz/AOC-2020/answers/day-'+window.location.pathname.split('/')[3]+'.js').then(r=>r.text()))
```
