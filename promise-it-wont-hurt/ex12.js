var HTTP = require("q-io/http");


HTTP.read('http://localhost:1337')
    .then(function(res) {
        console.log(JSON.parse(res))
    });