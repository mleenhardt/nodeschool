var http = require("http");
var url = require("url");

var port = process.argv[2];

var server = http.createServer(function (req, res) {
    if (req.method != "GET") {
        return res.end("GET required");
    }

    var resPayload;
    var parsedUrl = url.parse(req.url, true);
    var date = new Date(parsedUrl.query.iso);
    if (parsedUrl.pathname == "/api/parsetime") {
        resPayload = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };

    } else if (parsedUrl.pathname == "/api/unixtime") {
        resPayload = {
            unixtime: date.getTime()
        }
    } else {
        return res.end("Invalid api");
    }

    res.writeHead(200, {"Content-Type": "application/json" });
    res.end(JSON.stringify(resPayload));
});
server.listen(port);
