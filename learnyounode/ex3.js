var fs = require("fs");

var path = process.argv[2];

var buff = fs.readFileSync(path);
var newLineCount = buff.toString().split("\n").length - 1;

console.log(newLineCount);