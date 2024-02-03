// array are written in []
// collection of multiple item in single variable 
// array are object
// array element can not accessed using abritary string 
// array are not associative
// array copy operation 1. shallow coppies 2. deep copies
// shallow copies of an object whose properties share the same reference 
// deep copies of an object is a copy whose do not share the same reference

const myArr = [0,1,2,3,4,5]
const myHeores = ["shaz"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1])
// array method++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
myArr.push(6)
console.log(myArr)
myArr.pop()
console.log(myArr);
console.log(myArr);
 console.log(myArr.includes(9))
  const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice or splice
console.log("A " , myArr)
const myn2 =  myArr.slice(1,3)
console.log(myn2)
console.log("B ", myArr)
const myn3 = myArr.splice (1,3)
console.log(myn3)
console.log("C ",myArr)
