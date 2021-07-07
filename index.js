
// add solution here
function theBeatlesPlay(musician,instrument) {
  var counter = [];
  for (let i = 0;i < musician.length;i++) {
    counter.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return counter;
}

function johnLennonFacts(array) {
  var i = 0;
  while (array[i]) {
    array[i] = array[i] + '!!!'; 
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
    var emptyArray = []
	do {emptyArray.push('I love the Beatles!');
        number++;}
    while (number < 15)
	return emptyArray;}