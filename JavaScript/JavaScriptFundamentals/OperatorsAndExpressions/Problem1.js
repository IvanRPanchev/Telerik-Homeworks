//  Problem 1. Odd or Even
//  Write an expression that checks if given integer is odd or even.
console.log('----------------------------------------');
console.log('Task 1 output: Odd or Even');
console.log('----------------------------------------');

function isOdd(num) {
    return Boolean(num & 1);
}

for (var i = 1; i < 5; i++) {
    console.log("Is " + i + " odd: " + isOdd(i));
}