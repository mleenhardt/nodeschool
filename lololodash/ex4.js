var _ = require("lodash");

var worker = function(list) {
    var obj = {
        hot: [],
        warm: []
    };

    _.forEach(list, function(temperatures, city) {
        if (_.some(temperatures, function(temp) {
                return temp > 19;
            })) {
            if (_.every(temperatures, function(temp) {
                    return temp > 19;
                })) {
                obj.hot.push(city);
            } else {
                obj.warm.push(city);
            }
        }
    })

    return obj;
};


module.exports = worker;