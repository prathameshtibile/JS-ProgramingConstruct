/**@author Prathamesh tibile
 * @since 21-07-21
 * Read a number and display week
 */
const num = require ("prompt-sync");
const prompt = num ();
let number = prompt ("Enter the number:");
if (number == 1)
    console.log("Monday");
else if (number == 2)
    console.log("Tuesday");
else if (number == 3)
    console.log("Wednday");
else if (number == 4)
    console.log("thurday");
else if (number == 5)
    console.log("Friday");
else if (number == 6)
    console.log("Saturday");
else if (number == 7)
    console.log("Sunday");
else 
    console.log("This is not a day");