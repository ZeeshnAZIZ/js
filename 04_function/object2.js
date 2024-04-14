// const tinderUser = new Object()

// console.log(tinderUser)

// tinderUser.id = "12345"
// tinderUser.name = "zeeshan"
// tinderUser.isloogedInd = false
// console.log(tinderUser)


/* const regularUser ={
    email: "006gmail.com",
    fullName:{
        userFullname:{
            firstName:"zeehan",
            lastname: "aziz"
        }
    }
} 
console.log(regularUser.fullName) */
// ? protection for value
// const obj1 = {1: "a", 2: "d"};
// const obj2 = {3: "s", 4: "r"}
// const obj3 = Object.assign = ({}, obj1 , obj2)
// console.log(obj3)
// const users = [
//     {
//         id:  "45678",
//         Email:  "009gmail.com"
//     },
//     {
//         id:    "45678",
//         Email:  "009gmail.com"
//     }
// ]
// console.log(users[1].Email)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.entries(tinderUser))

//++++++++++++++++++++ destructure++++++++++++++//

// const course = {
//     courseName: "js in enlgish",
//     courseInstructor: "zeeshan"
// }



// const {courseInstructor: instructuor} =  course
// console.log(courseInstructor);
// console.log(instructuor);




// const name ={
//     userName : {
//         userFullName:{
//             firstName:'muhammad',
//             lastName:'zeeshan'
//         }
//     }
// }
// console.log(name.userName)


const user = {
    courseName: 'js in hindi',
    courseInstructor:'zeeshan'
}
console.log(user.courseInstructor)

const {courseInstructor : instructor} = user
// console.log(courseInstructor)
console.log(instructor)


const userOne = new Object()
console.log(userOne)
userOne.id = 123456
userOne.name = 'zeeshan'
console.log(userOne)
console.log(Object.keys(userOne))