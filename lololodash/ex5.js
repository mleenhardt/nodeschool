var _ = require("lodash");

var worker = function(list) {
    return _.chain(list)
        .sortBy()
        .map(function(value) {
            return value.toUpperCase() + 'CHAINED';
        })
        .value()
};


module.exports = worker;