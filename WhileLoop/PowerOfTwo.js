/** @author Prathamesh Tibile
 * @since 21-7-21
 */
const prompt = require('prompt-sync')();

const number = prompt('Enter the value of n: ');

i=0
while ( i <= number ) 
{
    let powerOf2 = Math.pow(2, i);
    if (powerOf2 <= 256) 
    {
        console.log(powerOf2);
        i++;
    }
    else 
    {
        break;
    }
}