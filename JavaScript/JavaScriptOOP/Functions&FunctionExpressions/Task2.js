/*Task 2.

Write a function that finds all the prime numbers in a range
It should return the prime numbers in an array
It must throw an Error if any of the range params is not convertible to Number
It must throw an Error if any of the range params is missing*/
function () {
	return function allPrimesInRange (start, end) {

	var i,
        result = [];

    if (start === undefined || end === undefined) {
        throw {message: 'Error! All or some of the parameters are not passed to the function'};
    }

    if (!isFinite(start) || !isFinite(end)) {
        throw { message: 'Error! All or some of the input parameters are not numbers'};
    } else {
        start = +start;
        end = +end;
    }

    for (i = start; i <= end; i += 1) {

        if (isPrime(i)) {
            result.push(i);
        }
    }

    function isPrime(number) {

        var divisor,
        	maxDivisor = Math.sqrt(number);

        if (number < 2) {
            return false;
        }

        for (divisor = 2; divisor <= maxDivisor; divisor += 1) {
            if (!(number % divisor)) {
                return false;
            }
        }

        return true;
    }


    return result;
}
}