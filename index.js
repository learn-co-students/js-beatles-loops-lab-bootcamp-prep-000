function theBeatlesPlay (artist, instrument){
  var array = [];
  for(var i = 0; i < artist.length; i++){
    array.push(`${artist[i]} plays ${instrument[i]}`);
  }
  return array;
}

function johnLennonFacts(array){
	var factsArray = [];
	for(var i = 0; i < array.length; i++){
		factsArray.push(`${array[i]}!!!`);
	}
	return factsArray;
}

function iLoveTheBeatles(num){
	var array = ["I love the Beatles!"];
	if(num < 15){
		for(var i = 0; i < num; i++){
			array.push("I love the Beatles!");
		}
	}
	return array;
}
