 // this is used to make fuction context
function chai(){
    let username = "sam"
    console.log(this.username);
}
chai()

const chaiOur = () => {
    console.log(this)
}
chaiOur()

const addTwo = (num1,num2) => {
  return num1 + num2
}
console.log(addTwo(5, 9))
  

const addone =  (num1,num2) => num1+num2
console.log(addone(5,7))

const addonenum =  (num1,num2) => ({user:"sam"})
console.log(addonenum())



//+++++++++++++IFKE++++++++++++++++++++//
function one(){
    console.log('db is connected')
}
one();
(function one(){
    console.log('db is connected')
}) ()


const myArr = (num1,num2)=> (num1+num2)
console.log(myArr(55,5))


function two(){
    console.log('two function execute')
}
two();
(function two(){
    console.log('again two function execute');
}) ()

function three (){
    console.log('three function is executed')
}
three();
(function three(){
    console.log('three function is again executed')
}) ()

function myName(){
    let username = 'zeeshan'
    console.log(this.username)
}


 const namehere  =() => user = 'sam'
console.log(namehere())

const numberdisplay = (num1,num2) => {
    return num1+num2
}
console.log(numberdisplay(8,8))

const numbers = (num1,num2) => num1+num2
console.log(numbers(9,9))