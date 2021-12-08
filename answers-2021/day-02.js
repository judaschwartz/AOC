i = document.querySelector('pre').innerText.split`\n`
a = [0,0,0]
// please LMK if you can get this logic smaller 
i.map(m=>{a[f=+(m[0]=='f')]+=n=m.slice(-1)*(m[0]!='u'||-1);a[2]+=f*n*a[0]})
console.log(`Answer 1: ${a[0]*a[1]}, Answer 2: ${a[1]*a[2]}`)