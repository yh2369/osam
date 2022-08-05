const {HelloWorld} = require("./function.js");
HelloWorld();

const fs = require("fs");
const helloFile = fs.readFileSync("./hello.json").toString();
const helloJson = JSON.parse(helloFile);

console.log(helloJson.contents);
