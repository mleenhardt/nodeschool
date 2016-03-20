var http = require("http");
var async = require("async");

async.series({
    requestOne: function(done) {
        http.get(process.argv[2], res => {
            var body = '';
            res.on('data', function(chunk) {
                body += chunk.toString();
            });
            res.on('end', function() {
                done(null, body);
            });
        });
    },
    requestTwo: function(done) {
        http.get(process.argv[3], res => {
            var body = '';
            res.on('data', function(chunk) {
                body += chunk.toString();
            });
            res.on('end', function() {
                done(null, body);
            });
        });
    }
}, function(err, results) {
    if (err) {
        return console.error(err);
    }

    console.log(results);
});
