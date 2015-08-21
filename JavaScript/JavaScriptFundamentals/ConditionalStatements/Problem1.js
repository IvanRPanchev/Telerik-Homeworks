/*Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
As a result print the values a and b, separated by a space.*/

console.log('----------------------------------------');
console.log('Task 1 output: Exchange if greater');
console.log('----------------------------------------');

var a = 5,
	b = 4,
	temp;

console.log ('a = ' + a +' , b = ' + b)
if (a>b) {
	temp=a;
	a=b;
	b=temp;
};
console.log ('Result after the if statement')
console.log ('a = ' + a +' , b = ' + b)