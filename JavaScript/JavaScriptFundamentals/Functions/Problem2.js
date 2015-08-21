//Write a function that reverses the digits of given decimal number.

console.log('----------------------------------------');
console.log('Problem 2. Reverse number');
console.log('----------------------------------------');

function Reverser (number) {
	var numberAsString = number.toString(),
		result = '',
		i;
		for (var i = numberAsString.length - 1; i >= 0; i--) {
			result += numberAsString[i];
		}
	
	return result;
}
console.log(Reverser(256));