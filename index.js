// add solution here
function theBeatlesPlay (musicians, instruments) {
  var newArray = [];
  
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  var arrayFacts  = []
  
  while (i < facts.length) {
    arrayFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return arrayFacts;
}

function iLoveTheBeatles(number) {
  var arrayBeatles = [];
  
  do {
    arrayBeatles.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return arrayBeatles;
}