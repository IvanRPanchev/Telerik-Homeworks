//  Problem 6. Point in Circle
//  Write an expression that checks if given point P(x, y) is within a circle K(O, 5).

console.log('----------------------------------------');
console.log('Task 6 output: Point in Circle ');
console.log('----------------------------------------');

var a = [0,0],
	b = [5.1, 5.1];

console.log('a: '+ a + ' ' + isInside(a[0], a[1], 0, 0, 5));
console.log('b: '+ b + ' ' + isInside(b[0], b[1], 0, 0, 5));

function isInside(x, y, cx, cy, r){
    return (x - cx) * (x - cx) + (y - cy) * (y - cy) < r * r;
}