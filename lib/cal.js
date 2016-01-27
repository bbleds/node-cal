#!/usr/bin/env node --harmony_destructuring

'use strict';

//import monthGen

const { outputCal } = require("./monthGen.js");

// ignore first two items in argsv array and give me just the command line arguments
const [,,...argv] = process.argv;


let errorMsg = "Arguments are invalid"

//handle args
//is the month the first argument
//is the year the second

argv.length === 2 && parseInt(argv[0]) > 0 && parseInt(argv[0]) <= 12 && parseInt(argv[1]) > 1753 && parseInt(argv[1]) <= 9999 ? console.log("month and year should be served") : console.log(errorMsg);

