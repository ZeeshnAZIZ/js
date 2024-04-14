const arr = [1,2,3,4,5,[6,7,8,9],10,11,12,13,14,15,16,[17,18,19],20]
const arrangeArr = arr.flat(Infinity)
// console.log(arrangeArr)


const marvelHeore = ['batman','superman','spiderman']
const marverHeoreTwo = ['hulk','ironman','captainAmerica']
// console.log(marvelHeore.concat(marverHeoreTwo))
// console.log([...marvelHeore,...marverHeoreTwo])


function userName(name ='sam'){
    if (!name) {
        console.log(`name is ${name}`);
    }
    return `${name} is looged In`
}
// console.log(userName('zee'))

const foo = ()=>{
    // console.log(this.name)
}
foo.call({name:'zee'})


let x = 10
while (x<=11) {
    // console.log(`val is ${x}`)
    x++
    
}

let heore = ['batman','spiderman']
let heor = 0
while (heor < heore.length) {
    // console.log(`marvel heore is ${heore[heor]}`)
    heor++
}


let object = {}
if (Object.keys(object).length ===0) {
    // console.log('object has been declared')
}

let array = []
if (array.length === 0) {
    // console.log('arrow has exist')
}


let userEmail = 'zeegmai.com'
if (userEmail) {
    // console.log('email already exist')
}


let email = true
let result = (email != false) ? 'true': 'false'
// console.log(result)


let username = true
if (username != false) {
    // console.log('username already exist')
} else {
    // console.log('username not exist');
}


/* let firstName = 'muhammad'
let lastName = 'zeeshan'
let fullName = firstName + ' ' + lastName
console.log(fullName) */


const user = {
    firstName : 'muhammad',
    lastName : 'zeeshan',
    fullName: function(){
       return  this. firstName + ' ' + this. lastName
    }
}

// console.log(user.fullName())

let gameCounter = 100
++gameCounter
// console.log(gameCounter)


function outer(){
    let nameUser = 'sam'
        function inner(){
            // console.log(nameUser)
            
        }
        return  inner()
}   
const inout = outer()
// console.log(inout)


let userNametwo = 'sam'
let val1 = 10000
// console.log(userNametwo.toLocaleUpperCase())


// let or const ka use kar ka variable script ma store hota han
// var ka use kar ka variable windonw(global) ma store hota han


const userId = 789456
const useremail = 'zeeagmail.com' 
let userLoggedIn = true
const user_Name = 'abubakr'
// console.table([userId,userEmail,userLoggedIn,user_Name])


// high order function and call back function 
/* function a (b){
    console.dir(b)
    b()
}
function sayHI(){
    console.log('hiiiiiii')
}

 a(sayHI) */


// console.dir() anyobject output show object

setTimeout(function(){
    // console.log('my name is zeeshan')
    
},1000)


// set timeout show id in the browser



// console.table([f,d,e])
var e = 100
if(true){
    const f = 45
    let d = 78
    var e = 99
    // console.log('INNEr : ',  f)
}

// console.log(e)


const sayName = ()=> users = 'zeeshan'
// console.log(sayName())

const addnum  = (num1,num2)=>{
    return num1+num2
}
// console.log(addnum(55,5)
const showName = (user)=>{
    // console.log(user)
}
showName('sam') // arrow function does not access call method because arrow function behave as a child function 

const run = 100
if (run === 100) {
    let startGame = 'allow to game access'
    // console.log(`user is ${startGame}`)
}

const score = 977
if (score <= 977) {
    // console.log('this score is very good')
}


const value = 1000
if (value != 1100) {
    // console.log('value is greater than eleven hundred')
} else {
    // console.log('value is smaller than 1100')
}


// ASYNCHRONOUS EXAMPLE

setTimeout(function(){
    // console.log('hello world ')
} , 2000)


// SYNCHORONUS EXAMPLE

for(let i = 1 ; i <=4 ; i++){
    // console.log('hello user ')
}

// heap ma reference (mean original value change)


let googleId = {
    id: 'zeegmail.com'
}
let googleIdtwo = googleId
googleIdtwo.id = 'samgmail.com'
// console.log(googleId)
// console.log(googleIdtwo)

// object create or assign value
let createObject = new Object()
// console.log(createObject)
createObject.id = 7895
// console.log(createObject)


const Score = 526
// console.log(typeof Score)

const newScore = Number(Score)
// console.log( typeof newScore)


const date = new Date(2024,2,13)
// console.log(date)
// console.log(date.toLocaleDateString())


// FUNCTION

function sayHello(){
    // console.log('h')
    // console.log('e')
    // console.log('l')
    // console.log('l')
    // console.log('o')
}
sayHello()

function multiplyNumber(num1,num2){
    return num1*num2
}
// console.log(multiplyNumber(2,5))

function divideNum(num1,num2){
    let divideresult = num1/num2
    return divideresult
}
// console.log(divideNum(10,2))

const userBioData = {
    username:'shan',
    userid:456789
}

function reusltBioData(userBioData){
    // console.log(`usrname is ${userBioData.username} and id is ${userBioData.id}`)
}
reusltBioData(userBioData)

const newArray = [200,300,400,500]
function Arrayresult(newArray){
    return newArray
}
// console.log(Arrayresult(newArray[2]))


for(let i = 0; i <= 10; i++){
    if (i === 6) {
        // console.log('value is detected')
        break
    }
    // console.log(i)
}

// every function not method but  method is function 

const p = {
    E: 2.1782,
    add:function(a,b){
        return a+b
    }
}
// console.log(p.add(5,6))


// function decleration  (function add(){} )

// function expresssion (const name= function(){})

const r = (username)=> 'sam'
// console.log(r())


// MATHS
const serverId = 456789
// console.log(serverId.toString())
// console.log(serverId.toFixed(3))
// console.log(serverId.toPrecision(4))
// console.log(serverId.toLocaleString())
// console.log(serverId.toExponential()) // return a string to representing this number

// console.log(Math.round(Math.random()*10+1))


// object

const priceandConstructor = {
    coursePrice:12000,
    courseInstrucrtor :'chai our code'
}

const  {courseInstrucrtor:instructor} = priceandConstructor
// console.log(priceandConstructor.courseInstrucrtor)
// console.log(instructor)

const objct1 = {1:'a' , 2 :'b'}
const objct2 = {3:'c' ,  4:'d'}
const objct3 = Object.assign( objct1,objct2)
// console.log(objct3)

const fruit = ['apple','banana','orange','pineapple','mango','fruiter','watermalon','melon']
for (const iterator of fruit) {
    // console.log(iterator)
}

const map = new Map()
map.set('a',1)
map.set('b',2)
map.set('c',3)

for (const [keys,value] of map) {
    // console.log(`${keys} and ${value}`)
}

const animal = ['lion','tiger','elephant','duck','giraffe','sparrow']
for (const key in animal) {
    // console.log(animal[key])
}


const inObject = {
    username:'zeeshan',
    userId:"45651"
}

for (const key in inObject) {
    // console.log(`${key} is ${inObject[key]}`)
    // console.log(`${inObject.username} and id is ${inObject.userId}`)
    break
}

// for each
// each element in array for call every single value 

const numvalue = [1,2,3,4,5]
numvalue.forEach(function(item){
    // console.log(item)
    // return item does not return value for each 
})

// map automatically return value

const newMap = [1,2,3,4]

const newMaptwo = newMap.map((num) =>num*5)
// console.log(newMaptwo)

// filter
const Months =  ['january','february','march','april','may']
const resultMonths = Months.filter((Months)=>{
    // console.log(Months)
    return Months.length <4
})
// console.log(resultMonths)

const numbers = [1,2,3,4,5,6,7,8,9,10]
const secNumbers = numbers.filter((numbers)=>{
    // console.log(numbers)
    return numbers > 5
})
// console.log(secNumbers)

const studentData = [
    {
        studentName:'bila',
        studentAge:15
    },
    {
        studentName:'sam',
        studentAge:20
    },
    {
        studentName:'zee',
        studentAge:18
    },
    {
        studentName:'shan',
        studentAge:19
    },
    {
        studentName:'bakr',
        studentAge:22
    },
]
const studentage = studentData.filter((studentData)=>{
    // console.log(studentData)
    return studentData.studentAge >=18
}).map((studentData)=>{
    // console.log(studentData)
    return studentData.studentName
})
// console.log(studentage)

// reduce

const data = [
    {
        course:'js',
        price:5000
    },
    {
        course:'html',
        price:2999
    },
    {
        course:'css',
        price:3999
    },
    {
        course:'python',
        price:6000
    },
]

const seeData = data.reduce((acc,curval)=>{
    // console.log(`acc is ${acc} and curval is ${curval.price}`)
    return acc+curval.price
},0)
// console.log(seeData)

const val5 = [1,2,3]
const val2 = val5.reduce( function(acc,currval){
    // console.log(`acc: ${acc} and currval: ${currval}`)
    return acc +currval 
}, 0)
// console.log(val2) // currval mean current array value or accmulutar first value start karta ha user value based pa
// accmulutar ki first value first array value hoti ha

// some method of array function 
/* const evenNum = [2,4,6,8,10] // one value is true answer is true 
console.log(evenNum.some((num)=>{
         console.log(num)
         return num >= 4
}))

every array method (one value is false the answer is false) */


 