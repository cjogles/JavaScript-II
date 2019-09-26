// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a 
// solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



//   GIVEN THIS PROBLEM:

//   function firstItem(arr, cb) {
//     firstItem passes the first item of the given array to the callback function.
//   }

//   SOLUTION:

//   function firstItem(arr, cb) {
//     return cb(arr[0]);
//   }

//   NOTES ON THE SOLUTION:

//   firstItem is a higher order function.
//   It expects a callback (referred to as `cb`) as its second argument.
//   To test our solution, we can use the given `items` array and a variety of callbacks.
//   Note how callbacks can be declared separately, or inlined.

//   TEST 1 (inlined callback):

//   const test1 = firstItem(items, item => `I love my ${item}!`);
//   console.log(test1); // "I love my Pencil!"

//   TEST 2 (declaring callback before hand):

//   function logExorbitantPrice(article) {
//     return `this ${article} is worth a million dollars!`;
//   };

//   const test2 = firstItem(items, logExorbitantPrice);
//   console.log(test2); // "this Pencil is worth a million dollars!"




// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
// //PROBLEM 1
// function getLength(arr, cb) {
//   //getLength passes the length of the array into the callback.
//   return cb(arr.length);
// }

// const prob1 = getLength(items, length => `Length of array is ${length}`);
// console.log(prob1);


// PROBLEM 2
// function last(arr, cb) {
//   last passes the last item of the array into the callback.
//   return cb(arr[arr.length - 1]);
// }

// Not inline this time, but callback is declared outside of function
// function lastItem(finalItem) {
//   return `passed the last item of array into callback! This is it --> ${finalItem}`;
// }
// const prob2 = last(items, lastItem);
// console.log(prob2);


// PROBLEM 3
// function sumNums(x, y, cb) {
//   sumNums adds two numbers (x, y) and passes the result to the callback.
//   return cb(x+y);
// }

// const prob3 = sumNums(2,3, sum => `here is the sum of the two numbers I passed in --> ${sum}`);
// console.log(prob3);


// PROBLEM 4
// function multiplyNums(x, y, cb) {
//   multiplyNums multiplies two numbers and passes the result to the callback.
//   return cb(x*y);
// }

// let prob4 = multiplyNums(2,2, product => `here is the product of the two numbers I passed in --> ${product}`);
// console.log(prob4);

//PROBLEM 5
// function contains(item, list, cb) {
//   //contains checks if an item is present inside of the given array/list.
//   if (list.includes(item)) {
//     //Pass true to the callback if it is, otherwise pass false.
//     return cb(true);
//   } else {
//     return cb(false);
//   }
// }

// const prob5 = contains("Yo", items, trueOrFalse => `if the item is in the array its true else its false --> ${trueOrFalse}`);
// console.log(prob5);



// /* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   removeDuplicates removes all duplicate values from the given array.
//   Pass the duplicate free array to the callback function.
//   Do not mutate the original array.
// }

// const items2 = ['Pencil', 'Notebook', 'Notebook', 'yo-yo', 'Gum', 'Pencil'];

// let callback = (chosenArray) => {
//   let placeholder = chosenArray[0];

//   return chosenArray;
// }

// function removeDuplicates(array, cb) {
//   letDuplicateFreeArray.push(array);

//   return cb(duplicateFreeArray);
// }

// console.log(removeDuplicates(items, callback));
