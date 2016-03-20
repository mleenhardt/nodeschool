var async = require("async");
var http = require("http");

async.map([process.argv[2], process.argv[3]], function(item, done) {
    http.get(item, res => {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk.toString();
        });
        res.on('end', function() {
            return done(null, body);
        });
    });
}, function(err, results) {
    if (err) {
        return console.log(err);
    }
    console.log(results);
});