input = document.querySelector('pre').innerText.trim().split("\n\n")
fields = ['byr:', 'iyr:', 'eyr:', 'hgt:', 'hcl:', 'ecl:', 'pid:']
ans1 = ans2 = 0
input.forEach(p => {if (fields.every(item => p.includes(item))) {ans1++}})
function validate(field, val) {
    switch (field) {
        case "byr:":
            return val >= 1920 && val <= 2002
            break
        case "eyr:":
            return val >= 2020 && val <= 2030
            break
        case "iyr:":
            return val >= 2010 && val <= 2020
            break
        case "hgt:":
            return (val.substr(-2) === "cm" && val.substr(0,3) >= 150 && val.substr(0,3) <= 193) || (val.substr(-2) === "in" && val.substr(0,2) >= 59 && val.substr(0,2) <= 76)
            break
        case "hcl:":
            return /^(#[a-f0-9]{6,6})$/.test(val)
            break
        case "ecl:":
            return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].indexOf(val) > -1
            break
        case "pid:":
            return /^([0-9]{9,9})$/.test(val)
            break
        default:
    }
    return false
}
input.forEach(p => {
    if (fields.every(item => {
        return p.includes(item) && validate(item, (p.split(item)[1]).split(/\s+/)[0])
    })) {ans2++}
})
console.log(`Answer 1: ${ans1}, Answer 2: ${ans2}`)
