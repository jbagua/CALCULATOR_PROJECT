
//Addition, Subtraction, Multiplication and Division Functions for a simple calculator
 
alert ("***** HELLO AND WELCOME TO MY SIMPLE CALCULATOR*****");

function additionBy()//Addition function
{

    num1 = parseFloat(document.getElementById("firstnumber").value);
    num2 = parseFloat(document.getElementById("secondnumber").value);
    document.getElementById("result").innerHTML= num1 + num2;
}

function subtractBy()//Subtraction function
{
    num1 = parseFloat(document.getElementById("firstnumber").value);
    num2 = parseFloat(document.getElementById("secondnumber").value);
    document.getElementById("result").innerHTML= num1 - num2;

}

function multiplyBy()//Multiplication function
{
    num1 = parseFloat(document.getElementById("firstnumber").value);
    num2 = parseFloat(document.getElementById("secondnumber").value);
    document.getElementById("result").innerHTML=num1 * num2;
}

function divideBy()//Division function
{
    num1 =parseFloat(document.getElementById("firstnumber").value);
    num2 = parseFloat(document.getElementById("secondnumber").value);
    document.getElementById("result").innerHTML =num1 / num2;

}




