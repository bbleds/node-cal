#!/usr/bin/env node


'use strict';

//import monthGen

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _require = require("./monthGen.js");

var outputCal = _require.outputCal;

var _require2 = require("./yearGen.js");

var makeYear = _require2.makeYear;

// ignore first two items in argsv array and give me just the command line arguments

var _process$argv = _toArray(process.argv);

var argv = _process$argv.slice(2);

var errorMsg = "Arguments are invalid";

//get the month and year of today
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();

//handle args
//if there is one arg, check for year, if two check for year and month
argv.length === 0 ? console.log(outputCal(month, year)) : argv.length === 1 && parseInt(argv[0]) > 1753 && parseInt(argv[0]) < 9999 ? makeYear(argv[0]) : argv.length === 2 && parseInt(argv[0]) > 0 && parseInt(argv[0]) <= 12 && parseInt(argv[1]) > 1753 && parseInt(argv[1]) <= 9999 ? console.log(outputCal(parseInt(argv[0]), parseInt(argv[1]))) : console.log(errorMsg);

