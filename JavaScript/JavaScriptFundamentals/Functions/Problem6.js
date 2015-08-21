//Write a function that checks if the element at given position 
//in given array of integers is bigger than its two neighbours (when such exist).

console.log('----------------------------------------');
console.log('Problem 6. Larger than neighbours');
console.log('----------------------------------------');

function checkNeighbours (array, position) {
	var len = arr.length,
        isBigger = false;
        if(!(position)){
      		if(array[position] > array[position + 1]){
          		isBigger = true;
      		}else{
          		isBigger;
      		}
   		}else if (position === (len - 1)){
       		if (array[position] > array[position - 1]){
           		isBigger = true;
       		}else{
           		isBigger;
       		}
   		}else{
       		if((array[position] > array[position - 1]) && (array[position] > array[position + 1])){
           		isBigger = true;
       		}else{
           		isBigger;
       		}
   			}
    return console.log('Is'+ ' '+array[position] + " is Bigger that its two neighbours? " + isBigger);
}

checkNeighbours([1,2,3,4,6,5], 4);
checkNeighbours([1,2,3,4,6,5], 2);