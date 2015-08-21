/*Write a script that finds the greatest of given 5 variables.
Use nested if statements.*/

console.log('----------------------------------------');
console.log('Task 7 output: The biggest of five numbers');
console.log('----------------------------------------');

var a=2,
	b=4,
	c=6,
	d=3,
	e=-12,
	biggest;

if (a > b) {
	if (a > c) {
		if (a > d) {
			if (a > e) {
				biggest = a;
			};
		};
	};
};
if (b > a) {
	if (b > c) {
		if (b > d) {
			if (b > e) {
				biggest = b;
			};
		};
	};
};
if (c > b) {
	if (c > a) {
		if (c > d) {
			if (c > e) {
				biggest = c;
			};
		};
	};
};
if (d > b) {
	if (d > c) {
		if (d > a) {
			if (d > e) {
				biggest = d;
			};
		};
	};
};
if (e > b) {
	if (e > c) {
		if (e > d) {
			if (e > a) {
				biggest = e;
			};
		};
	};
};
console.log ('The biggest number is ' + biggest);