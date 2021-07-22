/**@author Prathamesh tibile
 * @since 21-07-21
 * to calculte min and max value from random numbers
 */
num1 = Math.floor(Math.random()*199)+99;
num2 = Math.floor(Math.random()*199)+99;
num3 = Math.floor(Math.random()*199)+99;

if (num1 > num2 && num1 > num3)
{
    console.log ("The max is :" + num1);
    if(num2 < num3)
    {
        console.log ("The min is :" + num2);
    }
    
}    
else if (num2 > num1 && num2 > num3)
{
    console.log ("The max is :" + num2);
    {
        if(num1 < num3)
        {
            console.log ("The min is :" + num1);
        }
        else if(num3 < num1)
        {
            console.log ("The min is :" + num3);
        }
    }
}  
else
{
    console.log("The max is : " +num3 )
}
    
    
