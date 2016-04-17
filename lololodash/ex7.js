var _ = require("lodash");

var worker = function(list) {
    return _.chain(list)
        .groupBy('article')
        .map(function(obj, key) {
            return {
                article: Number(key),
                total_orders: _.sumBy(obj, 'quantity')
            }
        })
        .orderBy('total_orders', 'desc')
        .value()
};


module.exports = worker;