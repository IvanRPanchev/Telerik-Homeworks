/*Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
Use a sequence of if operators.*/

console.log('----------------------------------------');
console.log('Task 2 output: Multiplication Sign');
console.log('----------------------------------------');

var a = 5,
	b = -2,
	c = -1;

if (a === 0 || b === 0 || c === 0) {
	console.log ('0')
} 	
else if (a < 0 && b < 0 && c < 0) {
	console.log ('-');
}
else if (a > 0 && b > 0 && c < 0) {
	console.log ('-');
}
else if (a > 0 && b < 0 && c > 0) {
	console.log ('-');
}
else if (a < 0 && b > 0 && c > 0) {
	console.log ('-');
}
else {
	console.log ('+');
}
