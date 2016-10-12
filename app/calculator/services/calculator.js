var Result = require('../models/Result');

var CalculatorService = function (){
} 

CalculatorService.prototype.Add = function (n1, n2){
    return new Result(parseInt(n1)+parseInt(n2));
}


module.exports = CalculatorService;