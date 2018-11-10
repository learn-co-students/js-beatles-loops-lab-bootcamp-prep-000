// add solution here
var newArray = [];

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts (facts) {
  let i = 0;
  while (i < facts.length) {
    facts[i]+= "!!!";
    i++;
}
  return facts;
}

function iLoveTheBeatles(n) {
  let array = [];
  do {
  array.push("I love the Beatles!");
  n++;
} while (n < 15);
  return array;
}
