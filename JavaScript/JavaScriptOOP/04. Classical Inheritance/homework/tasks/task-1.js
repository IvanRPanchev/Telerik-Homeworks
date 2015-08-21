/* Task Description */
/* 
	Create a function constructor for Person. Each Person must have:
	*	properties `firstname`, `lastname` and `age`
		*	firstname and lastname must always be strings between 3 and 20 characters, containing only Latin letters
		*	age must always be a number in the range 0 150
			*	the setter of age can receive a convertible-to-number value
		*	if any of the above is not met, throw Error 		
	*	property `fullname`
		*	the getter returns a string in the format 'FIRST_NAME LAST_NAME'
		*	the setter receives a string is the format 'FIRST_NAME LAST_NAME'
			*	it must parse it and set `firstname` and `lastname`
	*	method `introduce()` that returns a string in the format 'Hello! My name is FULL_NAME and I am AGE-years-old'
	*	all methods and properties must be attached to the prototype of the Person
	*	all methods and property setters must return this, if they are not supposed to return other value
		*	enables method-chaining
*/
function solve() {
	var Person = (function () {

		function isValidName(str) {
			var regex =  /^[a-zA-Z ]{3,20}$/;
			return regex.test(str);
		}

		function isValidAge(number) {
			var age = parseInt(number, 10);
			return age >= 0 && age <= 150;
		}



		function Person(firstname, lastname, age) {
			this.firstname = firstname;
			this.lastname = lastname;
			this.age = age;
		}

		Object.defineProperty(Person.prototype, 'firstname', {
			get: function () {
				return this._firstname;
			},
			set: function (str) {
				if(!isValidName(str)) {
					throw Error('Error! The first name you have entered is invalid! It must be between 3 and 20 characters long and in Latin.')
				}
				this._firstname=str;
			}
		});

		Object.defineProperty(Person.prototype, 'lastname', {
			get: function () {
				return this._lastname;
			},
			set: function (str) {
				if(!isValidName(str)) {
					throw Error('Error! The last name you have entered is invalid! It must be between 2 and 20 characters long and in Latin.')
				}
				this._lastname=str;
			}
		});

		Object.defineProperty(Person.prototype, 'age', {
			get: function () {
				return this._age;
			},
			set: function (number) {
				if(!isValidAge(number)) {
					throw Error('Error! The age you have entered is invalid! It must be a number between 0 and 150.')
				}
				this._age=parseInt(number,10);
			}
		});


		Object.defineProperty(Person.prototype, 'fullname', {
			get: function() {
				return this._firstname + ' ' + this._lastname;
			},
			set: function(str) {
				var names = str.split(' ');

				this.firstname = names[0];
				this.lastname = names[1];
			}
		});

		Person.prototype.introduce = function () {
            return 'Hello! My name is ' + this.fullname + ' and I am ' + this.age + '-years-old';
        };

		
		
		return Person;
	}());
	return Person;
}
module.exports = solve;