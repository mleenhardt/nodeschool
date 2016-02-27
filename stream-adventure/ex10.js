var trumpet = require("trumpet")();
var through = require("through2");

var stream = trumpet.select(".loud").createStream();

stream.pipe(through(function(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
})).pipe(stream);

process.stdin.pipe(trumpet).pipe(process.stdout);