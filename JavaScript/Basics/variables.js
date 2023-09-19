/*
    when we want to store the data for operations in program then we create a variables.
    In javascript we have two types of variables:-
    1. Constant Variables
    2. Variables

    1. Constant Variables:- Its value not get change after initialization.
    example :- const accountId = 123454
               accountId = 2 //Not Allowed

    2. Variables:- Its value get change after initialization.
    example :- let val = "hello"
               val = "jit" //Possible

    Ways to create a variables:- 
    1. let variable_name = "12323" //Recommended
    2. var variable_name = 123 // Not Prefer because of block scope
    3. variable_name = "hello" // It is also a way for creating an variable


    if we declare a variable not initialize its value then its value is undefined.

    we can use console.table() for printing multiple variable values into the form of table 

    Let's Practice it....

*/

const accountId = 12
// accountId = 2 //Not Allowed

let var1 = "joban"
var var2 = "jit"
var3 = "singh"

var1 = "singh" //possible

let var4

console.table([accountId,var1,var2,var3,var4])