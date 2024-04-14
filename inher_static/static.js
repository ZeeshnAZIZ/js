class user {
  constructor(userName) {
    this.userName = userName;
  }
  logMe() {
    console.log(`userName is${this.userName}`);
  }
  static createId() {
    return 1234;
  }
}

const chai = new user("zee");
chai.logMe();
//console.log(chai.createId())

class Teacher extends user {
  constructor(userName, email) {
    super(userName);
    this.emal = email;
  }
}
const tea = new Teacher("sam", "sam@gmail.com");
tea.logMe();
console.log(tea.createId());
