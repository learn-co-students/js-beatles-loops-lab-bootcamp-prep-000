function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (let i = 0; i <  musicians.length; i++) {
    empty.push(musicians[i] + " " + "plays " + instruments[i]);
  }
  return empty;
}


function johnLennonFacts(facts) {
  var empty = []
  let i = 0
   while(i < facts.length){
  empty.push(facts[i] + "!!!");
  i += 1
  } return empty;
}

function iLoveTheBeatles(num) {
  var empty = [];
  do {
	empty.push("I love the Beatles!");
	num += 1;
	} while (num < 15);
	
	return empty;
} 

