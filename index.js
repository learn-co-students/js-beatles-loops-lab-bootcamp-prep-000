function theBeatlesPlay(musicians, instruments) {
  var arr1 = [];
  for (var i = 0; i < musicians.length; i++) {
    if (i === 0) {
      arr1.push(`${musicians[0]} plays ${instruments[0]}`);
    } else {
      arr1.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  }
  return arr1;
}

function johnLennonFacts(facts) {
  var counter = 0;
  while (counter < facts.length) {
    facts[counter] += "!!!";
    counter++;
  }
  return facts;
} 

function iLoveTheBeatles(num) {
  var arr1 = [];
  var counter = 0;
  do {
    arr1.push("I love the Beatles!");
    counter++;
  } while (counter < num + 1 && num < 15);
  return arr1;
}