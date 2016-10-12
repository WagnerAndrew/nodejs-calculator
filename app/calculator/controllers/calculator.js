var express = require('express');
var router = express.Router();
var CalculatorService = require('../services/calculator');
var service = new CalculatorService();

router.get('/add/:num1/:num2', function (req, res) {
        var value = service.Add(req.params.num1, req.params.num2);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(value));
    });

module.exports = router;