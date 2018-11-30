var index = require("./index.js");

function sayHello() {
  var value = add(2, 3);
  console.log("HELLO EVERYBODY!");
  return value;
}

function add(a, b) {
  return a + b;
}

function sayHi(name) {
  console.log("Hi " + name + "! How are you?");
}

module.exports = {
  sayHello: sayHello,
  sayHi: sayHi
};
