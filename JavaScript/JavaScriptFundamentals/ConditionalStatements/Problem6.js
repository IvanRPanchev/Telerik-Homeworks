/*Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
Calculates and prints its real roots.*/

console.log('----------------------------------------');
console.log('Task 6 output: Quadratic equation');
console.log('----------------------------------------');

var a = 1,
	b = 5,
	c = 3,
	d,
	result1,
	result2,
	result3;

console.log('The quadratic equation is :' + a+'x2 + '+ b+'x + '+c)
d = (b*b - (4*a*c));
console.log('The determinant is ' +d)
if (d<0) {
	console.log ('No real roots');
}
else if (d === 0) {
	result1 = (-b / (2*a));
	console.log ('The root of this equation is '+result1);
}
else if (d > 0) {
	result2 = (-b + (d*d)) / (2*a);
	result3 = (-b - (d*d)) / (2*a);
	console.log ('The roots of this equation are ' +result2+' and '+result3);
}

