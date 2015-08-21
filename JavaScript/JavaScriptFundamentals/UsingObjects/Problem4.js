//Write a function that checks if a given object contains a given property.

console.log('----------------------------------------');
console.log('Problem 4. Has property');
console.log('----------------------------------------');

function hasProperty (){
			var obj  = {width: 12};
			console.log(obj, "has prop 'length'?", obj.hasOwnProperty('length'));
			console.log(obj, "has prop 'width'?", obj.hasOwnProperty('width'));
		}
hasProperty();