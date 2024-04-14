// object can be declared two way 1. literal 2. constructor 
// singleton 
// key or value can be define in object
// object literals
const mySym = Symbol("key1")


const jsUser = {
    name:"zeeshan",
    age:18,
    location:"cantt",
    [mySym]:"mykey1"
}

// console.log(jsUser[mySym]);
console.log(jsUser)
console.log(jsUser.age)
console.log(jsUser["location"])


// console.log(jsUser.mySym);
// object.freeze 

jsUser.greeting = function(){
    console.log("hello JsUser")
}
console.log(jsUser.greeting)
console.log(jsUser.greeting())
jsUser.greeting = function(){
    console.log(`hello JsUser.${this.name}`)
}
console.log(jsUser.greeting())

jsUser.greeting = function(){
    console.log('hello')
}
console.log(jsUser.greeting())


const sym = Symbol('key2')
// sym:'mykey2'
console.log(sym)