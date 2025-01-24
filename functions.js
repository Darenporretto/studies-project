/**
 * FUNCTIONS
 *
 * 0:Functions are one of the core building blocks in JavaScript.
 *
 * 1:They allow you to encapsulate reusable pieces of code, making your programs more 
 *modular and easier to maintain
 *
 *2:Here we will cover various aspects of functions, including their usage, syntax, 
 *and important concepts like scope and closures.
 */

/**
 *1:The Two Phases to Using Functions
 *Using functions in JavaScript involves two main phases:
 *
 *a. Declaration (or Definition): This is where you define what the function does. In 
 *this phase, you specify the function’s name, parameters, and the code it should 
 *execute.
 *
 *b. Execution (or Invocation): Once a function is declared, you can call it or 
 *execute it by using its name followed by parentheses. During execution, you can pass 
 *arguments to the function, which are used as inputs for the function’s code.
 */
//EXAMPLE: In this example, greet is the function being declared, and greet('Daren') is the function call.//
// Declaration
function greet(name) {
    console.log('Hello, ' + name + '!');
}
// Execution
greet('Daren'); // Output: Hello, Daren!

/**
 *2. Difference Between Parameters and Arguments
 *Parameters are the names listed in the function definition. They act as placeholders 
 *for the values that will be passed to the function.
 *Arguments are the actual values you pass to the function when calling it.
 *
 * EXAMPLE:Here, a and b are parameters of the add function, while 5 and 3 are the 
 *arguments passed when calling the function
 */
function add(a, b) { // `a` and `b` are parameters
    return a + b;
}
console.log(add(5, 3)); // Output: 8
// 5 and 3 are arguments

/**
 *3. Syntax for a Named Function
 *A named function in JavaScript is defined using the function keyword followed by the 
 *function’s name, a list of parameters in parentheses, and a block of code in curly 
 *braces.
 */
//SYNTAX//
function functionName(parameters) {
    // Code to execute
}
//EXAMPLE: Here, multiply is the name of the function.//
function multiply(x, y) {
    return x * y;
}


/**
 *4. Assigning a Function to a Variable
 *Functions can also be assigned to variables. This is known as a function expression. 
 *The syntax is similar to a function declaration, but without a name.
 */
//SYNTAX//
const functionName = function(parameters) {
    // Code to execute
};
//EXAMPLE: In this case, divide is a variable holding an anonymous function.//
const divide = function(x, y) {
    return x / y;
};

console.log(divide(10, 2)); // Output: 5


/**
 *5. Specifying Inputs and Outputs
 *
 *Inputs: To specify inputs, list parameters within the parentheses in the function 
 *definition. You can provide default values for parameters if needed.
 *
 *Outputs: A function returns a value using the return statement. If no return 
 *statement is used, the function returns undefined by default.
 */
//EXAMPLE: In this example, number is an input (parameter), and the result of number * number is the output.//
function square(number) {
    return number * number; // Output
}

console.log(square(4)); // Output: 16


/**
 *6. Scope
 *Scope refers to the accessibility of variables. Functions can access and modify 
 *variables from their parent or global scopes. However, variables declared inside a 
 *function are local to that function and cannot be accessed from outside it. 
 */
//EXAMPLE: Here, globalVar is accessible inside and outside the function, 
//while localVar is only accessible within the showScope function.//
let globalVar = 'I am global';

function showScope() {
    let localVar = 'I am local';
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

showScope();

console.log(globalVar); // Accessible
console.log(localVar);  // Error: localVar is not defined

/**
 *7. Closures
 *A closure is a function that retains access to its lexical scope even after the 
 *function has finished executing. This means that if a function is returned from 
 *another function, it keeps access to the variables from its containing function.
 */
//EXAMPLE: In this example, the inner function maintains access to the count variable from the createCounter function’s scope. 
//Even though createCounter has finished executing, count persists because of the closure//
function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

//FUNCTIONS IN JAVASCRIPT ARE VERSATILE AND FUNDAMENTAL TO WRITING EFFECTIVE CODE. 
//THEY ALLOW YOU TO ENCAPSULATE CODE INTO REUSABLE BLOCKS, MANAGE SCOPE EFFECTIVELY, 
//AND LEVERAGE POWERFUL CONCEPTS LIKE CLOSURES TO CREATE MORE COMPLEX AND FUNCTIONAL PROGRAMS. 
//UNDERSTANDING HOW TO DEFINE, CALL, AND MANIPULATE FUNCTIONS IS CRUCIAL FOR ANY JAVASCRIPT DEVELOPER.//