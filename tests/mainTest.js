'use strict';

const { expect } = require('chai');
const { execSync } = require('child_process');

//describe('cal', () => {
  //describe('CLI', () => {
    //it('should handle the current month', () => {
      //const goal = execSync('cal').toString();
      //const output = execSync('./cal.js').toString();

      //expect(output).to.equal(goal);
    //});
  //});

  describe("Zeller's congruence", () => {
     const zellers = require('../lib/zellars.js');

    describe('.modifiedMonth', () => {
      it('return 13 for January', () => {
        expect(zellers.modifiedMonth(1)).to.equal(13);
        expect(zellers.modifiedMonth(2)).to.equal(14);
         expect(zellers.modifiedMonth(3)).to.equal(3);

      });
    });

    //describe('.modifiedYear', () => {
      it('returns 2015 for Jan 2015', () => {
        expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
      });
      // 2016, 2 === 2015
      // 2017, 3 === 2017

    describe('.getDay', () => {
      it('returns 2 (Tuesday) for March 1, 2016', () => {
        expect(zellers.getDay(2000, 3, 1)).to.equal(3);
        expect(zellers.getDay(2100, 3, 1)).to.equal(1);
        expect(zellers.getDay(2200, 3, 2)).to.equal(0);
        expect(zellers.getDay(2300, 3, 1)).to.equal(4);
      });
      // 2000, 3, 1 === 3
      // 2100, 3, 1 === 1
      // 2200, 3, 2 === 0
      // 2300, 3, 1 === 4
    });

});

  describe("Calendar console outputs", () => {
    const { calBodyOutput, calHeaderOutput } = require("../lib/monthGen.js");
    it("should output the month and year centered relative to 20 spaces", ()=>{
      expect(calHeaderOutput(3,2016)).to.equal("    March 2016\nSu Mo Tu We Th Fr Sa");
    });

    it("should output the days of the month relative to 20 spaces", ()=>{
      expect(calBodyOutput(3, 2016)).to.equal("       1  2  3  4  5 \n 6  7  8  9 10 11 12 \n13 14 15 16 17 18 19 \n20 21 22 23 24 25 26 \n27 28 29 30 31")
    });

    it("should output a full calendar with a calendar head and a calendar body", () => {

    });

  });


