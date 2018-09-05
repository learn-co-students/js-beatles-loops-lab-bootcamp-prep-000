// add solution here
function theBeatlesPlay(aArray, iArray) {
  var array = [];
  for (; aArray.length > 0;) {
    array.push(aArray.splice(0,1) + " plays " + iArray.splice(0,1))
  }
  return array
}
function johnLennonFacts(facts) {
	let countup = 0;
	while (countup < facts.length) {
		facts[0 + countup] = facts[0 + countup] + "!!!";
		++countup;
	}
	return facts
}
function iLoveTheBeatles(numb) {
	var earray = [];
	do {
		earray.push("I love the Beatles!");
		++numb;
	} while (numb < 15);
	return earray 
}
	