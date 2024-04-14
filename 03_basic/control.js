 //!= (is not equal)
 //if
const userLoggedIn = true
if (2!=3) {
    console.log("executed")
}
//const temperature = 35
//if (temperature < 40) {
  //  console.log("less than forty")
//}else{
 //   console.log("greater than fifty")
//}

//const score = 200
//if (score < 150) {
//    let power = "running"
//    
//    console.log('use power: ${power}');
//}


//+++++++ implicit+++++++
const balance = 1000
//if(balance > 500) console.log("passed") 
// end of implicit

if (balance < 500) {
    console.log("less than for 500")
}else if (balance < 900) {
    console.log("less than for 900")
}else {
    console.log("less than for 1200")
}


/* const userLooged = true
const debitCard = true
const userLoogedgoogle = false
const userLoogedemail = true
if (userLooged && debitCard) {
    console.log("allow to shopping")
}

if (userLoogedgoogle || userLoogedemail) {
   console.log("enter to course website");    
}
 */
// The symbol used to represent greater than is “>” and less than is “<”
const userval = 265
if (userval > 300) {
    console.log('the user val is correct')
    
} else {
    console.log('the user val is not correct')
}

const userLogged = true
const userId = false
if (userLogged && userId) {
    console.log('allow to access')
} else {
    console.log(' not allow to access')
}

const userLoogedemail = true
const userLoogedgoogle = false
if (userLoogedemail|| userLoogedgoogle) {
    console.log('user is play game')
    
}


const powerOne = 200
if (powerOne <= 200) {
    let powerTwo = 'allow to run'
    console.log(`Use power is ${powerTwo}`)
}