function theBeatlesPlay(arrM, arrI) {
	var beatles = [];
  for (var i = 0; i < arrM.length; i++) {
 		beatles.push(`${arrM[i]} plays ${arrI[i]}`);
  }
	return beatles;
}

function johnLennonFacts(arrFacts) {
  var i = 0;
  while (arrFacts[i]) {
    arrFacts[i] = arrFacts[i] + "!!!";
    i++;
  }
  return arrFacts;
}
function iLoveTheBeatles(num) {
	var timesSaid = [];
	var i = 0;
	do {
		timesSaid.push("I love the Beatles!");
		num++;
	} while (num < 15);
	return timesSaid;
}
