/*Task 1.

Write a function that sums an array of numbers:
Numbers must be always of type Number
Returns null if the array is empty
Throws Error if the parameter is not passed (undefined)
Throws if any of the elements is not convertible to Number*/
function (){
	function sumarray (arr) {
if (arr === undefined) {
        throw 'Error! Pass an array!';
    } else if (!arr.length) {
        return null;
    } else {
        if (!arr.every(function(item) {
                return !isNaN(item);
            })) {
            throw 'Error! All array elements must be convertible to numbers.';
        }
    }

    return arr.reduce(function(result, item) {
        return result += item * 1;
    }, 0);
}
}
