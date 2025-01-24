/**
 * STRING MANIPULATIONS
 *
 *0:Strings are a fundamental data type in JavaScript, representing sequences of 
 *characters.
 *
 *1:Manipulating strings effectively is crucial for handling text data, formatting 
 *output, and performing various operations in programming. JavaScript provides a rich 
 *set of operators and methods to manipulate strings.
 *
 *2:This covers both the use of operators and built-in methods for string 
 *manipulation, with explanations and code examples.
 */

//STRING MANIPULATION WITH OPERATORS//
/**
 *JavaScript provides several operators specifically for working with strings. These 
 *include concatenation, template literals, and more:
 */

//EXAMPLES//

//Concatenation (+ operator): Combines two or more strings into a single string.//
let firstName = 'Jane';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log(fullName); // Output: 'Jane Doe'

//Concatenation Assignment (+= operator): Appends a string to an existing string.//
let greeting = 'Hello';
greeting += ', World!';
console.log(greeting); // Output: 'Hello, World!'

//Template Literals (`): Allows for embedding expressions and multi-line strings. Variables can be included within strings using ${} syntax.//
let name = 'Daren';
let age = 38;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // Output: 'Hello, my name is Daren and I am 38 years old.'

//STRING MANIPULATION WITH STRING METHODS//
/**
*JavaScript provides a variety of built-in methods to manipulate strings. These 
*methods allow for searching, replacing, and transforming text:
*/

//EXAMPLES//

//charAt(index): Returns the character at the specified index.//
let str = 'Hello, World!';
console.log(str.charAt(7)); // Output: 'W'

//charCodeAt(index): Returns the Unicode value of the character at the specified index.//
let str = 'Hello, World!';
console.log(str.charCodeAt(7)); // Output: 87 (Unicode value for 'W')

//concat(...strings): Joins two or more strings into one.//
let str1 = 'Hello';
let str2 = 'World';
let combined = str1.concat(' ', str2);
console.log(combined); // Output: 'Hello World'

//includes(substring): Checks if a substring is present in the string, returning true or false.//
let str = 'Hello, World!';
console.log(str.includes('World')); // Output: true
console.log(str.includes('world')); // Output: false (case-sensitive)

//indexOf(substring): Returns the index of the first occurrence of a substring, or -1 if not found.//
let str = 'Hello, World!';
console.log(str.indexOf('World')); // Output: 7
console.log(str.indexOf('world')); // Output: -1

//lastIndexOf(substring): Returns the index of the last occurrence of a substring, or -1 if not found.//
let str = 'Hello, World! Hello!';
console.log(str.lastIndexOf('Hello')); // Output: 13

//replace(searchValue, newValue): Replaces the first occurrence of a substring with a new substring. 
//For global replacements, use a regular expression with the g flag.//
let str = 'Hello, World!';
let newStr = str.replace('World', 'JavaScript');
console.log(newStr); // Output: 'Hello, JavaScript!'

let str2 = 'Hello, World! Hello, World!';
let newStr2 = str2.replace(/World/g, 'JavaScript');
console.log(newStr2); // Output: 'Hello, JavaScript! Hello, JavaScript!'

//slice(start, end): Extracts a section of the string and returns it as a new string. Negative indices count from the end.//
let str = 'Hello, World!';
console.log(str.slice(0, 5)); // Output: 'Hello'
console.log(str.slice(-6)); // Output: 'World!'

//split(separator): Splits a string into an array of substrings based on a separator.//
let str = 'apple,banana,cherry';
let fruits = str.split(',');
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

//toLowerCase(): Converts all characters in the string to lowercase.//
let str = 'Hello, World!';
console.log(str.toLowerCase()); // Output: 'hello, world!'

//toUpperCase(): Converts all characters in the string to uppercase.//
let str = 'Hello, World!';
console.log(str.toUpperCase()); // Output: 'HELLO, WORLD!'

//trim(): Removes whitespace from both ends of the string.//
let str = '   Hello, World!   ';
console.log(str.trim()); // Output: 'Hello, World!'

//STRING MANIPULATION IS A CRUCIAL SKILL IN JAVASCRIPT FOR HANDLING AND PROCESSING TEXT DATA. 
//BY UNDERSTANDING AND USING OPERATORS AND MRTHODS PROVIDED NY JAVASCRIPT, YOU CAN EFFICIENTLY CREATE, MODIFY AND ANALYZE STRINGS. 
//MASTERING OF THESE TECHNIQUES ENABLES MORE EFFECTIVE AND FLEXIBLE HANDLING OF THE TEXT WITHIN YOUR APPLICATION.//