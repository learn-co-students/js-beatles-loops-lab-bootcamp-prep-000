function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; musicians.length > i; i++ ) {
    emptyArray.push(musicians[i] + " plays " +  instruments[i]);
  }
    return emptyArray
  }
  function johnLennonFacts(facts) {
    var moreFacts = [];
    var i = 0;
    while (facts. length > i) {
      moreFacts.push(facts[i] + "!!!");
      i++;
    }
    return moreFacts
  }
  
  function iLoveTheBeatles(n) {
    var anotherEmptyArray = [];
    do {
      anotherEmptyArray.push("I love the Beatles!");
      n++
    } while (n < 15);
    return anotherEmptyArray
  }
  