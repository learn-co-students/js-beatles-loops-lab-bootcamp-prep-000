// add solution here

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
 	var f = 0;
	while(f < facts.length) {
 		facts[f] = facts[f] +"!!!";
  	f++;
	}
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while(number < 15);
  return array;
}

