'use strict';

var _require = require('chai');

var expect = _require.expect;

var _require2 = require('child_process');

var execSync = _require2.execSync;

var _require3 = require("../lib/monthGen.js");

var outputCal = _require3.outputCal;
var calBodyOutput = _require3.calBodyOutput;
var calHeaderOutput = _require3.calHeaderOutput;
var getWeeks = _require3.getWeeks;
var getTotalDays = _require3.getTotalDays;

describe('cal', function () {
  describe('CLI', function () {
    it('should handle the current month', function () {
      var goal = execSync('cal').toString();
      var output = execSync('./lib/cal.js').toString();

      expect(output).to.equal(goal);
    });

    it('should handle the current year', function () {
      var goal = execSync('cal 2016').toString();
      var output = execSync('./lib/cal.js 2016').toString();
      expect(output).to.equal(goal);
    });

    it('should handle any year between 1753 and 9999', function () {
      var goal = execSync('cal 1800').toString();
      var output = execSync('./lib/cal.js 1800').toString();
      expect(output).to.equal(goal);
    });
    it('should handle the year 1754', function () {
      var goal = execSync('cal 1754').toString();
      var output = execSync('./lib/cal.js 1754').toString();
      expect(output).to.equal(goal);
    });
    it('should handle the year 9998', function () {
      var goal = execSync('cal 9998').toString();
      var output = execSync('./lib/cal.js 9998').toString();
      expect(output).to.equal(goal);
    });
    it('should handle the year 2567', function () {
      var goal = execSync('cal 2567').toString();
      var output = execSync('./lib/cal.js 2567').toString();
      expect(output).to.equal(goal);
    });
  });
});

//test for weeks
describe("Week tests", function () {

  it('should the retrn the appropriate number of weeks for all types of weeks', function () {
    expect(getWeeks(2, 2015)).to.equal(4);
    expect(getWeeks(10, 2015)).to.equal(5);
    expect(getWeeks(8, 2015)).to.equal(6);
  });

  it('handles erroneous arguments with letters', function () {
    expect(execSync('./lib/cal.js 6 b').toString()).to.equal("Arguments are invalid\n");
    expect(execSync('./lib/cal.js a b').toString()).to.equal("Arguments are invalid\n");
    expect(execSync('./lib/cal.js a 1973').toString()).to.equal("Arguments are invalid\n");
  });

  it('handles erroneous arguments with numbers', function () {
    expect(execSync('./lib/cal.js 0 1872').toString()).to.equal("Arguments are invalid\n");
    expect(execSync('./lib/cal.js 3 1672').toString()).to.equal("Arguments are invalid\n");
    expect(execSync('./lib/cal.js 3 0').toString()).to.equal("Arguments are invalid\n");
  });
});

//test for total days
describe("day tests", function () {
  it("should return the total number of days in the month", function () {
    expect(getTotalDays(11, 2015)).to.equal(30);
    expect(getTotalDays(12, 2015)).to.equal(31);
    expect(getTotalDays(2, 2012)).to.equal(29);
    expect(getTotalDays(2, 2014)).to.equal(28);
  });
});

describe("Zeller's congruence", function () {
  var zellers = require('../lib/zellars.js');

  describe('.modifiedMonth', function () {
    it('return 13 for January', function () {
      expect(zellers.modifiedMonth(1)).to.equal(13);
      expect(zellers.modifiedMonth(2)).to.equal(14);
      expect(zellers.modifiedMonth(3)).to.equal(3);
    });
  });

  describe('.modifiedYear', function () {
    it('returns 2015 for Jan 2015', function () {
      expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
      expect(zellers.modifiedYear(2016, 2)).to.equal(2015);
      expect(zellers.modifiedYear(2017, 3)).to.equal(2017);
    });

    describe('.getDay', function () {
      it('returns 2 (Tuesday) for March 1, 2016', function () {
        expect(zellers.getDay(2000, 3, 1)).to.equal(3);
        expect(zellers.getDay(2100, 3, 1)).to.equal(1);
        expect(zellers.getDay(2200, 3, 2)).to.equal(0);
        expect(zellers.getDay(2300, 3, 1)).to.equal(4);
      });
    });
  });
});

