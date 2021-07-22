/**
 * @author Prathamesh Tibile
 * @since 21-07-21 
 */
const prompt = require ("prompt-sync")();
const number = prompt ("Enter the number:");

 switch (Number(number)){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Satuday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("enter correct number");
 }