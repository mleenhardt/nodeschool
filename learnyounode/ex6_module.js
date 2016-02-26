var fs = require("fs");
var path = require("path");

function filterDir(dirPath, ext, callback) {
    fs.readdir(dirPath, function(err, list) {
        if (err) {
            callback(err);
        } else {
            ext = "." + ext;
            var filteredFiles = list.filter(file => {
                return path.extname(file) === ext;
            });
            callback(null, filteredFiles);
        }
    });
};

module.exports = filterDir;