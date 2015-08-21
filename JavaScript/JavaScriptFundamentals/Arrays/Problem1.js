/*Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
Print the obtained array on the console.*/

console.log('----------------------------------------');
console.log('Task 1 output: Increase array members');
console.log('----------------------------------------');

var myArray = new Array(20),
	myIndex;

for (myIndex = 0; myIndex <myArray.length; myIndex++) {
	myArray[myIndex] = myIndex*5
	console.log(myArray[myIndex])
};