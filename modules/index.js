var hello = require("./hello.js");

var nameArg = process.argv[2];

hello.sayHello();
hello.sayHi(nameArg);
