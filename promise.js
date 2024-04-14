// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// new name meaning is new instance create
const promiseOne = new Promise(function(resolve , reject){
    setTimeout( function(){
        console.log("promise create")
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise (function(resolve , reject){
    setTimeout(function(){
        console.log('promise two create')
        resolve()
    } , 1000)
}).then(function(){
    console.log('promise two consumed')
})


const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({ username: "zee", password: '123' });
        }else {
            reject('ERR0R: something went wrong ')
        }
    } , 1000)
})
promiseTwo.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log('neither resolved nor reject'))

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    let error = true
        if (!error) {
            resolve({ username: "zeeshan", password: '123' });
        }else {
            reject('ERR0R: something went wrong ')
        }
    } , 1000)
})
  
async function promises(){
   try {
    const wait =  await promiseThree
   console.log(wait)
   } catch (error) {
     console.log('something wrong')
   }
}
promises()


async function getUrl (){
 const use = await fetch('https://api.github.com/users/zeeshnAZIZ')
 try {
    console.log(use)
    const userdata =  await use.json()
    console.log(userdata)
 } catch (error) {
    console.log('some error ')
 }    
}
getUrl()

fetch('https://jsonplaceholder.typicode.com/users')
.then((user )=> {
    return user .json()
}).then((data) =>{
    console.log(data)
}).catch(function(error){
    console.log('some error')
})


// const promiseFour = new Promise (function(resolve , reject){
//     setTimeout(function(){
//         resolve({user:"sam",password:"123456"})
//     })
// })
// promiseFour.then(function(getUser){
//  console.log(getUser)
//  return getUser.user
// }).then(function(user){
//     console.log(user)
// })
  // fetch api provide interface to solve problem (all over the internet ). it is a most powerful and flexible 


//   const promiseFive = new Promise(function(resolve , reject){
//     setTimeout(function(){
//             resolve({user: 'zee', password: 1234})
//     },1000)
//   })
// promiseFive.then(function(getUser){
//     console.log(getUser)
//     return getUser.user
// }).then(function(user){
//     console.log(user);
// })


// const promiseSix = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (error === true) {
//             resolve('no error issued')
//         } else{
//             reject ('SOMETHING WENT WRONG')
//         }
//     })
// })

// promiseSix.then(function(get){
//     console.log(get)
// }).catch(function(error){
//         console.log('some error')
// }).finally(function(){
//     console.log('neither resolve nor reject')
// })