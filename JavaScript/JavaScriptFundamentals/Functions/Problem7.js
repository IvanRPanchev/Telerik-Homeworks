/*Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
Use the function from the previous exercise.*/

console.log('----------------------------------------');
console.log('Problem 7. First larger than neighbours');
console.log('----------------------------------------');

function checkNeighbours(array){
    array = array || [];

    var len = array.length,
        index;

    for (index = 0; index < len; index += 1) {

        if (!(index)) {
            if (array[index] > array[index + 1]) {
                return console.log('The index of the element is: ' + index );
            }
        } else if (index === (len - 1)) {
            if (array[index] > array[index - 1]) {
                return console.log('The index of the element is: ' + index);
            } else {
                return console.log(-1);
            }
        } else {
            if ((array[index] > array[index - 1]) && (array[index] > array[index + 1])) {
                return console.log('The index of the element is: ' + index);
            }
        }
    }
}

checkNeighbours([1,2,3,4,6,5]);