var async = require("async");
var http = require("http");

var url = process.argv[2];
var requestBody = '';
var count = 0;

async.whilst(
    function() {
        return !requestBody.includes('meerkat');
    },
    function(callback) {
        count++;
        http.get(url, function(res) {
            var body = '';
            res.on('data', function(chunk) {
                body += chunk.toString();
            });
            res.on('end', function() {
                requestBody = body;
                callback(null, count);
            });
        });
    },
    function(err, result) {
        if (err) {
            return console.log(err);
        }
        console.log(result);
    }
);