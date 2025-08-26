
//1. getting unique items only form an array
// 2.function takes an array as parameter
//  * give me the average of the odd numbers in the array
//  1. put odd numbers in an array
// /* Write a loop 1 to 200. Use break to exit the loop once you find 100.
//3. Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
//4. Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
const array =[12, 22, 23, 22, 12, 12, 45]
function NoDuplicate(arr){
  let unique =[];   
    for(let num of arr){
        
        if(!unique.includes(num)){                                                                                  unique.push(num)
    }
    }

    return unique;
}

// console.log(NoDuplicate(array))
// 2
function AverageNum (numbers){
    let odd = [];
    for(let num of numbers){
        if(num % 2 == 1){
            odd.push(num)
        }
    }
        //now getting the sum of odd number so that i can get the ultimate average number
        let sum = 0
        for ( let num of odd){
            sum += num
        } 
        let length= odd.length;
        const average= sum / length;
        return average;
    } 

// console.log(AverageNum(array))


//3 
let i=1;
let sum = 0
while(true){
sum += i; 
if(sum>= 100){
    break;
}
i++;
 
} 
     
// console.log(sum)