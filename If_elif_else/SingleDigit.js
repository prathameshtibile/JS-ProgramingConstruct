/**@author Prathamesh tibile
 * @since 21-07-21
 * Read a number and display week
 */
const num = require ("prompt-sync");
const prompt = num ();
let number = prompt ("Enter the number:");

if (number == 1)
    console.log("one");
else
    console.log("write a correct number");