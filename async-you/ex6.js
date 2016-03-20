var async = require("async");
var http = require("http");

var url = process.argv[2];

async.reduce(["one", "two", "three"], 0, function(memo, item, callback) {
    http.get(url + "/?number=" + item, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk.toString();
        });
        res.on('end', function() {
            var sum = memo + Number(body);
            callback(null, sum);
        });
    });
}, function(err, result) {
    if (err) {
        return console.log(err);
    }

    console.log(result);
});