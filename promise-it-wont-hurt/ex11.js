function all(firstPromise, secondPromise) {
    return new Promise(function(fulfill, reject) {
        var firstPromiseResult;
        var secondPromiseResult;
        var count = 0;

        function doFulfill() {
            if (count === 2) {
                fulfill([firstPromiseResult, secondPromiseResult]);
            }
        }

        firstPromise.then(function(res) {
            firstPromiseResult = res;
            count++;
            doFulfill();
        });

        secondPromise.then(function(res) {
            secondPromiseResult = res;
            count++;
            doFulfill();
        });
    });
}

all(getPromise1(), getPromise2()).then(console.log);