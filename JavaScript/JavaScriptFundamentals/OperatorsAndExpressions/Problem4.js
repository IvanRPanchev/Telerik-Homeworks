//  Problem 4. Third digit
//  Write an expression that checks for given integer if its third digit (right-to-left) is 7.

console.log('----------------------------------------');
console.log('Task 4 output: Is third digit 7 ? ');
console.log('----------------------------------------');

var a = 10,
	b = 70,
	c = 700,
	d = 7000,
	e = 7700;


function checkThirdDigit(num) {
    var div = Math.floor(num / 100) % 10;
    return div === 7;
}

console.log("a: " + a + ' ' + checkThirdDigit(a));
console.log("b: " + b + ' ' + checkThirdDigit(b));
console.log("c: " + c + ' ' + checkThirdDigit(c));
console.log("d: " + d + ' ' + checkThirdDigit(d));
console.log("e: " + e + ' ' + checkThirdDigit(e));

