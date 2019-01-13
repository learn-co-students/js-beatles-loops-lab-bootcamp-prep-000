function theBeatlesPlay(a, b) {
  var sentences = []
  for (var i = 0; i < b.length; i++) {
  sentences.push(`${a[i]} plays ${b[i]}`);
  }
  return sentences
}

function johnLennonFacts(a) {
  var i = 0
  var newList = [];
  while (i < a.length) {
    var newFact = a.slice(i, i + 1) + "!!!";
    newList.push(newFact);
    i++;
  }
  return newList;
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15)
  return array
}