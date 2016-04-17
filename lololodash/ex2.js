var _ = require("lodash");

var worker = function(list) {
    return _.sortBy(list, function(item) {
        return item.quantity * -1;
    })
};


module.exports = worker;