// Assign all the possible JavaScript literals to different variables.
// Try typeof on all variables you created.
// Create null, undefined variables and try typeof on them.
var string = 'Hello',
	int = 666,
	float = 1.234,
	arr = [1, 2, 3],
	object = {course: 'JS', part: 1},
	func = function(){return;},
	nullValue = null,
	undefinedValue = undefined,
	boolean = true,
	functionLiteral = function () {
        console.log('Hello from the function!');
    };

function logAndTypeOf(val, str) {
	console.log ('Problem 1,3,4')
    console.log('\n' + str + ' variable: ');
    console.log(val);
    console.log('typeof ' + str + ' variable: ');
    console.log(typeof(val));
}

var nullVar = null,
    undefinedVar;

var variables = [string, int, float, arr, object, func, nullValue, undefinedValue, boolean,functionLiteral];

for (var index in variables) {
    if (variables.hasOwnProperty(index)) {
        logAndTypeOf(variables[index], index);
    }
}
// Problem 2  Create a string variable with quoted text in it.
var quotedText = '\'How you doin\'?\', Joey said\'';
var anotherQuotedText = "'How you doin'?', Joey said'";
console.log ('\n' + 'Problem 2')
console.log('First quoted text: ');
console.log(quotedText);
console.log('Second quoted text: ');
console.log(anotherQuotedText);