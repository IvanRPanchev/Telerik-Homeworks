/*Write a script that finds the biggest of three numbers.
Use nested if statements.*/

console.log('----------------------------------------');
console.log('Task 3 output: The biggest of Three');
console.log('----------------------------------------');

var a = 1,
	b = 22,
	c = -3,
	biggest;

if (a > b && a > c) {
	biggest = a
} 
else if (b>a && b>c) {
	biggest = b
}
else if (c>a && c > b) {
	biggest = c
}
console.log('The biggest number is ' + biggest)