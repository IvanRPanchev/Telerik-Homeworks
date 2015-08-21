/*Sort 3 real values in descending order.
Use nested if statements.*/

console.log('----------------------------------------');
console.log('Task 4 output: Sort 3 numbers');
console.log('----------------------------------------');

var a = 1,
	b = 2,
	c = 3;

if (a > b && a > c) {
	if (b > c) {
		console.log(a +', '+ b+', ' + c)
	}
	else {
		console.log(a +', '+c+', '+b)
	}
}
else if (b > c) {
	if (a > c) {
		console.log(b+', '+a+ ', '+c)
	}
}
else {
	if (b > a) {
		console.log(c+', '+b+ ', '+a)
	}
	else {
		console.log(c+', '+a+ ', '+b)
	}
};