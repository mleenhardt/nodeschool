var http = require("http");
var bl = require("bl");


var urls = [process.argv[2], process.argv[3], process.argv[4]];

var results = [];

function getResult(url, index) {
    http.get(url, function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                console.error(err);
            } else {
                results[index] = data.toString();
                if (results.length === 3) {
                    for (var result of results) {
                        console.log(result);
                    }
                }
            }
        }));
    });
};

var i = 0;
for (var url of urls) {
    getResult(url, i++);
}