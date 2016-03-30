var payload = process.argv[2];

function parsePromised(json) {
    return new Promise(function(fulfil, reject) {
        try {
            var obj = JSON.parse(json);
            fulfil(obj);
        } catch (e) {
            reject(e);
        }
    });
}

parsePromised(payload).then(null, console.log);