/* const score = 400
console.log(score)
const balance = new Number(score)
console.log(balance)

console.log(score.toString())
console.log(score.toFixed(3)); // 100.000

const value = 599.535
console.log(value.toPrecision(3)) // 300

const otherNumber = 1000000
console.log(otherNumber.toLocaleString()) */

// KEY POINT 
/*  1.7976931348623157e+308 max value
 min value 5e-324 */

 //++++++++++++++ MATH++++++++++++++//

 /* console.log(Math)
 console.log(Math.abs(-4))
 console.log(Math.ceil(4.3))
 console.log(Math.round(4.9))
 console.log(Math.floor(4.1))
 console.log(Math.sqrt(5))
 console.log(Math.random())
 console.log(Math.random()*10+5)
 console.log(Math.floor(Math.random())*10+5) */

 // ++++++++++ DATE++++++++++//   
/*  let date = new Date  
console.log(new Date)

//console.log(date)

console.log(date.toString())

console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleString())
console.log(date.toLocaleTimeString())
console.log(date.toTimeString())
console.log(date.getTimezoneOffset()) */

const num = 300
const othernum = new Number(num)
console.log(othernum)
console.log(othernum.toFixed(4))
console.log(othernum.toString())

console.log(Math.abs(-88))
console.log(Math.ceil(4.0)) //  point ka bad zero sa upward koi be value ho us ko round off karta ha
console.log(Math.floor(5.9)) // point ka bad value ko round off nahi karta
console.log(Math.round(6.4)) // point ka bad five sa greater then value ho us ko round off karta ha
console.log(Math.round(Math.random()*1+1))