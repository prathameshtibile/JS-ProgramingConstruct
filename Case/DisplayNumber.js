const prompt = new require ("prompt-sync")();
const number = prompt ("Enter the number ");

switch (Number(number))
{
    case 1:
        console.log("One");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    default:
        console.log("Enter correct input");

}