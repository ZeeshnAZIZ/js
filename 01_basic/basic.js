function loginone(username = "zee") {
  return `${username} is loged in `;
}
console.log(loginone());
function login(username = "sam") {
  if (!username) {
    console.log("please enter a user name");
    return;
  }
  return `${username}is loged in `;
}
console.log(login());
// console.log(login("zeeshan"))

const myArr = [1, 2, 3, 4, 5, 6];
console.log(myArr);

console.log("A", myArr);
const newArr = myArr.slice(1, 4);
console.log(newArr);
console.log("b", myArr);
const myn2 = myArr.splice(1, 4);
console.log(myn2);
console.log("C", myArr);

function loginThree(username = "sam") {
  if (!username) {
    console.log("please enter a username");
  }
  return `${username} is loged In`;
}
console.log(loginThree());

function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}
addTwoNumber(2, 5);

// data type can be divided into two type
// permitive or nonpermitive
// permitive data type can be divided seven type  null, string,undefined,boolean,bigint

let data = "youtube";
//console.log(data)
let chai = "data";
console.log(chai);
console.log(data);

let date = new Date();
console.log(date);
console.log(date.toDateString());

const myFunction = function addNumber(number1, number2) {
  return number1 + number2;
};
console.log(myFunction(5, 9));

/* const myArr = [1,2,3,4,5,6]
console.log(myArr)
// console.log(myArr.json)
console.log("A", myArr)
const myn2 = myArr.slice(1,5)
console.log(myn2)
console.log("B", myArr)
const myn3 = myArr.splice(1,5)
console.log(myn3)
console.log("C" , myArr); */

function sayname(username = "zee") {
  if (!username) {
    console.log("username is not exist");
  }
  return `${username} just looged in`;
}

console.log(sayname());
