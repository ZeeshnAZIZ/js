class User {
    constructor(userName){
        this.userName = userName;
    }

    changeUser(){
        console.log(`username is ${this.userName}`);
    }
}

class Teacher extends User {
    constructor(userName, email , password){
        super(userName);
        this.email = email;
        this.password = password;
    }
    
    teacherName (){
        console.log(`userName is ${this.userName}`);
    }
}

const chai = new Teacher('chai', "chai@gmail.com", 5555);
const masallaChai = new User('masallachai');

chai.teacherName()
chai.changeUser()
masallaChai.changeUser()

console.log(chai instanceof User)