class user {
  constructor(userName, email) {
    this.userName = userName;
    this.email = email;
  }
  get userName() {
    return this._userName.toUpperCase();
  }
  set userName(value) {
    this._userName = value;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
}

const chai = new user("chai", "chai@gmail.com");
console.log(chai.userName);
console.log(chai.email);
