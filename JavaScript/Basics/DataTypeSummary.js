/*

In this post we are going to discuss about datatypes in javascript:- 

There are two types of datatypes in javascript,

1. Primitive 
2. Non - Primitive

What is Primitive datatypes:- 
In simple words, primitive datatypes are stored by values means, when you pass the primitive datatypes variable in function then the copy of the value is passed to the function, If that value is changed in the function then that change is not reflect on the outside variable.

Primitive types in js:- 
string
number
boolean
null
undefined
symbol
bigInt

what is non - primitive datatypes:- 
Non-primitive datatypes are stored by reference means when you pass the non-primitive datatype variable in the function then the reference (we can say that the address) of the variable is passed to the function, By this if the function make any changes in the variable values then the change is reflect outside the function

Non-primitive types in js:- 
 
Array
objects
function

Let's practice it..
*/

// Example of primitive datatype

// function change(num){
//     num++;
//     console.log('function call '+num)
// }

// let num = 3
// console.log(num);
// change(num)
// console.log(num);


//Example of Non-primitive datatype

function change(arr){
    a.push('d');
    console.log(arr);
}

let a = ['a','b','c'];
console.log(a);
change(a)
console.log(a)