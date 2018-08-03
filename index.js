
function theBeatlesPlay(musicians, instruments) {
  var nameInstru = [];
  for (let i = 0; i < musicians.length; i++) {
      nameInstru.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return nameInstru;
}


function johnLennonFacts(facts) {
  var newArray = [];
  var i = 0;
  while (i < facts.length) {
  newArray.push(facts[i] + "!!!");
  i++;
  }
  return newArray;
}


function iLoveTheBeatles(number) {
  var array = [];
  do {
    (number++);
    array.push("I love the Beatles!");
  } while (number < 15);
  return array;
}



