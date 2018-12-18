// add solution here


function theBeatlesPlay (musicians, instruments) {
  var empty = [];
  for (var counter = 0; counter < musicians.length; counter++) {
    empty.push(`${musicians[counter]} plays ${instruments[counter]}`);
  }
  return empty;
}

function johnLennonFacts (facts) {
  var empty = [];
  var i = 0;
  while (i < facts.length) {
    empty.push(`${facts[i]}!!!`);
    console.log(i++);
  }
  return empty;
}

function iLoveTheBeatles(n) {
  var empty = [];
  do {
    empty.push("I love the Beatles!");
    n++;
  } while ( n < 15);
  return empty;
}