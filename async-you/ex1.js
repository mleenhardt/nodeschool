var fs = require("fs");
var async = require("async");
var http = require("http");

async.waterfall([
        function (next) {
            fs.readFile(process.argv[2], (err, data) => {
                if (err) {
                    return next(err);
                }
                next(null, data.toString());
            });
        },
        function (url, next) {
            http.get(url, res => {
                var body = '';
                res.on('data', function (chunk) {
                    body += chunk.toString();
                });
                res.on('end', function () {
                    next(null, body);
                });
            });
        }
    ],
    function (err, body) {
        if (err) {
            return console.error(err);
        }
        console.log(body);
    });