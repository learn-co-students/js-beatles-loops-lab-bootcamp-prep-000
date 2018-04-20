function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var musicians = [];
  
  
  for (var i = 0; i < musiciansArray.length; i++) {
    
    musicians.push(musiciansArray[i] + ' plays ' + instrumentsArray[i]);
  };
  console.log(musicians);
  return musicians;
};

theBeatlesPlay( ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"], ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"] );

function johnLennonFacts(facts) {
  var results = [];
  var count = 0;
  while (count < facts.length) {
    console.log(results.push(facts[count] + "!!!") );
    count++;
  }
  return results;
}


function iLoveTheBeatles(num) {
	var array = [];
	do {
		array.push("I love the Beatles!");
		num++;
	} while (num < 15);

	return array;

};

iLoveTheBeatles(7);

