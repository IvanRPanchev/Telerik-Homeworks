//  Problem 2. Divisible by 7 and 5
//  Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.

console.log('----------------------------------------');
console.log('Task 2 output: Divisible by 7 and 5');
console.log('----------------------------------------');

function isDivisibleBy7And5(num) {
    return ((num % 7 === 0) && (num % 5 === 0)) ? true : false;
}

for (var i = 0; i < 211; i+=7) {
    console.log("Is " + i + " Divisible by 7 and 5: " + isDivisibleBy7And5(i));
}