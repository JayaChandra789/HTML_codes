/*-----------------------------------*/

const display = document.getElementById("display");

function appendToDisplay(input)
{
    display.value += input;
}

function clearDisplay()
{
    display.value = "";
}

function calculate()
{   
    try
    {
        display.value = eval(display.value) /*Here the eval() is a default function which evaluate given prompt and result the answer*/
    }
    catch(error)
    {
        display.value = "Errors"
    }
}