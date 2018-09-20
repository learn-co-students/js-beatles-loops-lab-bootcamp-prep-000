// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  var myString = "";
  for ( var i = 0; i < musicians.length; i++) {
    myString = musicians[i] + " plays " + instruments[i];
    newArr.push(myString);
  }
  return newArr;
}

function johnLennonFacts(facts) {
  var index = 0;
  while (index < facts.length) {
    facts[index] = facts[index] + "!!!";
    index++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var newArr = [];
  do {
    newArr.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return newArr;
}