function theBeatlesPlay(musicians, instruments) {
  var myArr = [];
  for (var i = 0; i < musicians.length; i++) {
    myArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return myArr;
}

function johnLennonFacts(facts) {
  var counter = facts.length - 1
  while (counter >= 0) {
    facts[counter] += "!!!";
    counter--
  }
  return facts;
}


function iLoveTheBeatles(n) {
  var myArr = [];
  do {
    myArr.push("I love the Beatles!")
    n++
  } while (n < 15)
  return myArr;
}
