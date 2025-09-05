function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Username: ${this.username}, Score: ${this.score}`);
};

const user = new createUser("Alice", 10);

user.printMe();
