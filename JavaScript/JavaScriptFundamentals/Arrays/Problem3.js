//Write a script that finds the maximal sequence of equal elements in an array.

console.log('----------------------------------------');
console.log('Task 3 output: Maximal sequence');
console.log('----------------------------------------');

var myArray = [2, 1, 1, 2, 3, 3,3,3,3,3, 2, 2, 2, 1],
	current=0,
	next=1,
	currentCounter=1,
	maxCounter=0,
	maxIndex=0,
	result = '';

for (current; current<myArray.length; current++) {
	
		if (myArray[current]===myArray[next]) {
			currentCounter+=1;
			if (currentCounter>maxCounter) {
				maxCounter=currentCounter;
				maxIndex=current;
			};
		}else {
			currentCounter=1;
		}
	next+=1;
};

for (maxCounter; maxCounter >0; maxCounter--) {
	result = result + myArray[maxIndex] + ' '
};
console.log (result);