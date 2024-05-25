const array = (number1, number2) => {
  return number1 + number2;
};
console.log(array(5, 5));
const array2 = (number1, number2) => number1 + number2;
console.log(array2(20, 5));
const array3 = [1, 2, 3, 4, 5, 6];
// push property is array
array3.push(9);
console.log(array3);
// pop property is array
array3.pop();
console.log(array3);
// join property is array
const array4 = array3.join();
console.log(array4);
// concat propety is array
const marverl_heores = ["spiderman", "flashman", "batman"];
const dc_heores = ["hulk", "thor", "ironman"];
console.log(marverl_heores.concat(dc_heores));
// spread property is array
const all_heores = [...marverl_heores, ...dc_heores];
console.log(all_heores);
// IFKE
function one() {
  console.log("one is executed");
}
one(); // semicolon is must
(function one() {
  console.log("one is again executed");
})();
//
function myName(username = "zeeshan") {
  if (!username) {
    console.log("username not exist");
    // return;
  }
  return `${username} is loged In`;
}
console.log(myName());
//
function one() {
  const user = "sam";
  function two() {
    const channel = "youtube";
    console.log(channel);
    console.log(user);
  }
  two();
}
one();
//
if (true) {
  const user = "zee";
  if (user === "zee") {
    const channelName = "shan youtubers";
    console.log(channelName);
  }
  console.log(user);
}
// Example of closure
// lexical scope
function outer() {
  let user = "shan";
  function inner() {
    console.log(user);
  }
  return inner();
}
const display = outer();
console.log(display);
// slice or splice (array properties)
const array1 = [1, 2, 3, 4, 5, 6];
console.log(array1);
console.log("A", array1);
const slice = array1.slice(1, 4);
console.log(slice);
console.log("B", array1);
const splice = array1.splice(1, 4);
console.log(splice);
console.log("C", array1);
// String
const name = "zeeshan";
console.log(typeof name);
// number
const number = 55;
console.log(typeof number);
// comparison
console.log(2 < 1);
console.log(null <= undefined); // false
console.log(null <= 0); // true
console.log(typeof null); // object
console.log(typeof undefined); // undefined
// if else used
const power = 1000;
if (power > 1000) {
  let powertwo = "allow to run";
  console.log(`user ${powertwo} to running`);
} else {
  let powerThree = "not allow to run";
  console.log(`user ${powerThree} this time`);
}
// another example
const rupees = 500;
if (rupees < 499) {
  console.log("less than for FiveHundred");
} else if (rupees < 400) {
  console.log("less than for five hundred");
} else {
  console.log("greater than for five hundred");
}
// (&&) when both are true the output is true
let debitCard = true;
let debitCardbalance = false;
if (debitCard && debitCardbalance) {
  console.log("user allow to shopping");
} else {
  console.log("user not allow to shopping");
}
// (||) when one of the true the output is true
let googleAccount = true;
let faceBookAccount = false;
if (googleAccount || faceBookAccount) {
  console.log("user allow to online shopping");
} else {
  console.log("user not allow to online shopping");
}
// data type divided two categries
// permitive or non-permitive
// there are seven permitive type such as: string , number , boolean , null , undefined , symbol , bigInt
// there are three non-permitive type such as: array , function , object
// example of bigInt
let bigNumber = 12345678912n;
console.log(bigNumber);
// stack or heap
// stack permitive type
// heap non-permitive type
// stack
let channelname = "shan";
console.log(channelname);
let data = channelname;
data = "chai";
console.log(data);
console.log(channelname);
// heap
let email = {
  Id: "zee@gmail.com",
};
let emailTwo = email;
emailTwo.Id = "samGmail.com"; // object
console.log(email);
console.log(emailTwo);
//
let RandomNum = 55;
console.log(RandomNum); // number ma output yellow color ma ati ha
const anotherNum = String(RandomNum);
console.log(anotherNum);
//
let userage = "18";
console.log(userage);
const user = Number(userage);
console.log(user);
/* 
null = stand alone value
boolean = true/false
undefined = undefined
number = 2^5
string = ""
*/
