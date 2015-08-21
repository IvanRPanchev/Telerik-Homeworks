/*Write a function that finds all the occurrences of word in a text.
The search can be case sensitive or case insensitive.
Use function overloading.*/

console.log('----------------------------------------');
console.log('Problem 3. Occurrences of word');
console.log('----------------------------------------');

	var text = 'Ruby, Ruby, Ruby, Ruby Do you, do you, do you, do you Know what you\'re doing, doing, to me Ruby, Ruby, Ruby, Ruby'
		word = 'ruby';

	function WordCount(text, word, caseSensitive) {

    var index = 0,
        counter = 0;

    if (!caseSensitive) {
        text = text.toLowerCase();
        word = word.toLowerCase();
    }

    while (index != -1) {

        index = text.indexOf(word, index);

        if (index != -1) {
            index += 1;
            counter += 1;
        }
    }
    return counter;
}
console.log ('Case sensitive search for ruby');
console.log (WordCount(text, word, 'sensitive'));
console.log ('Case insensitive search for ruby');
console.log (WordCount(text, word, ''));