function theBeatlesPlay(musicians, instruments){
	var whoPlaysWhat = [];
	var musiciansLength = musicians.length;
	var intrumentsLength = instruments.length;

	//find largest length.
	var min_length = Math.min(musiciansLength, intrumentsLength);

	for (var i = 0; i < min_length; i++){
		whoPlaysWhat[i] = `${musicians[i]} ${"plays"} ${instruments[i]}`; 
	}

	return whoPlaysWhat;
}

function johnLennonFacts(facts){
	var factsWithExclamation =  [];

	var index = 0;
	while(index < facts.length)
	{
		factsWithExclamation[index] = `${facts[index]}${"!!!"}`;
		index++;

	} 

	return factsWithExclamation;
}


function iLoveTheBeatles(number){
	var love_array = [];
	var love_message = "I love the Beatles!";

	do{
		love_array.push(love_message);
		number++;

	}while(number < 15);

	return love_array;
}
// var musicians = ["juan this nuts", "joe whoknows"];
// var instruments = ["guitar", "bass"];

// var what = theBeatlesPlay(musicians, instruments);

//console.log(what);
// console.log(what[1])


