#!/usr/bin/env node --harmony_destructuring

//actual methods
'use strict';

const _ = require("../node_modules/lodash");

const {dayLinesOutput,  outputCal, calBodyOutput, calHeaderOutput, getWeeks, getTotalDays } = require("./monthGen.js");

let makeYear = (year) => {
	let months = [ ,dayLinesOutput(1,year),dayLinesOutput(2,year), dayLinesOutput(3,year), dayLinesOutput(4,year),dayLinesOutput(5,year),dayLinesOutput(6,year),dayLinesOutput(7,year),dayLinesOutput(8,year),dayLinesOutput(9,year),dayLinesOutput(10,year),dayLinesOutput(11,year),dayLinesOutput(12,year)];

	let spaceChars = " ";

	//take each month and add the spaces
		//for each item in months put spaces in
			for(let i = 1 ; i < months.length; i++){
				months[i][months[i].length-1] = `${months[i][months[i].length-1]}${spaceChars.repeat(20 -months[i][months[i].length-1].length)}`;
			}

		let monthHeaders = [ ,calHeaderOutput(1,year),calHeaderOutput(2,year), calHeaderOutput(3,year), calHeaderOutput(4,year),calHeaderOutput(5,year),calHeaderOutput(6,year),calHeaderOutput(7,year),calHeaderOutput(8,year),calHeaderOutput(9,year),calHeaderOutput(10,year),calHeaderOutput(11,year),calHeaderOutput(12,year)];

		let spacedHeaders = [ ,]

		for(let i = 1 ; i < monthHeaders.length; i++){
				let mainCall = calHeaderOutput(i,year).split("\n");
				let curLength = mainCall[0].length;
				let spacesToAdd = spaceChars.repeat(20 - curLength);
				// let newString = `${mainCall[0] + spacesToAdd}\n${mainCall[1]}`;
				let newString = `${mainCall[0] + spacesToAdd}`;
				spacedHeaders.push(newString);
			}

	let sunToSat = "Su Mo Tu We Th Fr Sa"

	for(let x = 1; x < months.length; x+=3 ){

			let arrayOfMonthDays = _.zip(months[x], months[x+1], months[x+2]);
			let arrayOfMonthHeaders = _.zip(monthHeaders[x], monthHeaders[x+1], monthHeaders[x+2])
			console.log(`${spacedHeaders[x]}  ${spacedHeaders[x+1]}  ${spacedHeaders[x+2]}\n${sunToSat}  ${sunToSat}  ${sunToSat}`);

				for(let i = 0; i < 6; i++){
					if(arrayOfMonthDays[i] === undefined){
						console.log("                    ");
					} else {

					console.log(arrayOfMonthDays[i].join("  "));
					}
				}

				let spaces = " ";

				console.log(`${spaces.repeat(66)}\n`);

	}







};

makeYear(2016);
