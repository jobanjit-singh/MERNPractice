/*

In this post let's discuss about the math library in javaScript

which is used to perform mathematic operations.
If we see list of properties and methods of math library with just typing "Math" in console.
Then there is a large list of methods.

Let's discuss some important methods from math library

1. abs():- This method is used to generate absolute value like if you have -4 , then method gives you positive value 4. Now please donot get confuse that this method change the sign of number it return only a positive value

Means if you have 6 value then it return 6 but if you have -6 then it returns 6

Example:- 

console.log(Math.abs(-4)) <- you get 4 here

2. round():- This method is used to round of the value like if value is 15.7 then it returns 16 value. Now, why it returns 16 value we all are already know. If the value is 16.3 then it returns 16.

Example:- 

console.log(Math.round(15.7)) <- you get 16 here

3. random():- For generating a random number then we have random() method in js and it generate random values in the range of 0 to 1.

Example:- 
console.log(Math.random()) <- You get random value like 0.12234567235.

Now the question is that if we need random values above 0 then we can use use this method in following way 

Math.round((Math.random() * 10) + 1)

here the Math.random() generate value in range of 0 to 1 then by multiplying this value we sift the point with one means,
if we have value 0.254632 then by multiply it with 10 this value become 2.54632 now we are adding this value with 1 because if we have random value like 0.01234 then multiply it with 10 become 0.1234 now the value is not above 0 so that we are adding the value with 1 

So, after adding 1 with result (2.54632) the ans is 3.54632
after that for non decimal value we are round of the result with sound method.

Now, if you want random number in specific range then you just need to modify your above formula

like Math.floor(Math.random() * (max - min + 1) + min)
here floor method is used to take smallest value value like 
if you have 15.9 than floor method take 15 here we are using this method because if the maximum range is 15 and random value is 15.9 then round method make this value to 16 so we are exceeding our limit
So that's why we are using this floor() method in the case of custom range
*/

//abs():-
// console.log(Math.abs(-4));

// //round():-
// console.log(Math.round(15.7));
// console.log(Math.round(16.3));

// random():-

console.log(Math.random());
console.log(Math.round(Math.random() * 10 + 1));
let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
