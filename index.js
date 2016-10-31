//FUNCITON #1
function theBeatlesPlay(musicians, instruments){
	const myArray = []
	for (var i = 0; i < musicians.length; i++){
		myArray.push(`${musicians[i]} plays ${instruments[i]}`)

	}
	return myArray

}


//FUNCTION #2

function johnLennonFacts(facts){
var	counter = 0;
const myArray = [];
	while(counter < facts.length){
		myArray.push(`${facts[counter]}!!!`);
		counter++;

	}
	return myArray;
}


//FUNCTION 3
function iLoveTheBeatles(x){
	const myArray = []
	do{ myArray.push("I love the Beatles!");
	x++;
	}while (x<15);
	return myArray;
}
