"use strict"

var chai = require('chai');
var expect = chai.expect;

var ResultModel = require('../../app/calculator/models/Result');
var CalculatorService = require('../../app/calculator/services/calculator');

describe('CalculatorService\ testing', function(){
    it('It should return the result of adding two numbers', function(){
        var n1 = 2;
        var n2 = 4;
        var expected = n1+n2;
      
        var service = new CalculatorService();
        var actual = service.Add(n1, n2);

        expect(actual.result).to.equal(expected);
        expect(actual.from).to.equal("NodeJs services");
    });

    it('It should cast numbers into integer if they are string', function(){
        var n1 = "22";
        var n2 = "4";
        var expected = 26;
      
        var service = new CalculatorService();
        var actual = service.Add(n1, n2);

        expect(actual.result).to.equal(expected);
        expect(actual.from).to.equal("NodeJs services");
    });
    
    it('It should return Not a Number if incorrect paramenters', function(){
        var n1 = "aa";
        var n2 = "b";
      
        var service = new CalculatorService();
        var actual = service.Add(n1, n2);

        expect(actual.result).to.be.NaN;
        expect(actual.from).to.equal("NodeJs services");
    }); 
    
    it('It should return Not a Number if one parameter is not a number', function(){
        var n1 = "aa";
        var n2 = "33";
      
        var service = new CalculatorService();
        var actual = service.Add(n1, n2);

        expect(actual.result).to.be.NaN;
        expect(actual.from).to.equal("NodeJs services");
    }); 
});