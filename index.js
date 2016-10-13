function theBeatlesPlay(musiciansArray, instrumentsArray) {
	var myArray = [];
	for (var i = 0; i < musiciansArray.length; i++) {
		myArray.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
	}
	return myArray
}


function johnLennonFacts(factsArray) {
	var i = 0;
	while (i < factsArray.length) {
	  factsArray[i] =	factsArray[i] + "!!!";
		i++;
	}
	return factsArray
}


function iLoveTheBeatles(number) {
	var myNewArray = [];
	do {
		myNewArray.push("I love the Beatles!");
		number++;
	} while (number < 15);
	return myNewArray
}
