#!/usr/bin/env node --harmony_destructuring

//actual methods
'use strict';



//set month strings object equal to empty object
const monthStrings = {};


//Returns a string with spaces, the year, and the month, with january = 1, and then returns a new line with the days of the week
monthStrings.calHeaderOutput = (month, year) => {

  const monthArray = [ , 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const fullTopString = `${monthArray[month]} ${year}`;

  const initalSpaces = ((20 - (monthArray[month].length + 5))/2)-1;

  const spaceString = " ";

  return `${spaceString.repeat(initalSpaces+1)}${fullTopString}\nSu Mo Tu We Th Fr Sa`;

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
  const getDay = zellars.getDay;

  const prependedSpaces = getDay(year, month, 1) * 3;

  const initialSpace = " ";

  const finalString = `${initialSpace.repeat(prependedSpaces)}${daysNums.join(" ")}`;

  const spacedFinal = finalString.match(new RegExp('.{1,'+21+'}', 'g'));

  let fixedArray = [];
      for(let i = 0; i < spacedFinal.length; i++){
        if(i === spacedFinal.length-1){
          let newLine = spacedFinal[i];
          fixedArray.push(newLine);
        }else {
        let newLine = spacedFinal[i].split("").splice(0,spacedFinal[i].split("").length-1).join("");
        fixedArray.push(newLine);
        }
      }
        return  fixedArray.join("\n");


};




//output day lines
monthStrings.dayLinesOutput = (month, year) => {

  return monthStrings.calBodyOutput(month,year).split("\n");

};

//outputs full calendar
monthStrings.outputCal = (month, year) => {
  return `${monthStrings.calHeaderOutput(month,year)}\n${monthStrings.calBodyOutput(month, year)}`
};

//get weeks of a certain month of a year
monthStrings.getWeeks = (month, year) => {

        if(monthStrings.calBodyOutput(month, year).lastIndexOf("\n") === 62){
          return 4;
        } else if (monthStrings.calBodyOutput(month, year).lastIndexOf("\n") === 83){
          return 5
        } else if (monthStrings.calBodyOutput(month, year).lastIndexOf("\n") === 104){
          return 6
        }
};

//get total number of days
monthStrings.getTotalDays = (month, year) => {
    const totalDays = new Date(year, month, 0).getDate();
    return totalDays;
}

module.exports = monthStrings;




