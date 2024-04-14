function arg() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}
// console.log(arg(1,2,3,4,5,6,7,8,9,10))

// function rest(...nums){
//     return nums.reduce((acc,curr)=>acc+curr)
// }

// function rest (...nums){
//     console.log(nums)
// }
// console.log(rest(1,2,3))

// console.log(Array.from('zeeshan')) // new array create

const userInfo = {
  id : '123456',
  email: 'some@gmail.com'
}
const {id : userId} = userInfo
// console.log(id)
console.log(userId)

function argnument(){
  for(let i = 0 ; i <arguments.length ; i ++)
  console.log(arguments)
}
argnument(1,2,3,4,5)
