// BY DEFAULT CONTEXT SET OF PROTOTYPE IS {} US METHOD KA THIS......
// BEHARE OF JS IS PROTOTYPLE......
function sayMyname(){
    console.log("z")
    console.log("e")
    console.log("e")
}
sayMyname()

function addTwonumber(number1,number2){
   console.log (number1+number2)
}
addTwonumber(3,8)
addTwonumber(3,"8")
addTwonumber(3 ,null)
 
const result = addTwonumber(3,8)
//console.log("result:",result)
function addTwonumber(number1,number2){
    let result = number1+number2
    return result
 }

 console.log("result: ",result)

 function loginUsermessage(username = "sam"){
    if(username === undefined){
    console.log("please enter a username")
    return
    }
    return `${username} just logged in`
 }
 //console.log(loginUsermessage("zee"))
//  console.log(loginUsermessage("zeeshan"))


  function addNumber(number1,number2){
   let num = number1 + number2
   return num
  }
  const num = addNumber(5,8)
  console.log("num:", num)
  

  function myName(){
   console.log('z')
  }
  myName()
   function addNum( a,b){
      return a + b
   }
console.log(addNum(5,2))

function nameAndScore(userName , score ){
   this. userName = userName,
   this.score = score
   
   nameAndScore.prototype.printMe = function(){
      console.log(`score is ${this.score}`)
   }
}



const youtube = new nameAndScore("sam ", 50)
const chai = new nameAndScore("ahemd", 55)
 
youtube.printMe()
chai.printMe()


function idValue (number1,number2){
   let idAssign = number1+number2
   return idAssign
}
let idAssign = idValue(5,8)
console.log(`idAssign is ${idAssign}`)


function addTwoNum(number1,number2){
   return number1+number2
}

console.log(addTwoNum(5,100))


function numberadd(num1,num2){
   console.log(num1+num2)
}
numberadd(100,200)


function name(userName = 'shan'){
   if (!userName ) {
      console.log('username is exist')
      return
   }
      return `${userName} is logged in`

}
console.log(name("zeeshan"))


function idAndname(userName, id){
   this.userName = userName
   this.id = id
}

idAndname.prototype.printMe = function(){
   console.log(`id is ${this.id}`)
}

const chaiOne = new idAndname ('zee' , 456)
const chaiTwo = new idAndname('sam' , 123)
chaiOne.printMe()
chaiTwo.printMe()