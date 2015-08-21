// Problem 7. Is prime
// Write an expression that checks if given positive integer number n (n ? 100) is prime.

console.log('----------------------------------------');
console.log('Task 7 output: Is prime ');
console.log('----------------------------------------');

var a = 37,
    b = 36;

console.log('a: '+ a + ' ' + isPrime(a));
console.log('b: '+ b + ' ' + isPrime(b));

function isPrime(number){
    if(number < 2) return false;

    for(var divisor = 2; divisor <= Math.sqrt(number); divisor++){
        if(!(number % divisor)) return false;
    }

    return true;
}