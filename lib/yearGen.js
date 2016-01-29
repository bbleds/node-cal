#!/usr/bin/env node --harmony_destructuring

//actual methods
'use strict';

const _ = require("../node_modules/lodash");

const yearObj = {}

const {dayLinesOutput, monthNameOnly,  outputCal, calBodyOutput, calHeaderOutput, getWeeks, getTotalDays } = require("./monthGen.js");

yearObj.makeYear = (year) => {
	let months = [ ,dayLinesOutput(1,year),dayLinesOutput(2,year), dayLinesOutput(3,year), dayLinesOutput(4,year),dayLinesOutput(5,year),dayLinesOutput(6,year),dayLinesOutput(7,year),dayLinesOutput(8,year),dayLinesOutput(9,year),dayLinesOutput(10,year),dayLinesOutput(11,year),dayLinesOutput(12,year)];

	let spaceChars = " ";

	//take each month and add the spaces
		//for each item in months put spaces in
			for(let i = 1 ; i < months.length; i++){
				months[i][months[i].length-1] = `${months[i][months[i].length-1]}${spaceChars.repeat(20 -months[i][months[i].length-1].length)}`;
			}

		let monthHeaders = [ ,monthNameOnly(1),monthNameOnly(2), monthNameOnly(3), monthNameOnly(4),monthNameOnly(5),monthNameOnly(6),monthNameOnly(7),monthNameOnly(8),monthNameOnly(9),monthNameOnly(10),monthNameOnly(11),monthNameOnly(12)];


	let sunToSat = "Su Mo Tu We Th Fr Sa";


	let spacedOpened = " ";

	let openingLine = `${spacedOpened.repeat(29)}${year}\n`;

	console.log(openingLine);

	for(let x = 1; x < months.length; x+=3 ){

			let arrayOfMonthDays = _.zip(months[x], months[x+1], months[x+2]);
			let arrayOfMonthHeaders = _.zip(monthHeaders[x], monthHeaders[x+1], monthHeaders[x+2])

			if( x+2 === 12 || x+2 === 3 || x+2 === 9){
			console.log(`${monthHeaders[x]}  ${monthHeaders[x+1]}  ${monthHeaders[x+2]}\n${sunToSat}  ${sunToSat}  ${sunToSat}`);
			} else {

				if(x+2 === 6 ){
					console.log(`${monthHeaders[x]} ${monthHeaders[x+1]}   ${monthHeaders[x+2]}\n${sunToSat}  ${sunToSat}  ${sunToSat}`);
				} else {
					console.log(`${monthHeaders[x]}  ${monthHeaders[x+1]}   ${monthHeaders[x+2]}\n${sunToSat}  ${sunToSat}  ${sunToSat}`);
				}

			}

				for(let i = 0; i < 6; i++){
					if(arrayOfMonthDays[i] === undefined){
						// console.log("                    ");
					} else {
						if(i === 5){
							//check for 31 and 6 weeks
							let initialLength = arrayOfMonthDays[i].join("  ");
							let totalSpaces = 44;
							let string = " ";
							console.log(`${initialLength}${string.repeat(totalSpaces - initialLength.length)}`);

						} else {
							console.log(arrayOfMonthDays[i].join("  ").trimRight());
						}
					}
				}

				// let spaces = " ";

	}
};

module.exports = yearObj;
