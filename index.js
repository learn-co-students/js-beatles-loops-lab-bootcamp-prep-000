function theBeatlesPlay (musicArray, intArray) {
  var storage = [];
  for (var i = 0; i < musicArray.length; i++) {
    storage.push(musicArray[i] + " plays " + intArray[i])
  }
    return storage;
  }

  function johnLennonFacts(facts) {
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
      newFacts.push(facts[i] + "!!!")
    }
    return newFacts;
  }

  function iLoveTheBeatles(num) {
    var newArray = [];
    do {
      newArray.push("I love the Beatles!")
      num++;
    }
    while (num > 15) {
      return newArray;
    }
  }