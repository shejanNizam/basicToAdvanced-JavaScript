const user = {
  username: "nizam",
  loginCount: 32,
  signedIn: true,

  getUserDetails: function () {
    // console.log(`Got user details with ${this.username}!!`);
    // console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

// class User {
//   constructor(username, email, password, isLoggedIn) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//     this.isLoggedIn = isLoggedIn;

//     this.getUserName = function () {
//       console.log(`Welcome ${this.username}`);
//     };
//     return this;
//   }
// }

function User(username, email, password, isLoggedIn) {
  this.username = username;
  this.email = email;
  this.password = password;
  this.isLoggedIn = isLoggedIn;

  this.getUserName = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}

const user1 = new User("nizam", "nizam@gmail.com", "password123", true);
const user2 = new User("john", "john@gmail.com", "password456", false);

console.log(user1);
console.log(user2);
