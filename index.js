// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
	for (var i = 0; i < musicians.length; i++) {
		array.push(musicians[i].toString() + " plays " + instruments[i].toString());
	}
	console.log(array);
	return array;
}


function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while (i < facts.length) {
    array.push(facts[i].toString() + "!!!");
    i++;
  }
  console.log(array);
  return array;
}

function iLoveTheBeatles(num) {
  var array = [];
  var i = 0;
  do {
    array.push("I love the Beatles!");
    i++;
  } while (i < 15-num);
  
  console.log(array);
  return array;
  
}