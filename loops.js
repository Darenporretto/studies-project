/**
 * LOOPS
 *
 *0:Loops in JavaScript are used to execute a block of code repeatedly based on 
 *certain conditions.
 *
 *1:They are essential for performing repetitive tasks and iterating over data 
 *structures like arrays and objects. JavaScript provides several types of loops to suit 
 *different needs: while, for, and for-in loops.
 *
 *2:We will cover these loops and demonstrates how to use them to count up 
 *or down, and iterate over arrays and objects.
 */

/**
 *1. Types of Loops
 *
 *a. The while Loop
 *The while loop executes a block of code as long as a specified condition is true. It 
 *is useful when the number of iterations is not known beforehand and depends on a 
 *condition.
 */
//SYNTAX//
while (condition) {
    // Code to execute while the condition is true
}
//EXAMPLE: Here, the while loop prints numbers from 0 to 4. The loop continues to execute as long as count is less than 5.//
let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}
// Output: 0, 1, 2, 3, 4

/**
 *b. The for Loop
 *The for loop is typically used when the number of iterations is known in advance. It 
 *is a compact way to create a loop with initialization, condition-checking, and 
 *increment/decrement in one statement.
 */
//SYNTAX//
for (initialization; condition; increment) {
    // Code to execute on each iteration
}
//EXAMPLE: This for loop prints numbers from 0 to 4. 
//It starts with i = 0, runs while i is less than 5, and increments i by 1 on each iteration.//
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4

/**
 *c. The for-in Loop
 *The for-in loop iterates over the enumerable properties of an object. It is used to 
 *loop through the keys of an object.
 */
//SYNTAX//
for (let key in object) {
    // Code to execute for each key-value pair
}
//EXAMPLE: In this example, the for-in loop iterates over each property of the person object and logs the key and value.//
const person = {
    name: 'Daren',
    age: 38,
    occupation: 'Student'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}
// Output:
// name: Daren
// age: 38
// occupation: Student

/**
 * 2. Looping Forward and
 *
 * a. Forward Counting Up
 *You can use the for loop to count up to a specified limit.
 */
//EXAMPLE//
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5


/**
 *b. Backward Counting Down
 *You can also use the for loop to count down from a specified limit to zero.
 */
for (let i = 5; i >= 0; i--) {
    console.log(i);
}
// Output: 5, 4, 3, 2, 1, 0


/**
 *3. Looping Over Arrays
 * 
 *a. Forward Looping
 *You can use the for loop to iterate over an array from the beginning to the end
 */
//EXAMPLE//
const fruits = ['apple', 'banana', 'cherry'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output: apple, banana, cherry

/**
 *b. Backward Looping
 *You can loop over an array backwards by starting from the end and decrementing the 
 *index.
 */
//EXAMPLE//
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}
// Output: cherry, banana, apple


/**
 *4. Looping Over Objects
 *To loop over the properties of an object, use the for-in loop, as shown earlier. It 
 *will iterate over each key in the object.
 */
//EXAMPLE//
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2012
};

for (let key in car) {
    console.log(key + ': ' + car[key]);
}
// Output:
// make: Toyota
// model: Corolla
// year: 2012

//LOOPS ARE A FUNDEMENTAL PART OF JAVASCRIPT AND ARE ESSENTIAL FOR PERFORMING REPETITIVE TASKS AND 
//ITERATING OVER DATA STRUCTURES LIKE ARRAYS AND OBJECTS. 
//THEY ENABLE YOU TO WRITE MORE EFFICIENT AND CONCISE JAVASCRIPT CODE.//