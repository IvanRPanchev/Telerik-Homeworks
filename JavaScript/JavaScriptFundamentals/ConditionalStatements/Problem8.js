//Write a script that converts a number in the range [0…999]
// to words, corresponding to its English pronunciation.

console.log('----------------------------------------');
console.log('Task 8 output: Number as words');
console.log('----------------------------------------');

var ones = new Array(
	' zero', ' one', ' two', ' three', ' four', ' five', 
	' six', ' seven', ' eight', ' nine', ' ten', ' eleven', 
	' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', 
	' seventeen', ' eighteen', ' nineteen'),
	tens = new Array(
	' ', ' ', ' twenty', ' thirty', ' forty', 
	' fifty', ' sixty', ' seventy', ' eighty', ' ninety'),
	hundred = ' hundred',
	output = '';
	numToWords = function(num) {
	if (num < 20) return ones[num];
	else if (num % 10 === 0 && num > 19 && num < 100) return tens[num/10];
	else if (num % 100 === 0 && num > 99 && num < 1000) return ones[num/100] + hundred;
	else if (num % 10 !== 0  && num > 100 && num < 1000 ) {
		return ones[Math.floor(num/100)] + hundred 
		+ ' and' + tens[Math.floor(num/10 % 10)] + ones[Math.floor(num/1 % 10)];
	}
	else {
		return tens[Math.floor(num/10 % 10)] + ones[Math.floor(num/1 % 10)];
	}
};
var aNums = [0,9,10,12,19,25,98,154,273,400,501,617,711,999];
for (var i = 0; i < aNums.length; i++) {
	console.log(numToWords(aNums[i]));
}