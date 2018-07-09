// add solution here
function theBeatlesPlay(musician, instrument) {
  var match = [];
  for (var i=0; i<musician.length; i++) {
    match.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return match;
}

function johnLennonFacts(factsArray) {
  var i = 0;
  while (i <factsArray.length) {
    factsArray[i] += "!!!";
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num<15);
  return array;
}