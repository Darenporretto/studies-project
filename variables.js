/**
 * 0: Variables are named containers for storing data. (... add a few more sentences to describe variables)
 * 
 * 1. Declaration and Assignment: In order to create a variable we must first `declare` it. Depending on the declarative keyword you use, you may initialize
 * the variable with a value or not. 
 * 
 * 2. Var, let, const: There are three declarative keywords that can be used to declare variables--var, let, const. (.. describe each keyword in detai)
 * 
 * 3: Hoisting: (... describe hoisting in detail)
 */

/**
 *VARIABLES
 *
 * 0: Variables are fundamental to programming, acting as placeholders for data that a 
 *program needs to manipulate and store. In JavaScript, a versatile and widely-used 
 *programming language, variables enable developers to create dynamic and interactive 
 *web applications. Understanding how to declare, assign, and use variables 
 *effectively is crucial for any JavaScript developer. 
 *
 *
 * 1.There are three declarative keywords: var, let, const,. Variables declared with 
 *var can only be function or global scoped.
 *
 * 2.Introduction to variables in JavaScript, covering their declaration and 
 *assignment, the differences between var, let, and const, and the concept of hoisting.
 */

// DECLARATION & ASSIGNMENT //
/**
 * In JavaScript, variables are declared using keywords and then assigned values. The 
 *basic syntax for declaring a variable is as follows:
 */

 var variableName;
//This statement declares a variable named variableName without assigning it an initial value. 
//To assign a value to this variable, the assignment operator (=) is used://
variableName = value;
//For example:
var name;
name = 'Daren';
/**
 * In the example above, the variable name is declared first and then assigned the 
 *string 'Daren'. JavaScript supports a variety of data types, including numbers, 
 *strings, objects, and arrays. Variables can be assigned any of these types
 */
var age = 38;             // Number
var greeting = 'Hello!'; // String
var isActive = true;     // Boolean
/**
 *In modern JavaScript, variables are often declared and assigned in a single statement, making the code more concise and readable.
 */

// VAR, LET, CONST //
/**
 *JavaScript provides three keywords for declaring variables: var, let, and const. 
 *Each has distinct characteristics and use cases.
 *var
 *The var keyword was the original way to declare variables in JavaScript, introduced 
 *in ECMAScript 1 (ES1). Variables declared with var are function-scoped or globally * 
 *scoped if declared outside of a function. This means that var declarations are 
 *accessible throughout the function in which they are declared or throughout the 
 *entire script if declared globally.
 */
function example() {
    var x = 10;
    if (true) {
        var x = 20; // Same variable, function-scoped
        console.log(x); // Outputs: 20
    }
    console.log(x); // Outputs: 20
}
/**
 * let
 *The let keyword, introduced in ECMAScript 6 (ES6), provides block-level scoping. 
 *Variables declared with let are only accessible within the block (e.g., within curly 
 *braces {}) in which they are declared. This makes let a better choice for loop 
 *counters and other block-scoped variables
 */
function example() {
    let x = 10;
    if (true) {
        let x = 20; // Different variable, block-scoped
        console.log(x); // Outputs: 20
    }
    console.log(x); // Outputs: 10
}
/**
 * const
 *The const keyword, also introduced in ES6, is used to declare variables whose values 
 *are not meant to be reassigned. Variables declared with const are also block-scoped. 
 *It is important to note that while const prevents reassignment, it does not make 
 *objects or arrays immutable; the contents of a const object or array can still be 
 *modified.
 */
const pi = 3.14159;
pi = 3.14; // Error: Assignment to constant variable.

const numbers = [1, 2, 3];
numbers.push(4); // Allowed

//HOISTING//
/**
 *Hoisting is a JavaScript mechanism where variables and function declarations are 
 *moved to the top of their containing scope during the compile phase. This means that 
 *variables declared with var are hoisted to the top of their function or global 
 *scope, allowing them to be used before their actual declaration in the code.
*/
console.log(x); // Outputs: undefined
var x = 5;
console.log(x); // Outputs: 5
/**
 *In the example above, the variable x is hoisted to the top of its scope. However, 
 *only the declaration is hoisted, not the assignment. Hence, console.log(x) before 
 *the assignment prints undefined.
 *
 *let and const Hoisting
 *Variables declared with let and const are also hoisted, but they are not 
 *initialized. This creates a "temporal dead zone" from the start of the block until 
 *the declaration is encountered. Accessing the variable before the declaration 
 *results in a ReferenceError.
 */
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
//Understanding the nuances of hoisting helps prevent errors and unintended behavior in JavaScript code.//


/**
 * VARIABLES IN JAVASCRIPT ARE ESSENTIAL FOR MANAGING AND MANIPULATING DATA. BY 
 *MASTERING VARIABLE DECLARATION AND ASSIGNMENT, THE DISTINCTIONS BETWEEN VAR, LET, 
 *AND CONST, AND THE CONCEPT OF HOISTING, DEVELOPERS CAN WRITE MORE PREDICTABLE AND 
 *RELIABLE CODE. WITH THESE TOOLS AND CONCEPTS, PROGRAMMERS CAN LEVERAGE JAVASCRIPT’S 
 *CAPABILITIES TO CREATE SOPHISTICATED AND DYNAMIC APPLICATIONS.
 */