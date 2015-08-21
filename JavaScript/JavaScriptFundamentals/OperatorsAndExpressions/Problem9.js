// Problem 9. Point in Circle and outside Rectangle
// Write an expression that checks for given point P(x, y)
// if it is within the circle K( (1,1), 3) and out of 
// the rectangle R(top=1, left=-1, width=6, height=2).

console.log('----------------------------------------');
console.log('Task 9 output: Point in Circle and outside Rectangle ');
console.log('----------------------------------------');

var rectangle = [1, -1, -1, 5], circle = [1, 1, 3], a = [2, 2], b = [1, 1];

console.log('Does point a fit the conditions?' + ' ' + fitsConditions(a[0], a[1]));
console.log('Does point b fit the conditions?' + ' ' + fitsConditions(b[0], b[1]));

function fitsConditions(x, y){
	return (isInsideCircle(x, y, circle[0], circle[1], circle[2]) &&
			isOutsideRectangle(x, y, rectangle[0], rectangle[1], rectangle[2], rectangle[3])) ? 'yes' : 'no';
}
		 
function isInsideCircle(x, y, cx, cy, r){
    return (x - cx) * (x - cx) + (y - cy) * (y - cy) < r * r;
}

function isOutsideRectangle(x, y, top, bottom, left, right){
    return !(x >= left && x <= right && y <= top && y >= bottom);
}