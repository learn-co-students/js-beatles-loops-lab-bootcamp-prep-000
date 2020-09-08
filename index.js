// add solution here

var array = [];

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < musicians.length; i++ ) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var count = 0;
  var newFacts = [];
  while (count < facts.length) {
    newFacts[count] = `${facts[count]}!!!`;
    console.log(newFacts[count])
    count ++;
  }
  return newFacts;
}

function iLoveTheBeatles(num) {
  num ++
  var numArray = [];
  do {
    numArray.push("I love the Beatles!");
  } while (num ++ < 15); 
  return numArray;
}