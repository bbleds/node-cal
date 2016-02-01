#!/usr/bin/env node


//actual methods
'use strict';

//set month strings object equal to empty object

var monthStrings = {};
var space = " ";

//Returns a string with spaces, the year, and the month, with january = 1, and then returns a new line with the days of the week
monthStrings.calHeaderOutput = function (month, year) {

  var monthArray = [, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var fullTopString = monthArray[month] + ' ' + year;

  var initalSpaces = (20 - (monthArray[month].length + 5)) / 2 - 1;

  var spaceString = " ";

  return '' + spaceString.repeat(initalSpaces + 1) + fullTopString + '\nSu Mo Tu We Th Fr Sa';
};

//Returns a string with spaces, the year, and the month, with january = 1, and then returns a new line with the days of the week
monthStrings.monthNameOnly = function (month) {

  var monthArray = [, 'January ', 'February', 'March', 'April ', ' May', 'June', 'July', 'August', 'September', 'October ', 'November', 'December'];

  var fullTopString = '' + monthArray[month];

  var initalSpaces = (20 - monthArray[month].length) / 2;

  var spaceString = " ";

  if (monthArray[month] === 'March' || monthArray[month] === 'June' || monthArray[month] === 'September' || monthArray[month] === 'December') {

    return '' + spaceString.repeat(initalSpaces) + fullTopString;
  } else {

    return '' + spaceString.repeat(initalSpaces) + fullTopString + spaceString.repeat(initalSpaces);
  }
};

//returns the days of the month from 1 - 31 with spaces for formatting
monthStrings.calBodyOutput = function (month, year) {
  var zellars = require("./zellars.js");

  var totalDays = new Date(year, month, 0).getDate();

  var daysNums = [];

  for (var i = 1; i <= totalDays; i++) {
    if (i <= 9) {
      var spacedI = " " + i;
      daysNums.push(spacedI);
    } else {

      daysNums.push(i);
    }
  }
  var getDay = zellars.getDay;

  var prependedSpaces = getDay(year, month, 1) * 3;

  var initialSpace = " ";

  var finalString = '' + initialSpace.repeat(prependedSpaces) + daysNums.join(" ");

  var spacedFinal = finalString.match(new RegExp('.{1,' + 21 + '}', 'g'));

  var fixedArray = [];
  for (var i = 0; i < spacedFinal.length; i++) {
    if (i === spacedFinal.length - 1) {
      var newLine = spacedFinal[i];
      fixedArray.push(newLine);
    } else {
      var newLine = spacedFinal[i].split("").splice(0, spacedFinal[i].split("").length - 1).join("");
      fixedArray.push(newLine);
    }
  }
  return fixedArray.join("\n");
};

//returns the days of the month from 1 - 31 with spaces for formatting
monthStrings.calBodyOutputLinux = function (month, year) {
  var zellars = require("./zellars.js");

  var totalDays = new Date(year, month, 0).getDate();

  var daysNums = [];

  for (var i = 1; i <= totalDays; i++) {
    if (i <= 9) {
      var spacedI = " " + i;
      daysNums.push(spacedI);
    } else {

      daysNums.push(i);
    }
  }
  var getDay = zellars.getDay;

  var prependedSpaces = getDay(year, month, 1) * 3;

  var initialSpace = " ";

  var finalString = '' + initialSpace.repeat(prependedSpaces) + daysNums.join(" ");

  var spacedFinal = finalString.match(new RegExp('.{1,' + 21 + '}', 'g'));

  var fixedArray = [];
  for (var i = 0; i < spacedFinal.length; i++) {
    if (i === spacedFinal.length - 1) {
      var newLine = '' + spacedFinal[i];
      fixedArray.push(newLine);
    } else {
      var newLine = spacedFinal[i].split("").splice(0, spacedFinal[i].split("").length - 1).join("");
      fixedArray.push(newLine);
    }
  }
  return fixedArray.join("  \n");
};

//output day lines
monthStrings.dayLinesOutput = function (month, year) {

  return monthStrings.calBodyOutput(month, year).split("\n");
};

//outputs full calendar
monthStrings.outputCal = function (month, year) {

  if (monthStrings.getWeeks(month, year) === 4 || monthStrings.getWeeks(month, year) === 5) {
    return monthStrings.calHeaderOutput(month, year) + '\n' + monthStrings.calBodyOutput(month, year) + '\n';
  } else {

    return monthStrings.calHeaderOutput(month, year) + '\n' + monthStrings.calBodyOutput(month, year);
  }
};

monthStrings.outputCalLinux = function (month, year) {

  if (monthStrings.getWeeks(month, year) === 4 || monthStrings.getWeeks(month, year) === 5) {
    return monthStrings.calHeaderOutput(month, year) + '\n' + monthStrings.calBodyOutputLinux(month, year) + '\n' + space.repeat(22);
  } else {

    return monthStrings.calHeaderOutput(month, year) + '\n' + monthStrings.calBodyOutputLinux(month, year);
  }
};

//get weeks of a certain month of a year
monthStrings.getWeeks = function (month, year) {

  if (monthStrings.calBodyOutput(month, year).lastIndexOf("\n") === 62) {
    return 4;
  } else if (monthStrings.calBodyOutput(month, year).lastIndexOf("\n") === 83) {
    return 5;
  } else if (monthStrings.calBodyOutput(month, year).lastIndexOf("\n") === 104) {
    return 6;
  }
};

//get total number of days
monthStrings.getTotalDays = function (month, year) {
  var totalDays = new Date(year, month, 0).getDate();
  return totalDays;
};

module.exports = monthStrings;

