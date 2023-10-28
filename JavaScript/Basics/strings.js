/*

In this post let's talk about strings in javascript this concept is very important to learn in javascript because in the real world application we are mostly working with strings

If you are familiar with strings than you mostly see the cancatination method we all are follow is:- 

like ..  

const name = "Joban"
console.log("Hello" + name);

above method is most common method but in modern javascript we need to use modern syntax for output like ("hello" + variableName)
and that modern syntax name is string interpolation

in this we use ` backtick and creating some placeholder in string were we can embed the value of a variable 

Example:- 
const name = "Joban"
console.log(`Hello ${name}`);

here ${name} is placeholder were the value of name variable is embedded.

Now let's discuss about some most common string method which is going to be very helpfull when we are code in javascript.

We have very big list of string method and if you want to see all the string method then just go to console and create the string object and here in prototype you will see all the methods which is available for the string.

from that list lets discuss some functions in details:- 

1. charAt():- if you want to see which character at a particular index then you can pass an index as a parameter and you get the character at that index.

Example:- 
const name = "JitCode"
console.log(name.charAt(0)) <- you get 'J' character here

2. indexOf():- If you want to do reverse of above task like what is the index of particular character in string then indexOf() is a function

Example :- 
console.log(name.indexOf('i')) <- you get 1 index here

3. includes():- If you want to check the particular character or string are there in string then use includes function it gives you answer in true or false.

Example:- 
console.log(name.includes('C')) <- you get true here

4. split():- suppose you have string like "Punjab, Haryana, Himachal" and you want this data into the array type then just use split method it make the array of string on the basic of one character in our case it is ',' (comma).

Example:- 
const states:- "Punjab, Haryana, Himachal";
console.log(states.split(',')) <- you get ["Punjab","Haryana", "Himachal"] it split our string.

5. substring():- If you want to get substring from the string then you have substring method in js.

Example :- 
const name = "Joban";
console.log(name.substring(0,4)) <- you get "Joba"

Note here the ending point is not included as you can see 4th index value not get printed.

Now In conclusion there is a number of method which we can use with a string you can practice it.

Let's Practice it...


*/

//String Interpolation Example:-
// const name = "Joban";
// console.log(`Hello ${name}`);

//charAt()
// const name = "Joban";
// console.log(name.charAt(0));

//indexOf()
// const name = "JitCode";
// console.log(name.indexOf("i"));

//includes()
// const name = "Jitcode";
// console.log(name.includes("c"));

// split()
// const states = "Punjab, Haryana, Himachal";
// console.log(states.split(","));

//substring()
// const name = "joban";
// console.log(name.substring(0, 4));
