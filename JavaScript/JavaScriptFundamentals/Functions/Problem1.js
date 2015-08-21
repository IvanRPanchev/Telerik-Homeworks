//Write a function that returns the last digit of given integer as an English word.

console.log('----------------------------------------');
console.log('Problem 1. English digit');
console.log('----------------------------------------');

function lastDigit (number) {
	var lastDig = number%10;
	switch (lastDig) {
		case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
		default: return 'invalid number';
	}
}

console.log(lastDigit(666)); //change number to see different results.