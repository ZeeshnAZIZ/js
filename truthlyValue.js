const userEmail = "man@gmail.com"
if (userEmail) {
    console.log("Already exist")
}

// falsly value
// false, "", 0, -0, bigint, null, undefined, nan,
// truthly value
// "0",'false', [], {}, fuction(){} 
const userEmailarray = []
if (userEmailarray.length === 0) {
    console.log("array has exist")
}

// const object = {}
// if (Object.keys(object).length === 0) {
//    console.log("object has been declared") 
// }

// nullish coalesing operator(??)
let val1;
val1 = 5 ?? 10


console.log(val1)
 let val2;
 val2 = 8??12
 console.log(val2)
// terniary operator
// condition ? true: false

const object = {}
if (Object.keys(object).length === 0) {
    console.log('object has been declerad')
}

let boolean = true

let result = (boolean === false )? 'hello user ': 'not user available'
console.log(result)


let x = 10
let finalResult;
if (x > 9) {
    console.log('x greater  than is 10')
    
}else {
    console.log('x smaller  than is 10')
}
// console.log(finalResult)

let a = 15
function resultEnd (){
    if (a < 15) {
        console.log('a is smaller then is 15');
    }else {
        console.log('a is greater then is 15')
    }
}
console.log(resultEnd())

const email = 'a565@gmail.com'
if (email) {
    console.log('user has already taken');
}


const operator = true
const answer = (operator!= false)  ? 'true': 'false'
console.log(answer);

const myarr = [1,2,3,4,5,[6,7,8,9],1,2,3,4,10,[11,11,12,13]]
const arr = myarr.flat(Infinity)
console.log(arr)


let d = 10
if (d < 10) {
    console.log('the value is less then 10')
}else {
    console.log('the value is geater than 10')
}


/* const obj1 = {'a':  1}
const obj2 = {'b' : 2}
const obj3 = Object.assign = ({} , obj1 , obj2)
console.log(obj3) */
const obj1 = {1: "a", 2: "d"};
const obj2 = {3: "s", 4: "r"}
const obj3 = Object.assign = ({}, obj1 , obj2)
console.log(obj3)