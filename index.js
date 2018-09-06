function theBeatlesPlay(musicians, instruments) {
  var newArray = new Array();
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    var element = facts[i] + "!!!";
    facts.splice(i, 1, element);
    i++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var newArray = new Array();
  do {
    newArray.push("I love the Beatles!")
  } while (14 > n && n++); // The condition of the loop should check to see that
                           // the parameter number is less than 15.
                           // Remember Arrays are 0 indexed so 15 = 14
  return newArray
}
