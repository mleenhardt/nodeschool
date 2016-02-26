var through = require("through2");
var split = require("split");

var lineNumber = 0;

process.stdin
    .pipe(split())
    .pipe(through(function(buffer, encoding, next) {
        lineNumber++;
        if (lineNumber % 2 == 0) {
            this.push(buffer.toString().toUpperCase() + "\n");
        } else {
            this.push(buffer.toString().toLowerCase() + "\n");
        }
        next();
    }))
    .pipe(process.stdout);