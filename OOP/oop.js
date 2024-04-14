const user = {
  userName: "Muhammad zeeshan",
  userPassword: 123456,
  loginCount: true,
  getUserDetail: function () {
    console.log(this.userName);
    console.log(this);
  },
};
console.log(user);
console.log(user.getUserDetail());

function User(userName, loginCount, id) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.id = id;
}

const Result = new User("sam", true, 12345);
console.log(Result);
/* 
setp 1 : new object create
step 2 :constructor function call hota ha new keyword ka mutabik(argument packed or shown)  this.userName = userName;
  this.loginCount = loginCount;
  this.id = id; ya is tara ka keyword pass on ho jata han
step 3 :this keyword ma argument add hojata han 
step 4 : function ma show ho jata han
*/
