
//actual methods
'use strict';

//set month strings object equal to empty object
const monthStrings = {};



//Returns a string with spaces, the year, and the month, with january = 1, and then returns a new line with the days of the week
monthStrings.calHeaderOutput = (month, year) => {

  const monthArray = [ , 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const fullTopString = `${monthArray[month]} ${year}`;

  const initalSpaces = ((20 - (monthArray[month].length + 5))/2)-1;

  const spaceString = " ";

  return `${spaceString.repeat(initalSpaces)}${fullTopString}\n${daysOfWeek.join(" ")}`;

};

//returns the days of the month from 1 - 31 with spaces for formatting
monthStrings.calBodyOutput = (month, year) => {
  const zellars = require("./zellars.js");
  const daysNums = [" 1"," 2"," 3"," 4"," 5"," 6"," 7"," 8"," 9",10,11, 12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

  // const { getDay } = zellars;
  const getDay = zellars.getDay;

  const prependedSpaces = getDay(year, month, 1) * 3;

  const initialSpace = " ";

  const finalString = `${initialSpace.repeat(prependedSpaces)}${daysNums.join(" ")}`;

  return finalString.match(new RegExp('.{1,'+21+'}', 'g')).join("\n");


};

console.log(monthStrings.calHeaderOutput(3,2016));
console.log(monthStrings.calBodyOutput(3, 2016));

module.exports = monthStrings;




