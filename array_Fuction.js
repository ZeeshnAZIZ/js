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




const newLocal = '{this.unique}. welcome to website';
//+++++++++++++++++++++++//


const score = {
    unique: "sam",
     welcomeMessage:function(){
        console.log(newLocal)
            
     }
}
score()