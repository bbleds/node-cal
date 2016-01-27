#!/usr/bin/env node --harmony_destructuring

//actual methods
'use strict';

// console.log("argv v is ");
// console.log(process.argv)

//ignore first two items in argsv array and give me just the command line arguments
const [,, ...args] = process.argv;
console.log("args ", args);

//set month strings object equal to empty object
const monthStrings = {};


//Returns a string with spaces, the year, and the month, with january = 1, and then returns a new line with the days of the week
monthStrings.calHeaderOutput = (month, year) => {

  const monthArray = [ , 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const fullTopString = `${monthArray[month]} ${year}`;

  const initalSpaces = ((20 - (monthArray[month].length + 5))/2)-1;

  const spaceString = " ";

  return `${spaceString.repeat(initalSpaces)}${fullTopString}\nSu Mo Tu We Th Fr Sa`;

};

//returns the days of the month from 1 - 31 with spaces for formatting
monthStrings.calBodyOutput = (month, year) => {
  const zellars = require("./zellars.js");

  const totalDays = new Date(year, month, 0).getDate();

  let daysNums = [];

  for(let i = 1; i <= totalDays; i++){
    if(i <= 9 ){
      let spacedI = " "+i;
      daysNums.push(spacedI);
    } else {

      daysNums.push(i);
    }
  }

  // const { getDay } = zellars;
  const getDay = zellars.getDay;

  const prependedSpaces = getDay(year, month, 1) * 3;

  const initialSpace = " ";

  const finalString = `${initialSpace.repeat(prependedSpaces)}${daysNums.join(" ")}`;

  return finalString.match(new RegExp('.{1,'+21+'}', 'g')).join("\n");


};

//outputs full calendar
monthStrings.outputCal = (month, year) => {

  return `${monthStrings.calHeaderOutput(month,year)}\n${monthStrings.calBodyOutput(month, year)}`
};

console.log(monthStrings.outputCal(2,2016))

module.exports = monthStrings;




