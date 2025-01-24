/**
 * OPERATORS
 *
 *0: Operators are fundamental to programming, acting as symbols that perform specific  *operations on operands (values or variables).
 *
 *1:Operators in JavaScript are symbols that perform operations on operands (values 
 *or variables). They are essential for performing calculations, comparisons, and 
 *logical operations.
 *
 *2:JavaScript includes various types of operators to handle different kinds 
 *of tasks. Below is an overview of the most commonly used operators with code 
 *examples.
 */

//ASSIGMENT OPERATORS//
/**
 *Assignment operators are used to assign values to variables. The most basic 
 *assignment operator is =, but there are several compound assignment operators that 
 *combine assignment with other operations.
 */
//EXAMPLE//
let x = 5; // Assignment operator
console.log(x); // Output: 5

x += 3; // Equivalent to x = x + 3
console.log(x); // Output: 8

x -= 2; // Equivalent to x = x - 2
console.log(x); // Output: 6

x *= 4; // Equivalent to x = x * 4
console.log(x); // Output: 24

x /= 3; // Equivalent to x = x / 3
console.log(x); // Output: 8

x %= 5; // Equivalent to x = x % 5
console.log(x); // Output: 3

//ARITHMETIC OPERATORS//
/**
 * Arithmetic operators are used to perform arithmetic calculations.
 */
//EXAMPLE//
let a = 10;
let b = 5;

console.log(a + b); // Addition: Output: 15
console.log(a - b); // Subtraction: Output: 5
console.log(a * b); // Multiplication: Output: 50
console.log(a / b); // Division: Output: 2
console.log(a % b); // Modulus (remainder): Output: 0
console.log(a ** b); // Exponentiation (a raised to the power of b): Output: 100000

//COMPARISON OPERATORS//
/**
 * Comparison operators are used to compare two values and return a Boolean result ** 
 * (true or false).
 */
//EXAMPLE//
let x = 10;
let y = 20;

console.log(x == y); // Equality: Output: false
console.log(x === y); // Strict Equality (same type and value): Output: false
console.log(x != y); // Inequality: Output: true
console.log(x !== y); // Strict Inequality (different type or value): Output: true
console.log(x > y); // Greater Than: Output: false
console.log(x < y); // Less Than: Output: true
console.log(x >= y); // Greater Than or Equal To: Output: false
console.log(x <= y); // Less Than or Equal To: Output: true

//LOGICAL OPERATORS//
/**
 *Logical operators are used to combine multiple Boolean expressions and evaluate
 *their results.
 */
//EXAMPLE//
let a = true;
let b = false;

console.log(a && b); // Logical AND: Output: false (true AND false is false)
console.log(a || b); // Logical OR: Output: true (true OR false is true)
console.log(!a); // Logical NOT: Output: false (NOT true is false)

//UNARY OPERATORS//
/**
 *Unary operators are used to perform operations on a single operand.
 */

//1:Negation (!): Converts a value to its Boolean opposite.//
//EXAMPLE//
let isTrue = true;
console.log(!isTrue); // Output: false

//2:Typeof: Returns the data type of its operand.//
//EXAMPLE//
let num = 42;
let str = "Hello";

console.log(typeof num); // Output: "number"
console.log(typeof str); // Output: "string"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object" (this is a known quirk in JavaScript)

//3:UNARY NEGATION (`-`)//
/**
 *Converts a value to its negative form. 
 */
//EXAMPLE//
let positive = 10;
let negative = -positive;

console.log(negative); // Output: -10

//TERNARY OPERATOR//
/**
 *The ternary operator is a shorthand for the if-else statement. It takes three 
 *operands: a condition, a value if the condition is true, and a value if the 
 *condition is false.
 */
//EXAMPLE//
let age = 18;
let canVote = (age >= 18) ? 'Yes' : 'No';

console.log(canVote); // Output: "Yes"

//JAVASCRIPT OPERATORS ARE A POWERFUL FEATURE THAT ALLOW DEVELOPERS TO MANIPULATE AND COMPARE DATA EFFICIENTLY. 
//UNDERSTANDING THES OPERATORS AND HOW TO USE THEM WIIL HELP YOU WRITE MORE EFFECTIVE AND CONCISE JAVASCRIPT CODE.//