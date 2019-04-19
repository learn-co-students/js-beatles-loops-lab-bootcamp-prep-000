// add solution here
var musicians = [];
var instruments = [];

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  
  for (let i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArray;
}

function johnLennonFacts(facts) {
  var newArray = [];
  var count = 0;
  
  while (count < facts.length) {
    newArray.push(`${facts[count]}` + "!!!");
    count ++;
  }
  return newArray;
}

function iLoveTheBeatles(num) {
  var newArray = [];

  do {
    newArray.push("I love the Beatles!");
    num ++;
  } while (num < 15);
  return newArray;
}