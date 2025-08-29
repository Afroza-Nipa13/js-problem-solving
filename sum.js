// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10
function SumOfNumbers(num){
    let sum = 0;
    for(let i= 0; i< num.length; i++){
        sum +=num[i];
    
    }
    return sum;

}
console.log(SumOfNumbers([12,6,1,2,3]))