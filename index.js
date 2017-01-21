function theBeatlesPlay(x, y) {
  var x = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  var y = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
  var z = []
  var i = 0
  for (i = 0; i < x.length && i < y.length; i++) {
    z.push(x[i] + " plays " + y[i]);
  }

  return z
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i]+ "!!!";
    i++;
  }
  return facts
}

function iLoveTheBeatles(n) {
  var z = []
  do {
    z.push("I love the Beatles!");
    n++
  }
  while (n < 15);
  return z
}
