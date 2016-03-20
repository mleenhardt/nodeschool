var async = require("async");
var http = require("http");

var host = process.argv[2];
var port = process.argv[3];

var opts = {
    hostname: host,
    port: port,
    path: '/users/create',
    method: 'POST'
};

async.series({
    reqOne: function(done) {
        async.times(5, function(n, next) {
            var req = http.request(opts);
            req.on('error', function(err) {
                console.log("http error: " + err);
                return next(err);
            });
            var payload = {
                user_id: n + 1
            };
            req.write(JSON.stringify(payload));
            req.end(function() {
                next(null);
            });

        }, function(err, results) {
            // Number of object returned by previous next times n
            if (err) {
                return done(err);
            }
            done(null, results);
        });
    },
    reqTwo: function(done) {
        http.get("http://" + host + ":" + port + '/users', function(res) {
            var body = '';
            res.on('data', function(chunk) {
                body += chunk.toString();
            });
            res.on('end', function() {
                console.log(body);
                return done(null, body);
            });
        });
    }
});