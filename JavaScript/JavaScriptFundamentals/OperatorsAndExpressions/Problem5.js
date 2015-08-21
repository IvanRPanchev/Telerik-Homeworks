//  Problem 5. Third bit
//  Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
//    The bits are counted from right to left, starting from bit #0.
//  The result of the expression should be either 1 or 0.

console.log('----------------------------------------');
console.log('Task 5 output: Third bit value ');
console.log('----------------------------------------');

var a = 10,
	b = 0,
	c = 700,
	d = 5,
	e = 5343,
	f = 62241;

function checkThirdBit(num) {
    return (num >> 3) & 1;
}

console.log("a: " + a + ' ' + checkThirdBit(a));
console.log("b: " + b + ' ' + checkThirdBit(b));
console.log("c: " + c + ' ' + checkThirdBit(c));
console.log("d: " + d + ' ' + checkThirdBit(d));
console.log("e: " + e + ' ' + checkThirdBit(e));
console.log("f: " + f + ' ' + checkThirdBit(f));