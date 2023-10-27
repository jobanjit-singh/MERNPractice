/*

In this post we are going to discuss about memory in javascript

In js the data is stored in two memories 
1. Stack
2. Heap

according to there types.
Means if the data is of primitive data type then the data is stored in the stack and when we want to access the data the copy of data is given to you.

example:- 

let v1 = "Jobanjit Singh"

let v2 = v1

here the copy of the v1 is given to the v2 because it is a primitive type of data and if the user want to change v2 it is possible because v2 is storing the copy of the v1 so that the change of v2 is not reflect on v1.

But, On other side, if the data is of non primitive type than that data is stored is heap and when we want to access the data the reference of data is given to you

example:- 

let name = {
    name1: 'Ravinder'
    name2: 'Davinder'
};

let anotherNames = name

In above example because the data is non primitive and stored in the heap memory so that the name variable store the reference of the data after that when we want to make new variable called anotherNames and assign the names variable the refernce of data is stored in the anotherNames variable and it can also point to same data.

After that if we change something in anotherNames variable then because it have refernce the changes is also reflect to name variable because both have same reference


Lets practice it..
*/

// Example of stack memory

// let v1 = "Jobanjit Singh"

// let v2 = v1
// v2 = "JitCode"

// console.log(v1)
// console.log(v2)

// Example of heap memory

let name = { name1: "Ravinder", name2: "Davinder" };
let anotherNames = name;

anotherNames["name3"] = "Jobanjit";

console.log(name);
console.log(anotherNames);
