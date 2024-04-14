// const object = Object.getOwnPropertyDescriptor(Math , 'PI')
// console.log(object)

const newObject = {
    userName : 'zeeshan',
    id : 12345,
    get :function(){
        console.log('hello')
    }
}
 console.log(newObject.get())
 const obj = Object.getOwnPropertyDescriptor(newObject , "userName")



// const obj2 = Object.defineProperty(newObject, "userName" , {
//     writable: false,
//     enumerable:true
// })
// console.log(obj2)
 console.log(obj)

for (const [key , value] of Object.entries(newObject)) {

    if (typeof value !== 'function') {
        console.log(`${key} , ${value}`)
    }
    // console.log(`${key} , ${value}`)
}
