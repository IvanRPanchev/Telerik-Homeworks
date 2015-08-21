//Write a script that finds the maximal increasing sequence in an array.

console.log('----------------------------------------');
console.log('Task 4 output:Maximal increasing sequence');
console.log('----------------------------------------');

var myArray = [3, 2, 3, 4,5,6,8, 2, 2, 4,2, 3, 4,5,6,100,1000],
	current=0,
	next=1,
	currentCounter=1,
	maxCounter=0,
	maxIndex=0,
	k,
	result = '';

for (current; current<myArray.length; current++) {
	
		if (myArray[current]<myArray[next]) {
			currentCounter+=1;
			if (currentCounter>maxCounter) {
				maxCounter=currentCounter;
				maxIndex=next;
			};
		}else {
			currentCounter=1;
		}
	next+=1;
};


for (k=maxCounter;  k>0;k--) {
	result = result + myArray[maxIndex - k+1]+' '
};
console.log (result);