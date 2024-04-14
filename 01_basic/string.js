const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + "Value")
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('hitest-hd')
console.log(gameName)
console.log(gameName.__proto__)
//{}
console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(3))

console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStrings = "   hitest    "
console.log(newStrings)
console.log(newStrings.trim())

const url = "https://hitest.com/hitest30"

console.log (url.replace('30','-'))
console.log(gameName.split('-'))

const user = 'zee - shan'
const val = 70
console.log(user)
const newUser = user.substring(4,7)
console.log(newUser)
console.log(user.slice(-7,3))
//console.log(user.split('-'))

// console.log(user + " " +   val + " " + 'value')
// console.log(`hello my name is ${user} and my value is ${val}`)
console.log(user.replace(" -" , " ,"))


const nametwo = 'zee-shan'
const userId = 12452
console.log(nametwo)

console.log(nametwo.toUpperCase())
console.log(nametwo.__proto__)

console.log(nametwo.replace('-' , ','))

console.log(nametwo.substring(5,7))

console.log(nametwo.slice(5,6));
console.log(nametwo.charAt("S"));
console.log(nametwo.indexOf(5));


