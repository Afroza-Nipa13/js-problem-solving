// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

function DuplicatesNum(arr){
    let s= new Set(arr)
    const arr1= [...s]
    return arr1;

}
console.log(DuplicatesNum([1,2,23,45,23,45]))