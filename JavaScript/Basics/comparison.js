/*
    In this post we are going to understand the comparison in javascript

    Let's start the journey of comparison

    If you are already familiar with some programming language's like c , c++
    then it is possible you have the knowledge of relation or we can say that 
    comparison operator like less than, greater than

    Comparison Operators:- 
    < Less than
    > Greater than
    <= Less than equal
    >= greater than equal
    == equal 
    != not equal

    above all operators are mostly used with conditional statements like if-else and
    it produces the output in boolean value (true or false)

    But In javascript there is a one concept called strict comparison

    In this we are using the equal operator like '===' with triple equal sign

    Now the simple '==' operator only check the values of the left and right values

    but 
    On the other side,
    '===' also check the types of left and right values, if both operands values are same and there types are
    also same than only '===' gives you true value.

    Lets confirm it by writing some line of code....
*/

console.log('2' == 2);
console.log('2' === 2);