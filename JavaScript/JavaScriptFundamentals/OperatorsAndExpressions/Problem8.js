//  Problem 8. Trapezoid area
//  Write an expression that calculates trapezoid's area by given sides a and b and height h.

console.log('----------------------------------------');
console.log('Task 8 output: Trapezoid area');
console.log('----------------------------------------');

var a = 5,
	b = 10,
	h = 7.5;

function calculateTrapezoidArea(a, b, h) {
    if (isNaN(a) || isNaN(b) || isNaN(h)) {
        return null;
    }

    return ((a + b) / 2) * h;
}

console.log("a = 5, b = 10, h = 7.5, area: " + calculateTrapezoidArea(a, b, h));
