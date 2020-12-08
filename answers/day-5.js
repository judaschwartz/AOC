input = document.querySelector('pre').innerText.trim().split("\n")
input = input.map(p => parseInt(p.replaceAll('F','0').replaceAll('B','1').replaceAll('L','0').replaceAll('R','1'), 2))
ans2 = [...Array(Math.max(...input)).keys()].filter(n => input.indexOf(n) === -1 && n > Math.min(...input));
console.log(`Answer 1: ${Math.max(...input)} Answer 2: ${ans2[0]}`);
