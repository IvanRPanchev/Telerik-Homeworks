//Write a function that counts how many times given number appears in given array.
//Write a test function to check if the function is working correctly.

console.log('----------------------------------------');
console.log('Problem 5. Appearance count');
console.log('----------------------------------------');

function counterApp(array, number) {
    var countApp = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == number) {
            countApp += 1;
        }
    }
    return countApp;
}

var arr = [1, 2, 3, 5, 2, 1, 2, 3, 5, 5, 77, 4, 2, 2, 2];
var currNum = '2';

function appearanceCount() {
    console.log('Number ' + currNum + ' appears:' + counterApp(arr, currNum) + ' times');

    if (testFunction()) {
        console.log("Test successful");
    } else {
        console.log("Test fail");
    }
}

function testFunction() {
    var testArray = [1, 1, 1, 1, 2, 2, 2, 3];
    var testNumber = '1';
    var testResult = '4';

    return counterApp(testArray, testNumber) == testResult;
}


appearanceCount();