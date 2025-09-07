function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptedPassword = function () {
  return `${this.password}123`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const user1 = new User("john_doe", "john@example.com", "password");
console.log(user1.encryptedPassword());
console.log(user1.changeUsername());

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptedPassword() {
    return `${this.password}123`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const user2 = new User("john_doe", "john@example.com", "password");

console.log(user2.encryptedPassword());
console.log(user2.changeUsername());
