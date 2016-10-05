function theBeatlesPlay(musicians,instruments) {
  var a = [];
  for (var b = 0; b < musicians.length; b++) {
    a.push(musicians[b] + " plays " + instruments[b]);
  }
  return a;
}

function johnLennonFacts(fact) {
  var a = 0;
  while (a < fact.length) {
    fact[a] = fact[a] + "!!!";
    a++;
  }
  return fact;
}

function iLoveTheBeatles(number) {
  var a = ["I love the Beatles!"];
  var b = 1;
  if (number < 15) {
    do {
      a.push("I love the Beatles!");
      b++;
    }
    while (b < number+1);
  }
  return a;
}
