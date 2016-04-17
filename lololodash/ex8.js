var _ = require("lodash");

var worker = function(list) {
    var avgIncome = _.sumBy(list, 'income') / _.size(list);
    var result = {
        average: avgIncome,
        underperform: [],
        overperform: []
    };
    _.chain(list).sortBy('income').forEach(function(employee) {
        if (employee.income > avgIncome) {
            result.overperform.push(employee);
        } else {
            result.underperform.push(employee);
        }
    }).value();
    return result;
};


module.exports = worker;