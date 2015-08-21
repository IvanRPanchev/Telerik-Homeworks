function solve() {

    return function (element, contents) {
        var item,
            length = contents.length,
            currentContent,
            newDiv,
            divElement,
            dfg = document.createDocumentFragment();

        if (typeof element !== 'string' && element.nodeType != 1) {
            throw new Error();
        }

        if (typeof element === 'string') {
            item = document.getElementById(element);

            if (!item) {
                throw new Error();
            }
        } else {
            item = element;
        }

        for (var i = 0; i < length; i++) {
            currentContent = contents[i];
            if (typeof currentContent !== 'string' && typeof currentContent !== 'number') {
                throw new Error();
            }
        }

        item.innerHTML = '';
        newDiv = document.createElement('div');

        for (var i = 0; i < length; i++) {
            divElement = newDiv.cloneNode(true);
            divElement.innerHTML = contents[i];
            dfg.appendChild(divElement);
        }

        item.appendChild(dfg);
    };
};

module.exports = solve;