function calculatedcartprice(...num1){
    return num1
}
console.log(calculatedcartprice(2));
console.log(calculatedcartprice(200, 400, 800));
const user = {
    username:"zeeshan",
    price:2000
}

function handleobject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)
handleobject({
    username:"sam",
    price:133
})
const myArray = [2000, 300, 500]
function returnSecondvalue(getarray){
    return getarray[1]
}
console.log(returnSecondvalue(myArray))

// Using this inside an object method
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  console.log(person.fullName()); // Output: John Doe


  const name = {
    username:'zee',
    subject: 'CS'

  }
   function objectHandled(objectTwo){
    console.log(`USERNAME IS ${objectTwo.username} AND SUBJECT IS ${objectTwo.subject}`)
   }
   objectHandled(name)

   const personTwo = {
    first : 'ahmed',
    last : 'aziz',
    full : function(){
        return this.first + ' ' + this.last
    }
   }
   console.log(personTwo.full())

const myarr = [100,200,300]   
function returnarray(arr){
    return arr[1]
}
console.log(returnarray(myarr))


const arr = [1,2,3,4,5]
function returnarr(arr){
    return arr
}
 console.log(returnarr(arr[2]))


const userone = {
    firstName: 'muhammad',
    lastName:'zeeshan'
}
function userobject(userone){
    console.log(`username is ${userone.firstName} and last name is ${userone.lastName}`)
}

// console.log(userobject(userone))
userobject(userone)

const userFour = {
    username:'sam',
    id: 789
}

function createUser(userFour){
    console.log(`username is ${userFour.username} and userId is ${userFour.id}`)
}
createUser(userFour)