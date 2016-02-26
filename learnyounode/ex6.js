var filterFile = require("./ex6_module");

var dirPath = process.argv[2];
var ext = process.argv[3];

filterFile(dirPath, ext, function (err, files) {
    if (err) {
        console.log(err);
    } else {
        for (var file of files) {
            console.log(file);
        }
    }
});