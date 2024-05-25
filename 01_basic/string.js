const name = "hitesh";
const repoCount = 50;

console.log(name + repoCount + "Value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hitest-hd");
console.log(gameName);
console.log(gameName.__proto__);
//{}
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStrings = "   hitesh    ";
console.log(newStrings);
console.log(newStrings.trim());

const url = "https://hitest.com/hitest30";

console.log(url.replace("30", "-"));
console.log(gameName.split("-"));

// const name = "zee-shan";
// const value = 50;
// console.log(`hello my name is ${name} and my vlaue is ${value}`);
// console.log(name.split("-"));
