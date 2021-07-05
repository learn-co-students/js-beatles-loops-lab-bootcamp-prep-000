// add solution here

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) { newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var exp = "!!!"
  var i = 0;
  while ( i < facts.length) {
    facts[i] = facts[i] + exp;
    i++
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var sentence = [];
  do {
    sentence.push("I love the Beatles!");
    num++
  } while (num < 15);
  return sentence;
}