//Write a function that makes a deep copy of an object.
//The function should work for both primitive and reference types.

console.log('----------------------------------------');
console.log('Problem 3. Deep copy');
console.log('----------------------------------------');

	function clone(input) {
    var i,
        cloned = {};

    if (typeof input === 'object') {
        for (i in input) {
            if (input.hasOwnProperty(i)) {
                cloned[i] = clone(input[i]);
            }
        }
    } else {
        return input;
    }
    return cloned;
}

function problem3() {
    var clonedStr,
        clonedNum,
        clonedBool,
        clonedObj,
        str = 'string',
        num = 2,
        bool = true,
        obj = {
            name: 'Peter',
            age: 20,
            isStudent: true,
            university: 'SU',
            gpa: 5.00,
            toString: function () {
                return 'Name: ' + this.name + ', Age: ' + this.age + ', Student? ' + this.isStudent +
                    ', University: ' + this.university + ', GPA: ' + this.gpa.toFixed(2);
            }
        };
    console.log('Original:');
    console.log(str);
    console.log(num);
    console.log(bool);
    console.log(obj.toString());

    clonedStr = clone(str);
    clonedNum = clone(num);
    clonedBool = clone(bool);
    clonedObj = clone(obj);

    console.log('Cloned:');
    console.log(clonedStr);
    console.log(clonedNum);
    console.log(clonedBool);
    console.log(clonedObj.toString());

    clonedStr = 'newStr';
    clonedNum = 22;
    clonedBool = false;
    clonedObj = {
        name: 'Ivan',
        age: 30,
        isStudent: false,
        toString: function () {
            return 'Name: ' + this.name + ', Age: ' + this.age + ', Student? ' + this.isStudent;
        }
    };

    console.log('Cloned - changed:');
    console.log(clonedStr);
    console.log(clonedNum);
    console.log(clonedBool);
    console.log(clonedObj.toString());
    console.log('Original - not:');
    console.log(str);
    console.log(num);
    console.log(bool);
    console.log(obj.toString());
}
problem3();
