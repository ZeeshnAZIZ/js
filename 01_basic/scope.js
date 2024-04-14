

// closure
console.log(addOnenumber(5))
function addOnenumber(value){
    return value + 1
}
 

 const addTwonumber = function(value){
    return value + 2
 }
 console.log(addTwonumber(8))



function one(){
    const username = "zeeshan"
    function two(){
        const website = " youtube channel name is chai our code"
       console.log(username)
       console.log(website)
    }
    two()
}
one()





var d = 300
let f = 100
if (true) {
    const a = 10
    let b = 20
    var c = 30
    console.log("INNER: ", a)
}
//console.log(a)
//console.log(b)
console.log(c)
//console.log(b)

if (true) {
    const userName = 'sam'
    if (userName === 'sam') {
        const website = 'youtube'
        console.log(userName + ' ' + website)
        console.log(userName)
        console.log(website)
    }
     console.log(userName)
}

// EXAMPLE OF CLOSUE 
// RETURN INNER FUNCTION FROM THE  LEXICAL OUTER FUNCTION  OR EXECUTED 
function userName(){
    let userName = 'zeeshan'
    function inner(){
        console.log(userName)
    }
    return inner()
}
const userNameTwo = userName()
console.log(userNameTwo)


// function name(){
//     let userName = 'zeeshan'
//     function nameTwo(){
//         let userId = 124245
//         console.log(userId)
        
//     }
//     nameTwo()
    
// }
// name()

// function name(username = 'sam'){
//     if (userName === 'sam') {
//         const userwebsite = 'youtube'
//         console.log(userwebsite)
//         console.log(userName)
//     }
// }
// name()