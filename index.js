function theBeatlesPlay(m, i) {
  var myArray = [];
  for (var c = 0; c < m.length; c++) {
    var newPlay = m.slice(c, c+1) + " plays " + i.slice(c, c+1);
    myArray.push(newPlay);
  }
  return myArray;
}

function johnLennonFacts(f) {
  var johnArray = [];
  var c = 0;
  while (c < f.length) {
    var newFact = f.slice(c, c+1) + "!!!";
    johnArray.push(newFact);
    c = c + 1;
  }
  return johnArray;
}

function iLoveTheBeatles(n) {
  var loveArray = [];
  do {
    loveArray.push("I love the Beatles!");
    n = n + 1;
  }
  while (n < 15)
  return loveArray;
}