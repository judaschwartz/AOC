input = document.querySelector('pre:last-of-type').innerText.trim().split`\n`
ans1=ans2=0
input.map(l=>l.split(' | ')[1].split(' ').map(n=>(ans1 += ((n.length <5||n.length>6)*1))))
input.map(line=>{
  nums=new Array(10).fill('')
  line.split(' | ')[0].split(' ').map(n => {
    if(n.length===2) {
      nums[1] = n.split('')
    } else if(n.length===3) {
      nums[7] = n.split('')
    } else if(n.length===4) {
      nums[4] = n.split('')
    } else if(n.length===7) {
      nums[8] = n.split('')
    }
  })
  line.split(' | ')[0].split(' ').map(n => {
    if (n.length===5) {
      if (nums[1].every(l=>n.includes(l))) {
        nums[3] = n.split('')
      } else if(nums[4].filter(l=>n.includes(l)).length - 2) {
        nums[5] = n.split('')
      } else {
        nums[2] = n.split('')
      }
    } else if(n.length===6) {
      if (nums[4].every(l=>n.includes(l))) {
        nums[9] = n.split('')
      } else if(nums[1].every(l=>n.includes(l))) {
        nums[0] = n.split('')
      } else {
        nums[6] = n.split('')
      }
    }
  })
  numsMap={}
  nums.map((a,i) => {
    numsMap[a.sort().join('')] = i
  })
  ans2 += line.split(' | ')[1].split(' ').map(n => numsMap[n.split('').sort().join('')]).join('')*1
})
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)