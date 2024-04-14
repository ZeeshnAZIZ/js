 /*
 here's what happens behind the scenes when the new keyword is used:

 A new object is created: the new keyword inititates the creation  of a new js object or create function reference

 A prototype is linked: the newly created object get linked to the prototype of the constructor function . this means that if has access to properties and method defined to the constructor's prototype.

 The constructor is linked: the constructor function is called with the specified arguments and this is bound the to the newly created object . If no explicit return value is specified from the constructor , js assumes this, the newly created object, to be  the intended return value.

 The new object is returned : after the constructor function has been called , if it doesn't return a non-premitive value (object, array, funcgtion, etc.), the newly created object

 JAVASCRIPT USE CONSTRUCTOR FUNCTION NEW KEYWORD
 */


 let userName = "zeeshan"
 String.prototype.trueLength = function(){
    console.log(this)
    console.log(`true length is:${userName.trim().length}`);
   
 }
 userName.trueLength()
 "sam".trueLength()

 let arr = ['spiderman', 'batman']
 const heore = {
 spiderman: 'sling',
 batman: 'car',
 getBatPower :function(){
  console.log('batman is favourite movie for all ')
 }
 }

Object.prototype.bat = function(){
    console.log(`bat full form is: batman`)
}

Array.prototype.marvelHeore = function(){
    console.log('thor is favourite of all')
}
arr.bat()
heore.bat()
arr.marvelHeore()
//heore.marvelHeore()

// EXAMPLE SECOND
let myArr = ['hulk', 'ironMan']
const marvel = {
    hulk: 'green',
    ironMan: 'red',
    getHulkPower: function(){
            console.log(`hulk body color is ${this.hulk}`)
    }

    
}
marvel.getHulkPower()

Object.prototype.singleObject = function(){
    console.log(`hulk color is green  and iron man color is red`)
    console.log(this)
}
Array.prototype.singleArray = function(){
    console.log('Hulk or Ironman is marvel heoro')
}

marvel.singleObject()
myArr.singleObject()
//marvel.singleArray()
myArr.singleArray()


const name = 'zeeshan'
String.prototype.singleString = function(){
    console.log(`username is ${name}`)
    console.log(this)
}

name.singleString()
'zee'.singleString()
