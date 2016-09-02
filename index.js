function theBeatlesPlay(musician, instrument){
	var result = [];
	for (var i = 0; i < musician.length; i++){
		result.push(`${musician[i]} plays ${instrument[i]}`);
	}
	return result
}

function johnLennonFacts(array){
var results = []
	for (var i = 0; i < array.length; i++){
	results.push(array[i] + "!!!")
	}
	return results
}

function iLoveTheBeatles(num){
var result = []
	do {result.push("I love the Beatles!");
		num++
	}
	while (num < 15)
	return result
}
