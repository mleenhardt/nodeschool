var combine = require('stream-combiner');
var split = require("split");
var through = require('through2');
var zlib = require("zlib");

var counter = [];
var genre;

module.exports = function () {
    return combine(
        split(),
        through(function(chunk, encoding, next) {
            if (chunk.length === 0) {
                return next();
            }
            var obj = JSON.parse(chunk);
            if (obj.type === "genre") {
                if (genre) {
                    counter.push(JSON.stringify(genre));
                }
                genre = {
                    name: obj.name,
                    books: []
                };
            } else if (obj.type === "book") {
                genre.books.push(obj.name);
            }
            next();
        }, function(done) {
            if (genre) {
                counter.push(JSON.stringify(genre));
            }
            this.push(counter.join("\n"));
            done();
        }),
        zlib.createGzip()
    );
};

