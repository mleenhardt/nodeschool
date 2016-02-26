var net = require("net");
var os = require("os");
var moment = require("moment");

var port = process.argv[2];

var server = net.createServer(function (socket) {
    //var date = new Date();
    //var formattedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    var formattedDate = moment().format("YYYY-MM-DD HH:mm")
    socket.write(formattedDate, function() {
       socket.end(os.EOL);
    });
});
server.listen(port);