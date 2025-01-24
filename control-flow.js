/**
 * CONTROL FLOW
 *
 *0: Control flow is the order in which statements are executed in a program.
 *
 *1: Control flow is used to control the flow of execution within a program.
 *
 *2:Control flow in JavaScript determines the order in which code statements are 
 *executed based on certain conditions. This enables you to create dynamic and 
 *responsive programs. JavaScript provides several control flow structures that help 
 *you manage decision-making and branching logic. The most common control flow n 
 *statements include if, else-if, else, and switch.
 */

/**
 *1. The if Statement
 *The if statement evaluates a condition and executes a block of code only if the 
 *condition is true.
 */
//SYNTAX//
if (condition) {
    // Code to execute if the condition is true
}
//EXAMPLE: In this example, the if statement checks if the temperature is greater than 70. 
//Since the condition is true, the message is printed.//
let temperature = 75;

if (temperature > 70) {
    console.log('It is warm outside.');
}
// Output: 'It is warm outside.'

/**
 *2. The else-if Statement
 *The else-if statement allows you to check additional conditions if the previous if 
 *condition was false. It is used to specify multiple possible conditions.
 */
//SYNTAX//
if (condition1) {
    // Code to execute if condition1 is true
} else if (condition2) {
    // Code to execute if condition2 is true
}
//EXAMPLE: Here, if the temperature is not above 95, the else-if condition checks if it's above 75, 
//providing a different message based on the result.//
let temperature = 75;

if (temperature > 95) {
    console.log('It is hot outside.');
} else if (temperature > 75) {
    console.log('It is warm outside.');
}
// Output: 'It is warm outside.'

/**
 *3. The else Statement
 *The else statement provides a default block of code to execute when none of the 
 *previous conditions are met.
 */
//SYNTAX//
if (condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}
//EXAMPLE: In this case, since the temperature is not above 60, the else block executes, providing the default message.//
let temperature = 50;

if (temperature > 60) {
    console.log('It is warm outside.');
} else {
    console.log('It is cold outside.');
}
// Output: 'It is cold outside.'

/**
 *4. The switch Statement
 *The switch statement is used to execute one block of code among multiple options 
 *based on the value of an expression. It provides a more concise way to handle 
 *multiple conditions compared to using multiple if statements.
 */
//SYNTAX//
switch (expression) {
    case value1:
        // Code to execute if expression equals value1
        break;
    case value2:
        // Code to execute if expression equals value2
        break;
    default:
        // Code to execute if expression does not match any cases
}
//EXAMPLE:In this example, the switch statement checks the value of day and executes the corresponding block of code. 
//If day equals 3, it prints 'Wednesday'.//
let day = 3;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    default:
        console.log('Weekend');
}
// Output: 'Wednesday'


/*
CONTROL FLOW STATEMENTS SUCH AS `if`, `else-if`, and `switch` 
ARE ESSENTIAL FOR DIRECTING THE EXECUTION OF YOUR CODE BASED ON CONDITIONS. 
USING THESE STATEMENTS EFFECTIVELY ALLOWS YOU TO MANIPULATE 
DIFFERENT SCENARIOS, HANDLE VARIOUS CASES, 
AND MAKE YOUR CODE MORE DYNAMIC AND ADAPTABLE
*/