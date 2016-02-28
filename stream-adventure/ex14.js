var crypto = require("crypto");

var key = process.argv[2];
var stream = crypto.createDecipher("aes256", key);
process.stdin.pipe(stream).pipe(process.stdout);
