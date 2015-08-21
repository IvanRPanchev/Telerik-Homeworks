//Write a script that finds the max and min number from a sequence of numbers.

console.log('----------------------------------------');
console.log('Task 3 output: Min/Max of sequence');
console.log('----------------------------------------');

var numbers = [1,2,3,4,-15,86,9923,23,15,65],
	i = 0,
	minI = 0,
	maxI = 0;
	

for (i ; i <= numbers.length; i++) {
	if (numbers[maxI] < numbers[i]) maxI = i;
    if (numbers[i] < numbers[minI]) minI = i;
}
console.log(numbers[minI]);
console.log(numbers[maxI]);
