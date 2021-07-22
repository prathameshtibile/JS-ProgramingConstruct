/**@author Prathamesh tibile
 * @since 21-07-21
 * Read a number and display week
 */
"use strict";
const num = require ("prompt-sync");
const prompt = num ();
let date = prompt ("Enter the date :");

const num1 = require ("prompt-sync");
const prompt1 = num1 ();
let Month = prompt1 ("Enter the month :");

if (( (Month <= 6 & date <= 20) ))
        console.log(true);
else if (( (Month >= 3 & Month < 6) & (date<31)  ))
        console.log(true);
 else
        console.log(false);