/**@author Prathamesh tibile 
 * @since 21-07-21
 * Using Random function get avg and sum of 5 numbers.
 */

// "use strict";
// const num = require ("prompt-sync");
// const prompt = num ();
// let number = prompt ("Enter the number :");

// console.log(number);

num1 =  Math.floor(Math.random()*199)+99;
num2 =  Math.floor(Math.random()*199)+99;
num3 =  Math.floor(Math.random()*199)+99;
num4 =  Math.floor(Math.random()*199)+99;
num5 =  Math.floor(Math.random()*199)+99;
sum = (num1+num2+num3+num4+num5);
avg = (sum/5);
console.log("The sum of 5 numbers are:" +sum);
console.log("The average of 5 numbers are:" + avg);