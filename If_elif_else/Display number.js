/**@author Prathamesh tibile
 * @since 21-07-21
 * Read a number and display it
 */
 const prompt = require ("prompt-sync")();
 let number = prompt ("Enter the number:");

 if (number == 1)
     console.log("One");
 else if (number == 10)
     console.log("Ten");
 else if (number == 100)
     console.log("Hundred");
 else if (number == 1000)
     console.log("Thousand");
 else 
     console.log("Enter correct number");