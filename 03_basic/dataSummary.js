// data divided into two part permitive non permitive
// primitive 
//7types: string, number , boolean , null , undefined, symbol , bigInt
// symbol used is a uniqueness 

// reference or  non permitive
// array , objects , functions

const score = 100
console.log(score);
// not define javascript
 const id = Symbol("123")
const anotherId = Symbol('123')
if (id === anotherId) {
    console.log('depend on answer')
}
// false
console.log(id)
console.log(anotherId)
let bigNumber = 12365488955n
// last ma n is an example of bigint
console.log(bigNumber)
const heros = ["shan","ali"]
{
name: "hitest"
age: "24"
}

//Function(){} written in here

//non permitive data type is output is function


//++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack memory use perimitve,  heap non permitive 


// stack man copy or heap ma reference

/* let myYoutube = "shan"

let data= myYoutube
data = "chai"
console.log(data)
console.log(myYoutube)


let useOne = {
    email: "z00@gmail.com"
}

let useTwo = useOne
useTwo.email = "s11@gmail.com"
console.log(useOne.email)
console.log(useTwo.email) */


let googleId = {
    id : ' googlevicky.com'
}
let googleIdtwo = googleId
googleIdtwo.id = 'googlesam.com'
console.log(googleIdtwo);
console.log(googleId);