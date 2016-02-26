var fs = require("fs");

var path = process.argv[2];

fs.readFile(path, function callback (err, data) {
    var newLineCount = data.toString().split("\n").length - 1;
    console.log(newLineCount);
});



