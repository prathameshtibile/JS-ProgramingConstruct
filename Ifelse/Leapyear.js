"use strict";
const num = require ("prompt-sync");
const prompt = num ();
let year = prompt ("Enter the year :");
    if (((year % 4 ==0) && (year % 100!=0)) || (year%400==0))
    	console.log("it is a leap year");
    else
    	console.log("it is a not a leap year");
    	 