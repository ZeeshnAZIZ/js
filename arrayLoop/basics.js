 // FOR OF LOOP 
// ITERATEBLE OF OBJECT

const newNum = ['js','c++']
for (const nums of newNum) {
    console.log(nums)
    
}

const andObject = {
    userName: "zeeshan",
    userEmail: "z12@gmail.com",
    userId: 12354562
}
for (const key in andObject) {
    console.log(`${andObject[key]} is ${key}`)
   
}

const take = [1,2,3,4,5,6]
take.forEach( function(index,array){
    console.log(index,array)
})

const arr = ['python', 'javascript']
for (const iterator of arr) {
    console.log(iterator)
}

 
// const userDetails = {
//     userName : 'sam',
//     userId : 123132,
//     userLoogedIn : true
// }

// for (const key in userDetails) {
//     console.log(`${userDetails[key]} is ${key}`);
// }
const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}

const iterableObject = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
};

for (const element of iterableObject) {
    console.log(element);
}

// Iterating over an array with index;
const myArr = [1,2,3,4,5]
myArr.forEach(function(index, array){
    console.log(`Index is ${index} and array is ${array}`)
})

// const loging = {
//     user:'zee',
//     userId:5678
// }

// for (const key of loging) {
//     console.log(`${loging[key]} and ${key}`)
// }

const arr5 = ['js ', ' c++']
// for (const iterator of arr5) {
//     console.log(iterator)
    
// }

arr5.forEach(function(index , array){
    console.log(`${index} `)
})