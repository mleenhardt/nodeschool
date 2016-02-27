var http = require("http");
var through = require('through2');

var httpServer = http.createServer(function (req, res) {
    if (req.method == "POST") {
        req.pipe(through(function(buffer, encoding, next) {
            this.push(buffer.toString().toUpperCase());
            next();
        })).pipe(res);
    } else {
        res.end();
    }
});
httpServer.listen(process.argv[2]);