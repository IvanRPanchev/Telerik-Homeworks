/*Write a function that removes all elements with a given value.
Attach it to the array type.
Read about prototype and how to attach methods.

var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];*/

console.log('----------------------------------------');
console.log('Problem 2. Remove elements');
console.log('----------------------------------------');

if (!Array.hasOwnProperty('removeAll')) {
	Array.prototype.removeAll = function(item) {
		var i,
			length = this.length;

		for (i = 0; i < length; i += 1) {
			if (this[i] === item) {
				this.splice(i, 1);
				i -= 1;
				length -= 1;
			}
		}
	}
}

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log(arr);
arr.removeAll(1);
console.log(arr);