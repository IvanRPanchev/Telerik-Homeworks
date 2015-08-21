//Write a function to count the number of div elements on the web page

console.log('----------------------------------------');
console.log('Problem 4. Number of elements');
console.log('----------------------------------------');

function numberOfElements () {
	var answer = document.getElementsByTagName('div').length;
	
	return answer;
}

console.log('Number of div elements:' + numberOfElements());