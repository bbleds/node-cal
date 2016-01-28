'use strict';

const { expect } = require('chai');
const { execSync } = require('child_process');

describe('cal', () => {
  describe('CLI', () => {
    it('should handle the current month', () => {
      const goal = execSync('cal').toString();
      const output = execSync('./lib/cal.js').toString();

      expect(output).to.equal(goal);
    });
  })
});

//test for weeks
describe("Week tests", () => {
  const { outputCal, calBodyOutput, calHeaderOutput } = require("../lib/monthGen.js");



  const getWeeks = (month, year) => {
        console.log(calBodyOutput(month, year).lastIndexOf("\n"));

        if(calBodyOutput(month, year).lastIndexOf("\n") === 62){
          return 4;
        } else if (calBodyOutput(month, year).lastIndexOf("\n") === 83){
          return 5
        } else if (calBodyOutput(month, year).lastIndexOf("\n") === 104){
          return 6
        }
  };


  it('should the retrn the appropriate number of weeks for all types of weeks', () => {
      expect(getWeeks(2,2015)).to.equal(4);
      expect(getWeeks(10,2015)).to.equal(5);
      expect(getWeeks(8,2015)).to.equal(6);
  });

   it('handles erroneous arguments with letters', () => {
      expect(execSync('./lib/cal.js 6 b').toString()).to.equal("Arguments are invalid\n");
      expect(execSync('./lib/cal.js a b').toString()).to.equal("Arguments are invalid\n");
      expect(execSync('./lib/cal.js a 1973').toString()).to.equal("Arguments are invalid\n");
  });

   it('handles erroneous arguments with numbers', () => {
     expect(execSync('./lib/cal.js 0 1872').toString()).to.equal("Arguments are invalid\n");
     expect(execSync('./lib/cal.js 3 1672').toString()).to.equal("Arguments are invalid\n");
     expect(execSync('./lib/cal.js 3 0').toString()).to.equal("Arguments are invalid\n");

   });


});


//   describe("Zeller's congruence", () => {
//      const zellers = require('../lib/zellars.js');

//     describe('.modifiedMonth', () => {
//       it('return 13 for January', () => {
//         expect(zellers.modifiedMonth(1)).to.equal(13);
//         expect(zellers.modifiedMonth(2)).to.equal(14);
//          expect(zellers.modifiedMonth(3)).to.equal(3);

//       });
//     });

//     //describe('.modifiedYear', () => {
//       it('returns 2015 for Jan 2015', () => {
//         expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
//       });
//       // 2016, 2 === 2015
//       // 2017, 3 === 2017

//     describe('.getDay', () => {
//       it('returns 2 (Tuesday) for March 1, 2016', () => {
//         expect(zellers.getDay(2000, 3, 1)).to.equal(3);
//         expect(zellers.getDay(2100, 3, 1)).to.equal(1);
//         expect(zellers.getDay(2200, 3, 2)).to.equal(0);
//         expect(zellers.getDay(2300, 3, 1)).to.equal(4);
//       });
//       // 2000, 3, 1 === 3
//       // 2100, 3, 1 === 1
//       // 2200, 3, 2 === 0
//       // 2300, 3, 1 === 4
//     });

// });

//   describe("Calendar console outputs", () => {
//     const { calBodyOutput, calHeaderOutput, outputCal } = require("../lib/monthGen.js");

//     //   console.log(outputCal(3,2016));
//     // it("should output the month and year centered relative to 20 spaces", ()=>{
//     //   expect(calHeaderOutput(3,2016)).to.equal("    March 2016\nSu Mo Tu We Th Fr Sa");
//     // });

//     // it("should output the days of the month relative to 20 spaces", ()=>{
//     //   expect(calBodyOutput(3, 2016)).to.equal("       1  2  3  4  5 \n 6  7  8  9 10 11 12 \n13 14 15 16 17 18 19 \n20 21 22 23 24 25 26 \n27 28 29 30 31")
//     // });

//   });


