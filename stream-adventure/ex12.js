var duplexer = require("duplexer2");
var through = require('through2');


module.exports = function (counter) {
    var counts = {};

    var writable = through({ objectMode: true }, function(chunk, encoding, next) {
        var country = chunk["country"];
        if (counts.hasOwnProperty(country)) {
            counts[country] += 1;
        } else {
            counts[country] = 1;
        }
        next();
    }, function(end) {
        counter.setCounts(counts);
        end();
    });

    return duplexer({objectMode: true}, writable, counter);
};