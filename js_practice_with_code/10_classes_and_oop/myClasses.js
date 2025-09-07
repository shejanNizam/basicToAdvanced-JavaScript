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

const user1 = new User("john_doe", "john@example.com", "password");

console.log(user1.encryptedPassword());
console.log(user1.changeUsername());
