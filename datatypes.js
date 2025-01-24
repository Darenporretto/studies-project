/**
 *DATA TYPES
 *
 *0: Data types in JavaScript are the different types of values that a variable can hold.
 * 
 *1: JavaScript has a wide range of data types, including numbers, strings, booleans, 
 *objects, and more. Each data type are crucial for determining how values are stored 
 *and manipulated. JavaScript has a variety of data types, each serving different 
 *purposes. Understanding these data types is essential for effective programming in 
 *JavaScript. Below is an overview of the fundamental data types with code examples.
 *
 *2:The Number data type represents both integer and floating-point numbers. 
 *JavaScript uses a double-precision 64-bit binary format to represent numbers.
 * 
 */

//1. NUMBERS //
/**
 *In JavaScript, numbers are used to represent both integers and floating-point numbers.
 */
//EXAMPLE//
let integer = 42; // An integer
let floatingPoint = 3.14; // A floating-point number

console.log(integer); // Output: 42
console.log(floatingPoint); // Output: 3.14

//2. STRINGS//
/**
 *In JavaScript, strings are used to represent textual data. They are enclosed in      
 *'single'quotes, "double" quotes or `backticks`.
 */
//EXAMPLE//
let singleQuoteString = 'Hello, world!';
let doubleQuoteString = "Hello, world!";
let templateString = `Hello, world!`;

console.log(singleQuoteString); // Output: Hello, world!
console.log(doubleQuoteString); // Output: Hello, world!
console.log(templateString); // Output: Hello, world!

//3. BOOLEANS//
/**The Boolean data type represents a logical entity and can have two values: true or   *false.
 */
//EXAMPLE//
let isTrue = true;
let isFalse = false;

console.log(isTrue); // Output: true
console.log(isFalse); // Output: false

//4. ARRAYS//
/**
 *In JavaScript, arrays are used to store and manipulate collections of elements.
 *An Array is a complex data type used to store multiple values in a single variable.  
 *Arrays can hold values of different types and are indexed starting from 0.
 */
//EXAMPLE//
let fruits = ['apple', 'banana', 'cherry'];

console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: cherry

//5. OBJECTS//
/**
 *In JavaScript, objects are used to represent complex data structures and are often   
 *used to represent entities with properties and methods
 */
//EXAMPLE//
let person = {
    name: 'Daren Porretto',
    age: 38,
    isEmployed: false
};

console.log(person.name); // Output: Daren Porretto
console.log(person.age); // Output: 38
console.log(person.isEmployed); // Output: false

//6. FUNCTION//
/**
 *In JavaScript, functions are used to encapsulate reusable code blocks. They are      
 *defined using the function keyword and can take parameters.A Function is a block of   
 *code designed to perform a particular task. Functions can be defined using 
 *function declarations or expressions.
 */
//EXAMPLE//
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Daren')); // Output: Hello, Daren!

//7. UNDEFINED//
/**
 *In JavaScript, undefined is a special value that represents the absence of a value. 
 *It is often used as a default value.The undefined data type represents a variable    
 *that has been declared but has not yet been assigned a value.
 */
//EXAMPLE//
let value;
console.log(value); // Output: undefined

//8. NULL//
/**
 *In JavaScript, null is a special value that represents the intentional absence of a  
 *value. It is often
 *The null data type represents an intentional absence of any object value. It is      
 *often used to indicate that a variable has been explicitly set to have no value.
 */
//EXAMPLE//
let emptyValue = null;
console.log(emptyValue); // Output: null

//9. NaN//
/**
 *In JavaScript, NaN (Not a Number) is a special value that represents a result of an  
 *arithmetic operation that stands for "Not-a-Number" and represents a value that   
 *is not a legal number. It results from invalid mathematical operations.
 */
//EXAMPLE//
let result = 0 / 0; // Division by zero
console.log(result); // Output: NaN

//10. INFINITY AND NEGATIVE INFINITY//
/**
 *Infinity represents a value that is beyond the largest possible number, while    
 *-Infinity represents a value that is beyond the smallest possible number (negative   
 *infinity).
 */
//EXAMPLE//
let positiveInfinity = 1 / 0;
let negativeInfinity = -1 / 0;

console.log(positiveInfinity); // Output: Infinity
console.log(negativeInfinity); // Output: -Infinity

//11. PRIMITIVE VS COMPLEX DATA TYPES//
/**
 *Primitive Data Types: These include Number, String, Boolean, undefined, null, NaN,   
 *Infinity, and -Infinity. They represent single values and are immutable (cannot be    
 *changed).
 *
 *Complex Data Types: These include Array, Object, and Function. They can store        
 *multiple values and can be modified. Complex types are collections of multiple        
 *values or properties.
 */

// 12.Primitive Values vs. Complex Values (Passing by Copy vs. Reference)//
/**
 *Primitive Values (Passed by Copy):// When a primitive value is assigned to another
 *variable or passed to a function, a copy of the value is created. Changes to the new  *variable do not affect the original value.
 */
//EXAMPLE//
let a = 10;
let b = a; // Copy of a
b = 20;

console.log(a); // Output: 10
console.log(b); // Output: 20

/**  
 *Complex Values (Passed by Reference): When a complex value (like an object or    
 *array) is assigned to another variable or passed to a function, a reference to the    
 *original value is used. Changes to the new variable affect the original value.
 */
//EXAMPLE//
let originalArray = [1, 2, 3];
let newArray = originalArray; // Reference to originalArray
newArray.push(4);

console.log(originalArray); // Output: [1, 2, 3, 4]
console.log(newArray); // Output: [1, 2, 3, 4]

//UNDERSTANDING THESE DATA TYPES AND THEIR BEHAVIORS IS FUNDAMENTAL TO WRITING EFFECTIVE JAVASCRIPT CODE.// 