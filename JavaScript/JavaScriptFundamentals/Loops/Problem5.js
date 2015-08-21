/*Sorting an array means to arrange its elements in increasing order.
Write a script to sort an array.
Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.*/

console.log('----------------------------------------');
console.log('Task 5 output: Selection sort');
console.log('----------------------------------------');

var myArray = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
	current = 0,
	next = 1,
	temporary,
	result = '';

for (current; current<myArray.length; current++) {
	for (next; next<myArray.length; next++) {
		if (myArray[current] > myArray[next]) {
			temporary = myArray[next];
			myArray[next] = myArray[current];
			myArray[current] = temporary;
		};
	};
};
console.log(myArray);