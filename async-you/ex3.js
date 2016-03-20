var async = require("async");
var http = require("http");

async.each([process.argv[2], process.argv[3]], function(item, done) {
    http.get(item, res => {
        res.on('data', function(chunk) {
        });
        res.on('end', function() {
            done(null);
        });
    }).on("error", function(err) {
        return done(err);
    });
}, function(err) {
    if (err) {
        return console.log(err);
    }
});
