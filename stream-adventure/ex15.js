var crypto = require("crypto");
var zlib = require("zlib");
var tar = require("tar");
var concat = require("concat-stream");
var fs = require("fs");

var cypherName = process.argv[2];
var cypherKey = process.argv[3];
var cypherStream = crypto.createDecipher(cypherName, cypherKey);

var tarParser = tar.Parse();
tarParser.on("entry", function (e) {
    if (e.type === "File") {
        var md5Hash = crypto.createHash("md5", {encoding: "hex"});
        e.pipe(md5Hash).pipe(concat(function (h) {
            console.log(h + " " + e.path);
        }));
    }
});

process.stdin.pipe(cypherStream).pipe(zlib.createGunzip()).pipe(tarParser);