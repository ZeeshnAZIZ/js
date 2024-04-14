// for each does not return value
 const conding = ["js","py", "c++"]

 const value = conding.forEach((item) => {
  console.log(item);
    //return item
 })

const myNums = [1,2,3,4,5,6,7,8,9,10]
 const newNum = myNums.filter( (num) => num > 4)
console.log(newNum)

// filter return the value
// when use scope to return keyword use
 const fruit = ['apple', 'strawbery', 'mango', 'grapes']
  const tip = fruit.filter(function(healthyTips){
  console.log(healthyTips)
  return healthyTips.length > 5
 })
 console.log(tip)


 
 const user = [1, 2, 34567, 4, 56789, 6, 78901, 8, 9, 10];
const newUser = user.filter(function(userOne){
  const strUser = userOne.toString();
  return userOne < 5;
});
console.log(newUser);


// const marvelHeore = ['batman' , 'superman' , 'ironman' , 'hulk', 'flashman']

// const heore = marvelHeore.filter(function(marvelHeore){
//   return marvelHeore <= 6
// })
// // console.log(marvelHeore)
// console.log(heore);


// const usertwo = []
// user.forEach((userOne) =>{
//   if (userOne > 4 ) {
//     usertwo.push(userOne)
    
//   }
// })
const usertwo = []

const arr = [1,2,3,4,5,6,7,8,9,10]
arr.forEach((arr)=> {
  if (arr > 5) {
    usertwo.push(arr)
    console.log(arr)
      
  }
  return arr
})

const heore = ['superman' , 'batman']
const newHeore = heore.filter((hr)=> {
  return hr.length < 7
})
console.log(newHeore);