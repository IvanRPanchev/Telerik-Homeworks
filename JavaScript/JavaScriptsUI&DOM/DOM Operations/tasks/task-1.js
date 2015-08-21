/* globals $ */

/* 
Create a function that takes an id or DOM element and an array of contents
* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

function solve() {
	return function (element, contents) {
		var element,
			contentsLength = contents.length,
			div = document.createElement('div'),
			fragment = document.createDocumentFragment();
			contents,
			clonedDiv;

		if(typeof(element) !== 'string' && !(element instanceof HTMLElement)){
      		throw new Error();
    	}
    	if (typeof(element) === 'string') {
      		element = document.getElementById(element)
    	} else {
      		element = element;
    	}
    	for (var i = 0; i < contentsLength; i+= 1) {
    		if (typeof contents[i] != 'string' && typeof content[i] !== 'number') {
    			throw new Error();
    		}
    	}
    	element.innerHTML = '';

    	for (var i = 0; i < contentsLength; i+=1) {
    		clonedDiv = div.cloneNode(true);
    		clonedDiv.innerHTML = contents[i];
    		fragment.appendChild(clonedDiv);
    	}

    	element.appendChild(fragment);
	};
}