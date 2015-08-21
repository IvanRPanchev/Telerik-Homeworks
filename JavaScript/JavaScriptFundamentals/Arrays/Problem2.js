//Write a script that compares two char arrays lexicographically (letter by letter).

console.log('----------------------------------------');
console.log('Task 2 output: Lexicographically comparison');
console.log('----------------------------------------');

var array1 = ['b', 'b', 'c', 'd', 'e'],
	array2 = ['a', 'b', 'c', 'd', 'e'],
	myIndex = 0;

for (myIndex; myIndex <array1.length+1;myIndex++) {
	if (array1[myIndex] === array2[myIndex]) {
		myIndex+=1;
		if (myIndex === array1.length) {

			console.log('The two arrays ARE lexicographically equal')
			break;
		};
}else {
	console.log('The two arrays AREN\'T lexicographically equal')
};
};
