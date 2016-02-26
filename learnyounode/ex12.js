var http = require("http");
var streamMap = require("through2-map");

var port = process.argv[2];

var server = http.createServer(function (req, res) {
    if (req.method != "POST") {
        return res.end("POST required");
    }
    req.pipe(streamMap(chunk => {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});
server.listen(port);
