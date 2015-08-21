/*Write a function for creating persons.
Each person must have firstname, lastname, age and gender (true is female, false is male)
Generate an array with ten person with different names, ages and genders*/

console.log('----------------------------------------');
console.log('Problem 1. Make person');
console.log('----------------------------------------');

function personMaker(fname, lname, age, isFemale) {
	return {
		FirstName: fname,
		LastName: lname,
		age,
		isFemale
	};
}

function peopleMaker(count) {
	var femalesFirst = ['Maria', 'Stephany', 'Georgia', 'Monika', 'Anna', 'Abby'],
		malesFirst = ['Jon', 'Bob', 'John', 'Ben', 'Peter', 'Stephen', 'Michael'],
		lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Davis', 'Miller', 'Taylor', 'Anderson'],
		people = [];
		for (var i = 0; i < count; i++) {
		if (Math.round(Math.random())) {
			people[i] = personMaker(femalesFirst[Math.random()*femalesFirst.length | 0], 
									lastNames[Math.random()*lastNames.length | 0],
									10 + Math.random()*70 | 0,
									true);
		} else {
			people[i] = personMaker(malesFirst[Math.random()*malesFirst.length | 0],
									lastNames[Math.random()*lastNames.length | 0],
									12 + Math.random()*80 | 0,
									false);
		}
		
	}
	return people;
}
var people = peopleMaker(10);
people.forEach(function(item) {
    console.log(item);
});
/*Problem 2. People of age

Write a function that checks if an array of person contains only people of age (with age 18 or greater)
Use only array methods and no regular loops (for, while)*/

console.log('----------------------------------------');
console.log('Problem 2. People of age');
console.log('----------------------------------------');

	var answer = (people.every(function (person) {
	return person.age > 18;
	}));
	if (answer === true) {
		console.log('Every person is of age!')
	} else {
		console.log('Not every person is of age!')
	}

/*Write a function that prints all underaged persons of an array of person
Use Array#filter and Array#forEach
Use only array methods and no regular loops (for, while)*/

console.log('----------------------------------------');
console.log('Problem 3. Underage people');
console.log('----------------------------------------');

	var underaged = people.filter(function (person) {
		return person.age < 18;
	}).forEach(function(item) {
        console.log(item);
    });
    if (answer === true) {
		console.log('There are no underaged people. Please refresh.')
	}
/*Write a function that calculates the average age of all females, extracted from an array of persons
Use Array#filter
Use only array methods and no regular loops (for, while)*/

console.log('----------------------------------------');
console.log('Problem 4. Average age of females');
console.log('----------------------------------------');
	
	var females = people.filter(function (person) {
		return person.isFemale == true
	});
	var ageOfFemales = females.reduce(function(a, b){
		return a + b.age;
	},0)/females.length;

console.log('The average age of the females is ' + ageOfFemales);

/*Write a function that finds the youngest male person in a given array of people and prints his full name
Use only array methods and no regular loops (for, while)
Use Array#find*/

console.log('----------------------------------------');
console.log('Problem 5. Youngest person');
console.log('----------------------------------------');

var findYongest = function(personArr) {
	function sortByAge(first, second) {
		return first.age - second.age;
	}
	people = people.sort(sortByAge); 
	return people[0].FirstName + ' ' + people[0].LastName + ' , ' + people[0].age +  ' years old';
};
console.log('The yongest is ' + findYongest(people));

/*Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
Use Array#reduce
Use only array methods and no regular loops (for, while)*/

console.log('----------------------------------------');
console.log('Problem 6. Group people');
console.log('----------------------------------------');

var sorted = people.reduce(function (obj, item) {

    if (obj[item.FirstName[0]]) {
        obj[item.FirstName[0]].push(item);
    } else {
        obj[item.FirstName[0]] = [item];
    }
    return obj;
}, {});

console.log(sorted);