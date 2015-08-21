//Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time

console.log('----------------------------------------');
console.log('Task 2 output: Numbers not divisible');
console.log('----------------------------------------');

	var i,
		N = 150;
for (i = 1; i <=N; i++) {
	if (i % 7 ===0 && i %3 ===0) {
		console.log(i)
	};
};