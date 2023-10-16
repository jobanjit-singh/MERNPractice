"use script"

/*

    Data conversion means that we want to convert the of a variable value to another type

    example:- 
    let name = "jobanjit singh"
    and we want to convert name variable into number
    what !! How??...

    let stringTONum = Number(name) 

    and stringToNum value is NaN means (Not a Number) but its type is number

    In js we have Classes like for string conversion we have String()

*/

let name = "Jobanjit Singh"

let stringToNum = Number(name)

console.log(name)
console.log(typeof name)
console.log(stringToNum)
console.log(typeof stringToNum)

// Boolean Conversion means

variable = ""
var2 = 2
boolVal = Boolean(variable)
boolVal2 = Boolean(var2)
console.log(boolVal);
console.log(boolVal2);
// boolVal is false because empty string represent false in boolean

// conversion of null to number

a = null
console.log(Number(a)); // 0

// conversion of undefined to number

b = undefined
console.log(Number(b)); //NaN



