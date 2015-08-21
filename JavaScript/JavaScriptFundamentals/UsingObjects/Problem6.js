/*Write a function that groups an array of people by age, first or last name.
The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
Use function overloading (i.e. just one function)

Example:

var people = {…};
var groupedByFname = group(people, 'firstname');
var groupedByAge= group(people, 'age');*/

console.log('----------------------------------------');
console.log('Problem 6.');
console.log('----------------------------------------');

function buildPerson(fname, lname, age) {
	return {
		fname: fname,
		lname: lname,
		age: age
	};
}

var gosho = buildPerson('gosho', 'georgiev', 25);
var ivan = buildPerson('ivan', 'ivanov', 23);
var misho = buildPerson('misho', 'mihailov', 26);
var misho2 = buildPerson('misho', 'georgiev', 26);


var people = [gosho, ivan, misho, misho2];

function groupPeopleBy (peopleArr, key) {
	if (peopleArr.length === 0) {
		return null;
	}

	// check to see if given key exists in the objects of the array
	if (!peopleArr[0].hasOwnProperty(key)) {
		return null;
	}

	var groupedPeople = {},
		i;

	for (i in peopleArr) {
		// check if current object`s key value exists as property name in the resulting associative array and if it doesn`t create it as empty array
		var groupProperty = peopleArr[i][key];

		if (!groupedPeople.hasOwnProperty(groupProperty)) {
			groupedPeople[groupProperty] = [];
		}
		// if current object`s key value exists as property name in the resulting associative array, add current object to this property in the associative array. This property is also an array, because we would have created it in the previous if statement
		groupedPeople[groupProperty].push(peopleArr[i]);
	}

	return groupedPeople;
}

var groupedByAge = groupPeopleBy(people, 'age');
console.log(groupedByAge);
var groupByFname = groupPeopleBy(people, 'fname');
console.log(groupByFname);
var groupByLname = groupPeopleBy(people, 'lname');
console.log(groupByLname);