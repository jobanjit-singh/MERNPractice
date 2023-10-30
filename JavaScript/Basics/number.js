/*

In this post we are going to discuss about number and math in javaScript 

So let's start the discussion

When we want to create a variable of number type then we write

const num = 400

like this and it create a variable with type of number

but there is a another way to create a number variable with following syntax:- 

const num = new Number(30)

if we create a variable with above syntax in console then it gives the list of Number class properties and method.

there is an less number of method in the case of number as compare to string.
But Let's practice some method from the list

1. tofixed():- If you have decimal type number and there is large amount digits after point then if you want to show only x amount of digits after point you can with this method.

example:- 
const num = 1.32452345236456
console.log(num.toFixed(2)) <- you get 1.32 here

2. toLocaleString():- If you have number like 200000 and this value is a price of some product and you want to see this price in readable form then you can use this method. This method convert the number by default with US standard if you want to see according Indian Standard then you can use 'en-IN' in parameter. This method return the string

Example:- 
const num = 200000
console.log(num.toLocaleString('en-IN')) <- you get 2,00,000 here 

3. toPrecision():- if you want to format a number with specified length then you can use this method

Example:- 
const num = 12.344325
console.log(num.toPrecision(2)) <- you get 12 here because you want 2 length of your number

4. toString():- this method is very useful when you want to convert your number into string type this method is used

Example:- 
const num = 400
console.log(num.toString()) <- you get 400 here but now your number is converted into string type

*/

//toFixed():-
// const num = 1.32452345236456;
// console.log(num.toFixed(2));

//toLocaleString()
// const num = 200000;
// console.log(num.toLocaleString("en-IN"));

//toPrecision()
// const num = 12.344325;
// console.log(num.toPrecision(2));

// toString()
// const num = 400;
// console.log(num.toString());
// console.log(typeof num.toString());
