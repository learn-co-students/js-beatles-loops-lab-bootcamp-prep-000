function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var array = [];

  for (var i = 0; i < musiciansArray.length; i++) {
    array.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`);
  }

  return array;
}

function johnLennonFacts(factsArray) {
  var array = [];
  var i = 0

  while (i < factsArray.length) {
    array.push(factsArray[i] + "!!!");
    i++;
  }

  return array;
}

function iLoveTheBeatles(n) {
  var array = [];

  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15)

  return array;
}
