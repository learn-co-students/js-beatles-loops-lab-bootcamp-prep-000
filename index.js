// add solution here
function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for(let i=0; i<musicians.length; i++) {
      empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empty;
}

function johnLennonFacts(facts) {
  var results = [];
  var count = 0;
  while (count < facts.length) {
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}

 function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return array;
}
